import express from 'express';
import { criarPersonagem, selecionarPersonagem } from '../controllers/index.js';

const mainRouter = express.Router();

mainRouter.route('/criarPersonagem').get(criarPersonagem);

mainRouter.route('/selecionarPersonagem').get(selecionarPersonagem);

export { mainRouter };
