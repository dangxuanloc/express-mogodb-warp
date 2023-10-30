import {RES_STATUS} from './constants.js';

export const buildErrorResponse = (data = undefined, message = RES_STATUS.MESSAGE.SERVER_ERROR) => {
    return {
        messages: message,
        data: data,
        status: RES_STATUS.STATUS.SERVER_ERROR
    };
};