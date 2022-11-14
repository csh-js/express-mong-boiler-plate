import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String },
  age: { type: Number },
});

const User = mongoose.model('User', userSchema);

export { User };
