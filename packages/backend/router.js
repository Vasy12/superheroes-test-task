const { Router } = require('express');
const superheroesRouter = require('./routes/superheroes');
const superpowersRouter = require('./routes/superpowers');

const router = Router();

router.use('/superheroes', superheroesRouter);
router.use('/superpowers', superpowersRouter);

module.exports = router;
