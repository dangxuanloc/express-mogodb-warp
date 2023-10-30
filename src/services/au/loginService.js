import bcrypt from 'bcrypt';
import userModel from '../../models/user.js';
import generateToken from "../../helpers/generateToken.js";
import {updateRefreshToken} from "../users/userService.js";
// mongoose.set('debug', true);

export const loginService = async (email, password) => {
    const user = await userModel.findUserByOneField({email: email});

    if (user === null) {
        return "Tài khoản không tồn tại trong hệ thống";
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return "Mật khẩu không đúng"
    }

    const payloadToken = {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email
    };

    const dataResponseLogin = {
        access_token: generateToken(payloadToken),
        refresh_token: generateToken(payloadToken, '2d'),
        user: payloadToken
    }

    // login xong sẽ lưu refresh token vào db
    await updateRefreshToken(payloadToken.id, dataResponseLogin.refresh_token);

    return dataResponseLogin;
}