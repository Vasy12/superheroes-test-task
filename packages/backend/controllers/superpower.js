const createHttpError = require('http-errors');
const { reset } = require('nodemon');
const { Superpower } = require('./../models');

exports.create = async (req, res, next) => {
  const { body } = req;
  const powerInstance = await Superpower.create(body);
  if (powerInstance) {
    return res.status(201).send({ data: powerInstance });
  }
  next(createHttpError(400));
};

exports.getAll = async (req, res, next) => {
  const powers = await Superpower.findAll({});
  res.send({ data: powers });
};

exports.updateById = async (req, res, next) => {
  const {
    params: { powerId },
    body,
  } = req;

  const [updatedRowsCount, [updatedPower]] = await Superpower.update(body, {
    where: {
      id: powerId,
    },
    returning: true,
  });

  if (updatedRowsCount) {
    return res.send({
      data: updatedPower,
    });
  }

  body.id = powerId;

  next();
};
