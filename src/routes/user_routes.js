import express from "express"
import { user_create, user_read } from "../controllers/user_controller"

const user_routes = express.Router()

// create
user_routes.post("/api/user/create", user_create)

//read 
user_routes.get("/api/users/read", user_read)

export default user_routes