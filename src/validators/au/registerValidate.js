import {check} from 'express-validator';

export const registerValidate = () => {
    return [
        check('name', 'username does not Empty').not().isEmpty(),
        check('password', 'Invalid does not Empty').not().isEmpty(),
        check('phone', 'Invalid does not Empty').not().isEmpty(),
        check('email', 'Invalid does not Empty').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'password more than 6 degits').isLength({min: 6})
    ];
}