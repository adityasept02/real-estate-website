import user from "../models/user.model";
import { errorhandle } from "../utils/error";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const existingUser = await user.findOne({ username })

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists!"
            })
        }

        const newUser = new user({ username, email, password: hashedPassword });
        newUser.save();

        return res.status(200).json({
            success: true,
            message: "User created successfully!"
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Internal server error"
        })
    }

};
export const signin = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const validUser = await user.findOne({ email });
        if (!validUser) return next(errorhandle(404, 'not user'));
        const validpass = bcryptjs.compareSync(password, validUser.password);
        if (!validpass) return next(errorhandle(401, 'wrong pass'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(validUser);

    }
    catch (error) {
        next(error);
    }
};