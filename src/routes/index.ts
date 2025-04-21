import express, { Router } from 'express';
import { getHello } from '../controllers/helloController';

const router: Router = express.Router();

router.get('/hello', getHello);

export default router;
