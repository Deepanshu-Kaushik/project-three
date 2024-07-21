import express, { Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

/* CONFIGURATIONS */
const app = express();
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

/* ROUTES */
app.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

/* CONNECTION */
const PORT = process.env.PORT || '6003';
if (process.env.MONGO_URL) {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() =>
      app.listen(PORT, () =>
        console.log('Database connected & server running on PORT', PORT),
      ),
    )
    .catch((error) => console.log(`${error} did not connect`));
}
