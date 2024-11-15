const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(
    bodyParser.urlencoded({ extended: false }),
);

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
 console.log(`[server]: El servidor está corriendo en http://localhost${port}`);
});
