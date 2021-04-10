import express from 'express';

import DevController from './controllers/DevController';
import SearchController from './controllers/SearchController';

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

export default routes;
