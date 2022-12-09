import db from "../../prisma/connection"
import { request, response } from "express"

// create user
export const user_create = async (req = request, res = response) => {
    try {
        const data = await req.body
        const createUser = await db.users.create({
            data: data
        })
        return res.status(201).json({
            success: true,
            message: "User berhasil di buat"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// user read
export const user_read = async (req = request, res = response) => {
    try {
        const result = await db.users.findMany()
        return res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}