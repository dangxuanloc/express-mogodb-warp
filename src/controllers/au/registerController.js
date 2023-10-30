import {registerService} from "../../services/au/registerService.js";
import {buildSuccessResponse} from "../../ultils/successResponse.js";
import {buildErrorResponse} from "../../ultils/errorResponse.js";
import {validationResult} from 'express-validator';

export const registerController = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const response = buildErrorResponse({}, errors.array());
            return res.status(400).send(response);
        }

        const {email, password, phone, name} = req.body;
        const newUser = await registerService(email, password, phone, name);
        return res.send(buildSuccessResponse(newUser));
    } catch (e) {
        console.log(e);
        return res.send(buildErrorResponse());
    }
}