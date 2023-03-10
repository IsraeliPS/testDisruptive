import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';

import { config } from './lib/config';
import { apiRouter } from './routes';
import swaggerSetup from './docs/swagger';
export const app = express();

const port = config.app.port;

// middlewares
app.use(express.json());
app.use(cors());

apiRouter(app);

app.get('/', (req, res) => {
  res.send('Welcome to my page 😊!');
});

//Documentation
app.use('/apiDocs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
