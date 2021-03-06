const express = require('express');
const { User } = require('../db');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});


// router.post('/zach', async (req, res, next) => {
//   try {
//     // let newRegBody = reg.body.name = reg.body.name.toUppercase(); 

//     res.json([{name: 'zach'}]); // req.body
//   } catch (err) {
//     next(err);
//   }
// });



router.post('/', async (req, res, next) => {
  try {
    const createdUser = await User.create(req.body);
    res.json(createdUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
