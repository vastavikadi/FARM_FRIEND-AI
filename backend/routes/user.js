import express from 'express';
import User from '../models/user.js';
import authenticateJWT from '../middlewares/verifyToken.js';
import { submitRating } from '../controllers/ratingController.js';

const router = express.Router();

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/rating', authenticateJWT, submitRating);

export default router;
