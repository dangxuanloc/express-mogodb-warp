import {buildSuccessResponse} from "../../ultils/successResponse.js";
import {buildErrorResponse} from "../../ultils/errorResponse.js";
import {loginService} from "../../services/au/loginService.js";

export const loginController = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const data = await loginService(email, password);
        res.send(buildSuccessResponse(data));
    } catch (e) {
        console.log(e);
        return buildErrorResponse();
    }
}