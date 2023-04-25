const express = require('express');
const server = express();
const router = require("./routes/index");
const cors = require('cors');

require('dotenv').config();
server.use(express.json());
server.use(cors({
  origin: 'http://localhost:3000'
}));
server.use("/", router);

module.exports = server;