import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import { prisma } from './lib/db';
import { logger } from './middleware/logger';
import { swaggerSpec } from './config/swagger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(logger)

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/appeals', routes);

app.listen(port, () => {
  console.log('Listening on port', port);
  console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
});
