require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./env" });

const app = express();
app.use(cors());

app.use("/libs", express.static("libs"));

app.get("/getCredentials", (req, res) => {
  const auth =
    "Basic " +
    Buffer.from(
      `${process.env.XAPI_USERNAME}:${process.env.XAPI_PASSWORD}`
    ).toString("base64");

  res.json({
    endpoint: process.env.XAPI_ENDPOINT,
    auth: auth,
  });
});

// Serve static files from 'public' directory
app.use(express.static("../frontend/public"));

// Your desired port
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
