const { Router } = require('express');
const upload = require('./../middlewares/uploadImages');
const SuperheroController = require('./../controllers/superhero');
const reducePagination = require('./../middlewares/reducePagination');
//  PATH:  /api/superheroes
const superheroesRouter = Router();
// create one
superheroesRouter
  .route('/')
  .post(SuperheroController.create)
  .get(reducePagination, SuperheroController.getMany);

superheroesRouter
  .route('/:heroId')
  .get(SuperheroController.getById)
  .patch(SuperheroController.updateById)
  .delete(SuperheroController.deleteById);

// images
superheroesRouter.post(
  '/:heroId/images',
  upload.array('images', 10),
  SuperheroController.addImages
);

// powers
superheroesRouter.post(
  '/:heroId/superpowers',
  SuperheroController.addSuperpower
);
module.exports = superheroesRouter;
