import { Router } from 'express';
import raca from './db/raca.json';

const routes = Router();

routes.get('/racas', (request, response) =>{ 
    response.json(raca)
});

routes.post('/createCharacter', (request, response) => {
    response.json(request.body)
})

export default routes;