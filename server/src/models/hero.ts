import mongoose, { Schema, Document } from 'mongoose';

interface IHero extends Document {
  name: string;
}

const HeroSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Hero = mongoose.model<IHero>('Hero', HeroSchema);

export { Hero };
