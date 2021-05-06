const router = require('express').Router();
const { Book } = require('../../models');

//This will get or find all books from the database by the queried title.
router.get("/:query", (req, res) => {
    Book.findAll ({where: {title: req.params.query}})
    .then(data) 
})
 



module.exports = router;