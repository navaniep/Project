import { User } from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import { response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const signup = async(request, response, next) => {
    const { username, email, password } = request.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        response.status(201).json("User Creation Successful");
    } catch (error) {
        next(error);
    }
};

export const signin = async(request, response, next) => {
    const {email, password} = request.body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) return next(errorHandler(404, "User Not Found"));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Invalid credentials"));

        const token = jwt.sign({id: validUser._id}, JWT_SECRET);
        response.cookie('access_token', token, {httpOnly: true}).status(200).json({message: "Login Successful!"});


    } catch (error) {
        next(error);
    }
}