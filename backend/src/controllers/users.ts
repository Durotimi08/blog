import { NextFunction, Request, Response } from "express";
import prisma from "../config/prisma";

export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const foundUser = await prisma.user.findUnique({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json(foundUser);
    } catch (error) {
        next({ error, message: "User not found." });
    }
};

export const updateUser = async (
    req: Request,
    res: Response,
    // next: NextFunction,
) => {
    try {
        // Define the fields you want to exclude
        const fieldsToExclude = ["timestamp", "signature"];

        // Create a new object excluding the specified fields
        const filteredBody = Object.fromEntries(
            Object.entries(req.body).filter(
                ([key]) => !fieldsToExclude.includes(key),
            ),
        );
        // Update user data in the database
        const updatedUser = await prisma.user.update({
            where: {
                id: req.params.id,
            },
            data: {
                ...filteredBody,
                avatar: req.image || undefined,
            },
        });

        // Respond with the updated user data
        res.status(200).json(updatedUser);
    } catch (error) {
        // Handle Prisma and other errors
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: "An error occurred while updating the user",
        });
    }
};
