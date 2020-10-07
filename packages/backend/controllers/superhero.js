const createHttpError = require('http-errors');
const { Superhero, Superpower, SuperheroPowers } = require('./../models');

exports.create = async (req, res, next) => {
  const { body } = req;
  try {
    const superheroInstance = await Superhero.create(body);
    if (superheroInstance) {
      return res.status(201).send({
        data: superheroInstance,
      });
    }
    next(createHttpError(400));
  } catch (err) {
    next(err);
  }
};

exports.getMany = async (req, res, next) => {
  const { pagination } = req;

  try {
    const { count, rows } = await Superhero.findAndCountAll({
      ...pagination,
      include: [
        {
          model: Superpower,
          through: {
            attributes: [],
          },
          attributes: ['id', 'description'],
          as: 'superpowers',
          required: false, // LEFT OUTER JOIN
        },
      ],
    });

    res.send({
      data: rows,
      meta: {
        count,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {};

exports.updateById = async (req, res, next) => {};

exports.deleteById = async (req, res, next) => {};

exports.addImages = async (req, res, next) => {
  const {
    params: { heroId },
    files,
  } = req;

  const heroInstance = await Superhero.findByPk(heroId, {
    include: {
      model: Superpower,
      as: 'superpowers',
      attributes: ['id', 'description'],
      through: {
        attributes: [],
      },
    },
  });
  if (heroInstance) {
    const newImages = files.map(f => f.filename);

    const updatedHero = await heroInstance.update({
      images: [...heroInstance.get('images'), ...newImages],
    });

    return res.send({
      data: {
        ...heroInstance.get(),
        ...updatedHero.get(),
      },
    });
  }

  next(createHttpError(404));
};

exports.createSuperpowers = async (req, res, next) => {
  const {
    params: { heroId },
    body,
  } = req;
  try {
    const superheroInstance = await Superhero.findByPk(heroId);
    if (superheroInstance) {
      const superpowerInstance = await superheroInstance.createSuperpower(body);
      res.status(201).send({
        data: superpowerInstance,
      });
    }
    next(createHttpError(400));
  } catch (err) {
    next(err);
  }
};

exports.addSuperpower = async (req, res, next) => {
  const {
    params: { heroId },
    body: { id: powerId },
  } = req;
  try {
    const heroPower = await SuperheroPowers.create({
      SuperheroId: heroId,
      SuperpowerId: powerId,
    });
    res.status(201).send({
      data: heroPower,
    });
  } catch (err) {
    next(err);
  }
};
