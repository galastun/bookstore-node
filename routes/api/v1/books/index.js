const express = require('express');
const Books = require('./Books');

const router = express.Router();

router.get('/books', Books.get);

module.exports = router;
