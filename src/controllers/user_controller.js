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

        // let page =1
        // let limit = 10
        let {page=1, limit=10}= req.query //menghasilkan string
        let skip = (page-1) * limit
        const result = await db.users.findMany({
            //take : 10,
            take : parseInt(limit),
            //skip:10
            skip:skip
        })

        //informasi total data keseluruhan 
        const resultCount = await db.users.count()//integer jumlah total data user

        //generated total page
        const totalPage= Math.ceil(resultCount/limit)

        return res.status(200).json({
            success: true,
            current_page: page - 0, //ini -0 merubah menjadi integer
            total_page : totalPage,
            total_data : resultCount,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}