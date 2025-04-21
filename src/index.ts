import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import { prisma } from './lib/db';
import {createAppeal, findAppeals, updateAppealStatus} from "@/entities/appeals/index"

// Загрузка переменных среды
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Маршруты
app.use('/api', routes);

// Базовый маршрут
app.get('/', async (req: Request, res: Response) => {
  const data = await findAppeals([new Date(), new Date()])
  res.send(data);
});

app.get('/create', async (_: Request, res: Response) => {
  const data = await createAppeal("Some new info")
  res.send(data);
});

// Запуск сервера
app.listen(port, () => {
  console.log('Listening on port', port);
});
