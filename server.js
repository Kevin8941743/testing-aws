import express from "express"
const app = express()


const PORT = 3000


app.get("/express/aws", (req, res) => {
    res.status(200).send("Working correctly!")
})


app.listen(PORT, "0.0.0.0", () => {
    console.log(`The server is successfully listening to port: ${PORT}`)
})