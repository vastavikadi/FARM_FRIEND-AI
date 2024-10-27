import Rating from '../models/rating.js';

export const submitRating = async (req, res) => {
  const { rating, comment } = req.body;

  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be a number between 1 and 5.' });
  }

  try {
    const newRating = new Rating({
      userId: req.user.userId,
      rating,
      comment,
    });

    await newRating.save();

    res.status(201).json({
      message: 'Rating submitted successfully',
      newRating,
    });
  } catch (error) {
    console.error('Error submitting rating:', error);
    res.status(500).json({ error: 'Error submitting rating' });
  }
};

export const getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find().populate('userId', 'email');
    res.json(ratings);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Error fetching ratings' });
  }
};