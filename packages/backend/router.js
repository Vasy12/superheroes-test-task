const { Router } = require('express');
const heroesRouter = require('./routes/superheroes');
const powersRouter = require('./routes/superpowers');

const router = Router();

router.use('/superheroes', heroesRouter);
router.use('/superpowers', powersRouter);

module.exports = router;
