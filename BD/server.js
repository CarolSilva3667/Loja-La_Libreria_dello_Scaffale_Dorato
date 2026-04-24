require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const livrosroutes = require('./src/routes/livros.routes');

app.use(express.json());

app.use(livrosroutes);

app.listen(port, () => {
    console.log('listening on ' + port);
});  