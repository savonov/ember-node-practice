const express = require('express');
const router = express.Router();

const taskController = require('./../controllers/task');


router.get('/', taskController.list);
router.get('/:id', taskController.getById);

module.exports = router;