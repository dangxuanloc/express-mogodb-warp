import userModel from '../../models/user.js';
import bcrypt from "bcrypt";

export const registerService = async (email, password, phone, name) => {
    const user =  userModel.findUserByOneField({email: email});
    if (user) {
        return 'Tài khoản đã tồn tại';
    }

    const newUser = {
        name: name,
        email: email,
        phone: phone,
        password: await bcrypt.hashSync(password, 10)
    }
    await userModel.createUser(newUser);
    return newUser;
}