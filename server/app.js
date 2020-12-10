const express = require('express');
const port = 3000;
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:8080'}))
app.use('/api', apiRoutes)

module.exports = app;

app.listen(port);

console.log(`Server started at http://localhost:${port}`)
