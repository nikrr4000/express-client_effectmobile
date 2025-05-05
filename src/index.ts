import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import routes from '#root/routes/index.js';
import { swaggerSpec } from './config/swagger.js';
import { rateLimit } from 'express-rate-limit'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const rateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false
})

app.use(rateLimiter)
app.use(cors());
app.use(express.json({limit: '500kb'}));
app.use(express.urlencoded({ extended: true }));
// app.use(logger)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/appeals', routes);
app.use('', (_, res) => res.redirect('/api-docs'));

app.listen(port, () => {
  console.log('Listening on port', port);
  console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
});
