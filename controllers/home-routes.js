const router = require('express').Router();
const {books} = require ('../models');

//Should get all the books 
 router


// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;