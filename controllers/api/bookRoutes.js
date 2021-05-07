const router = require('express').Router();
const Book = require('../../models/book');

// This gets all books.
router.get('/', (req, res) => {
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// This get all books by the queried author. 
router.get('/author/:author', (req, res) => {
  Book.findAll({
    where: {
      authors: req.params.author
    }
  }).then((bookData) => {
    res.json(bookData);
  });
});

// This gets all books by the queried title.
router.get('/title/:title', (req, res) => {
    Book.findAll({
      where: {
        title: req.params.title
      }
    }).then((bookData) => {
      res.json(bookData);
    });
  });



// This will add a new book to the database.
// router.post('/', (req, res) => {
//   Book.create(req.body)
//     .then((newBook) => {
//       res.json(newBook);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });


module.exports = router;
