import express, { Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || '6003';

app.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server running on PORT', PORT);
});
