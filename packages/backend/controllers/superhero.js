const createError = require('http-errors');
const superpowersRouter = require('../routes/superpowers');
const { Superhero } = require('./../models');

exports.create = async (req, res, next) => {
  const { body } = req;
  try {
    const superheroInstance = await Superhero.create(body);
    if (superheroInstance) {
      return res.status(201).send({
        data: superheroInstance,
      });
    }
    next(createError(400));
  } catch (err) {
    next(err);
  }
};

exports.getMany = async (req, res, next) => {};

exports.getById = async (req, res, next) => {};

exports.updateById = async (req, res, next) => {};

exports.deleteById = async (req, res, next) => {};

exports.addImages = async (req, res, next) => {};

exports.createSuperpowers = async (req, res, next) => {
  const {
    params: { superheroId },
    body,
  } = req;

  const superheroInstance = await Superhero.findByPk(superheroId);
  if (superheroInstance) {
    const superpowerInstance = await superheroInstance.createSuperpower(body);
    res.status(201).send({
      data: superpowerInstance,
    });
  }
  next(createError(400));
};
