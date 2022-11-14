import express from 'express';
import { User } from '../models/User.js';


const router = express.Router();

router.get('/', async (req, res) => {
  let user;
  try {
    user = await User.find({});
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  // Pull content from request body
  const { name, age } = req.body;

  // Create a user ahead 
  let user;

  try {
    user = new User({ name, age });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }

});

export { router as userRouter }
