// Common JS format
// const pi = require("./pi"); 

import {PI} from "./pi/index.js"; // Explicitly name the file
import express from "express"; // npm install express

const app = express()
const PORT = 8080

app.get("/pi", (req, res) => {
    res.send(PI);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});