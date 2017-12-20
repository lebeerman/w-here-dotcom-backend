const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const situationData = require("./Data/data").situationData;
const songData = require("./Data/data").songData;
app.use(cors());
app.use(bodyParser.json());

app.get("/situations", (request, response) => {
  response.json(situationData);
});

app.get("/songs", (request, response) => {
  response.json(songData);
});

app.post("/", (request, response) => {
  response.json(request.body);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
});
