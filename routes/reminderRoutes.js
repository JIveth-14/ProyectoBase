const express= require('express');
const { getAllreminders, createreminder, updatereminder, deletereminder} = require('../controllers/reminderController');
const router= express.Router();

router.get('/reminders', getAllreminders);
router.post('/newreminders', createreminder);
router.put("/reminders/:id", updatereminder);
router.delete("/reminders/:id", deletereminder);

module.exports = router;