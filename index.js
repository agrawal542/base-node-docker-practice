import express from 'express'

const app = express();

app.get('/home', (req,res,next) => {
    console.log("Working fine.........")

    res.status(200).json({
        data:"Working"
    })
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})