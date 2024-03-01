const express = require("express");
const cors = require('cors')
const rootRouter = require('./routes/index')
require('dotenv').config()

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter)

app.listen(port, () => {
    console.log("listing on port 3000")
})