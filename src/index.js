const express = require('express')
const cors = require('cors')
const midlleware = require('./middleware')

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8080", "http://localhost:4200"],
  credentials: true
}))

app.use(midlleware)


app.listen(3000, () => {
  console.log("port 3000");
});