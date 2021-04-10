import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import http from 'http';

import { setupWebSocket } from './websocket';

import routes from './routes';

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb://localhost:27017/devradar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

app.use(cors());

app.use(express.json());
app.use(routes);

server.listen(3333);
