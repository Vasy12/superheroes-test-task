const createHttpError = require('http-errors');
const _ = require('lodash');
const yup = require('yup');

const PAGINATION_SCHEMA = yup.object({
  limit: yup.number().integer(),
  offset: yup.number().integer(),
});

const defaultPagination = {
  limit: 5,
  offset: 0,
};

module.exports = async (req, res, next) => {
  const { query } = req;

  const pagination = {
    ...defaultPagination,
    ..._.pick(query, ['limit', 'offset']),
  };
  if (await PAGINATION_SCHEMA.isValid(pagination)) {
    req.pagination = pagination;
    return next();
  }
  req.pagination = defaultPagination;
  next();
};
