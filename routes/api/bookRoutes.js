const router = require('express').Router();
const Book = require('../../models/Book');

// GET all books
router.get('/', (req, res) => {
  // Get all books from the book table
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// GET all paperback books
router.get('/paperbacks', (req, res) => {
  Book.findAll({
    // Order by title in ascending order
    order: ['title'],
    where: {
      // Only get books that have this boolean set to TRUE
      is_paperback: true
    },
    attributes: {
      // Don't include these fields in the returned data
      exclude: ['is_paperback', 'edition']
    }
  }).then((bookData) => {
    res.json(bookData);
  });
});

// GET a single book
router.get('/:id', (req, res) => {
  // Find a single book by its primary key (book_id)
  Book.findByPk(req.params.id).then((bookData) => {
    res.json(bookData);
  });
});

// CREATE a book
router.post('/', (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
});



module.exports = router;
