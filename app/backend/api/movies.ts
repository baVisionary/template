import * as express from 'express';
import * as mongoose from 'mongoose';
import Movie from '../models/movie';

let router = express.Router();

router.get('/', (req, res) => {
  Movie.find().then((foundMovies) => {
    res.json(foundMovies);
  }).catch((err) {
    res.json(err);
  });
});

export default router;