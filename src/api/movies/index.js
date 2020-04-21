import express from 'express';
import {moviesObject} from './movies';

const router = express.Router();
router.get('/', (req, res) => {
  res.send(moviesObject);
});

export default router;