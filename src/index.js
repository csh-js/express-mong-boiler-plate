import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/User.js';

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://mongo:27017/authors-books"

app.use(express.json());
app.use('/api/users', userRouter);

const start = async () => {

  // Connect to Mongo-Db
  try {

    await mongoose.connect(MONGO_URI, {
      //useCreateIndex: true,
      useNewUrlParser: true, // MUST
      //useUnifiedTopology: true
    });

    console.log("connected to mongo-db");

  } catch (err) {
    console.log(err);
  }

  // Listen to requests on PORT
  app.listen(PORT, () => {
    console.log(`Listening on port:{$PORT}`);
  });
}

start();
