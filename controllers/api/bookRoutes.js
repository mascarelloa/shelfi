const router = require('express').Router();
const Book = require('../../models/book');

// GET all books
router.get('/', (req, res) => {
  // Get all books from the book table
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// The route to query all data related to specfically to the author 
router.get('/:author', (req, res) => {
  console.log (req.params.author)
  Book.findAll({
    where: {
      authors: req.params.author
    }
  }).then((bookData) => {
    res.json(bookData);
  });
});


// GET a single book based on their id #
router.get('/:id', (req, res) => {
  // Find one of the books by its primary key (book_id)
  Book.findByPk(req.params.id)
  .then((bookData) => {
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
