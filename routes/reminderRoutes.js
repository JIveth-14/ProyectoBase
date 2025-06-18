const express= require('express');
const { getAllBooks, createBook, updateBook,deleteBook } = require('../controllers/booksController');
const router= express.Router();

router.get('/reminders', getAllBooks);
router.post('/reminder', createBook);
router.put("/reminders/:id", updateBook);
router.delete("/reminders/:id", deleteBook);

module.exports = router;