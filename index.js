import express from 'express'
import dotenv from 'dotenv';

dotenv.config()
const app = express();

app.get('/home', (req, res, next) => {
    console.log("Working fine.........")

    res.status(200).json({
        data: "Working"
    })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})