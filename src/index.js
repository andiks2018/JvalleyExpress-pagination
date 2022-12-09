import express from "express"
import dotenv from "dotenv"
import user_routes from "./routes/user_routes"
dotenv.config()

const { PORT } = process.env
const app = express()

// middleware 
app.use(express.json())


// route
app.use(user_routes)

// listener
app.listen(PORT, () => {
    console.info("server berhasil dijalankan..")
})