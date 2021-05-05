const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('../homeRoutes');

router.use('/users', userRoutes);
router.use('/search', userRoutes);
router.use('/shelf', homeRoutes);
router.use('/book-submit', userRoutes);

module.exports = router;
