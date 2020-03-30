const express = require('express');
const cors = require('cors');
const routes = require('./routes');

/**'./routes' é arquivo. 'express' é um pacote */
const app = express();

app.use(cors());
app.use(express.json()); /** Fzr as requisições do backend serem transformadas em json */
app.use(routes);

app.listen(3333);