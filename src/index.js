const express = require('express')
const cors = require('cors')
const wordlGateway = require('./world-gateway')
const nbaGateway = require('./nba-gateway')
const { healthCheck }  = require("./core")

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8080", "http://localhost:4200"],
  credentials: true
}))

app.use("*", (req, res, next) => healthCheck(req, res, next))

app.use("/wordlcup", wordlGateway);
app.use("/nba", nbaGateway);


app.listen(3000, () => {
  console.log("port 3000");
});