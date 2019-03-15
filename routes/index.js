const express = require('express');
const books = require('./api/v1/books');

const router = express.Router();

router.use('/api/v1', books);

module.exports = router;
