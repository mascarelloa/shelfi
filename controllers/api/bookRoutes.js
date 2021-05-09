const router = require("express").Router();
const Book = require("../../models/book");
const { Op } = require("sequelize");

// This gets all books.
router.get("/", (req, res) => {
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// This get all books by the queried author.
router.get("/author/:author", (req, res) => {
  Book.findAll({
    where: {
      // use operator to pull like data to input.

      authors: {
        [Op.substring]: "%" + req.params.author + "%",
      },
    },
  }).then((bookData) => {
    //This loops through the data to create an array.
    const books = bookData.map((book) => book.get({ plain: true }));
    //This renders the data to the author-search view.
    res.render("author-search", { layout: "second.handlebars", books });
  });
});

// This gets all books by the queried title.
router.get("/title/:title", (req, res) => {
  Book.findAll({
    where: {
      title: { [Op.substring]: "%" + req.params.title + "%" },
    },
  }).then((bookData) => {
    const books = bookData.map((books) => books.get({ plain: true }));

    res.render("title-search", { layout: "second.handlebars", books });
  });
});


//This is where I'm trying to get the book to show up. 
router.get("/title/:title", (req, res) => {
  Book.findAll({
    where: {
      title: { [Op.substring]: "%" + req.params.title + "%" },
    },
  }).then((bookData) => {
    const books = bookData.map((books) => books.get({ plain: true }));

    res.render("title-search", { layout: "second.handlebars", books });
  });
});




// This gets all books by the queried genre.
router.get("/genre/:category", (req, res) => {
  Book.findAll({
    where: {
      categories: req.params.category,
    },
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
