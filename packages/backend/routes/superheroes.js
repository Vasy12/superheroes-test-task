const path = require('path');
const multer = require('multer');
const { Router } = require('express');
const config = require('./../config/config');
const SuperheroController = require('./../controllers/superhero');

const imagesSect = path.join(config.staticPath, '/images');
// superheroes images upload
const upload = multer({
  dest: imagesSect,
});

//  PATH:  /api/superheroes
const superheroesRouter = Router();
// create one
superheroesRouter.post('/', SuperheroController.create);
// get many
superheroesRouter.get(SuperheroController.getMany);

superheroesRouter
  .route('/:superheroId')
  .get(SuperheroController.getById)
  .patch(SuperheroController.updateById)
  .delete(SuperheroController.deleteById);

// SUPERPOWERS
superheroesRouter.post('/:superheroId/superpowers/');
superheroesRouter.del('/:superheroId/superpowers/:superpowerId');
superheroesRouter.post('/:superheroId/images', upload.array('images', 10));

module.exports = superheroesRouter;
