const express = require('express');
const router = express.Router();

const exerciseController = require('./../controllers/exercise');

router.get('/', exerciseController.list);
router.get('/:id', exerciseController.getById);
// router.post('/api/exercises', exerciseController.add);
// router.put('/api/exercises/:id', exerciseController.update);
// router.delete('/api/exercises/:id', exerciseController.delete);

module.exports = router;