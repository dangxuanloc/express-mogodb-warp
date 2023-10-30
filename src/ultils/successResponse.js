import {RES_STATUS} from './constants.js';

export const buildSuccessResponse = (data = undefined, message = RES_STATUS.MESSAGE.SUCCESS) => {
    return {
        messages: message,
        data: data,
        status: RES_STATUS.STATUS.SUCCESS
    };
};