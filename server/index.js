const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const clientId = "c05d183e90c64e4b97612a9b7616e9cc";
const code = null;

app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});