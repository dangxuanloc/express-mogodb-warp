import userModel from "../../models/user.js";


export const updateRefreshToken = async (id, newRefreshToken) => {
    await userModel.findAndUpdateUser(
        {_id: id},
        {$set: {refresh_token: newRefreshToken}}
    );
}

export const getAllUserService = async (option, perPage, page) => {
    const totalRecord = await userModel.countUserByOption(option);

    const skipRecord = (page - 1) * perPage;
    const users = await userModel.getUserByOptionWithPaginate(option, skipRecord, +perPage)

    return {
        totalPage: Math.ceil(totalRecord / perPage),
        currentPage: +page,
        perPage: +perPage,
        users: users
    }
}

