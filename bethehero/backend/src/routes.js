import Router from 'express';

import OngController from './controllers/OngController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

import { SessionPost } from './validators/Session';
import { OngsPost } from './validators/Ongs';
import { ProfileGet } from './validators/Profile';
import {
  IncidentsGet,
  IncidentsPost,
  IncidentsDelete,
} from './validators/Incidents';

const routes = new Router();

routes.post('/session', SessionPost, SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngsPost, OngController.store);

routes.get('/profile', ProfileGet, ProfileController.index);

routes.get('/incidents', IncidentsGet, IncidentController.index);
routes.post('/incidents', IncidentsPost, IncidentController.store);
routes.delete('/incidents/:id', IncidentsDelete, IncidentController.delete);

export default routes;
