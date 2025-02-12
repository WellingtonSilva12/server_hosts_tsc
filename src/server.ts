import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(morgan('combined'));
app.use('/api', routes);

// Middleware de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!', details: err.message });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
