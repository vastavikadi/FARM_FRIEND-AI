import express from 'express';
import { submitRating, getRatings } from '../controllers/ratingController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, submitRating);
router.get('/', getRatings);

export default router;