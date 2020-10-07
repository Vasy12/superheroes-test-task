const { Router } = require('express');
const PowerController = require('./../controllers/superpower');
const powersRouter = Router();

powersRouter
  .route('/')
  .post(PowerController.create)
  .get(PowerController.getAll);

powersRouter
  .route('/:powerId')
  .put(PowerController.updateById, PowerController.create);

module.exports = powersRouter;
