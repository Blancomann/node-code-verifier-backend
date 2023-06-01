import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//Configuration .env file
dotenv.config();

// Create Express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define first app's route
app.get('/', (req: Request, res: Response) => {
  res.send('Que pasó cumpa?!');
});

app.get('/hello', (req: Request, res: Response) => {
  res.send('NEW ROUTE: /Heloooooow')
})

// Execute app and listen requests to PORT

app.listen(port, () => {
  console.log(`EXPRESS SERVER: runnig at LOCALHOST:${port}`);
});