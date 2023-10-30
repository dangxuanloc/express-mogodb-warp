import jwt from "jsonwebtoken";

const generateToken = (payload, expireTime = '3600s') =>
    jwt.sign({...payload}, process.env.JWT_SECRET, {expiresIn: expireTime});
export default generateToken;