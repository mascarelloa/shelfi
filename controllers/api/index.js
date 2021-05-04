const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/search', userRoutes);
router.use('/shelf', userRoutes);
router.use('/book-submit', userRoutes);

module.exports = router;
