import userModel from '../../models/user.js';
import generateToken from "../../helpers/generateToken.js";
import {updateRefreshToken} from "../users/userService.js";

export const refreshTokenService = async (refreshToken) => {

    const user = await userModel.findUserByOneField({refresh_token: refreshToken});

    if (user == null) {
        return "Refresh token không tồn tại trong hệ thống";
    }

    const newToken = {
        access_token: generateToken(user._id),
        refresh_token: generateToken(user._id, '2d')
    };

    await updateRefreshToken(user._id, newToken.refresh_token);
    return newToken;
}