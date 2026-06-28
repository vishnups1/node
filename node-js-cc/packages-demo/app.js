// Common JS format
// const pi = require("./pi"); 

import {PI} from "./pi/index.js"; // Explicitly name the file
import express from "express"; // npm install express
import axios  from "axios";

const app = express()
const PORT = 8080

app.get("/pi", (req, res) => {
    res.send(PI);
})

app.get("/", async (req, res) => {
    try {
        const response = await axios.get('https://httpbin.org/json');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
