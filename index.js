const express = require("express")
require("dotenv").config()
const app = express()
app.use(express.static("dist"))
app.get("/api/users", (req, res) => {
    res.json({ message: "User Fetch success" })
})
app.use("*", (req, res) => {
    res.status(404).assignSocketjson({ message: "resource not found" })
}) //route chukla ki run hot

app.listen(process.env.PORT || 5000, console.log("SERVER RUNNING"))