import {getAllUserService} from "../../services/users/userService.js";
import {buildSuccessResponse} from "../../ultils/successResponse.js";
import {buildErrorResponse} from "../../ultils/errorResponse.js";

export const getAllUserController = async (req, res) => {
    try {
        const data = await getAllUserService(
            {},
            req.query.perpage ?? process.env.DEFAULT_PERPAGE,
            req.query.page ?? process.env.DEFAULT_CURRENT_PAGE
        );
        res.send(buildSuccessResponse(data));
    } catch (e) {
        console.log(e);
        return buildErrorResponse();
    }
}