import express from 'express';

import { setupRoutes } from './routes';

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static('public'));

setupRoutes(app);

export default app;
