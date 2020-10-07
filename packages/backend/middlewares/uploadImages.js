const path = require('path');
const multer = require('multer');
const config = require('./../config/config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(config.staticPath, '/images'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const IMAGE_MIMETYPE_REGEXP = /^image\/(png|jpeg|svg\+xml|gif|webp|bmp)/;

module.exports = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const { mimetype } = file;
    const isAllowed = IMAGE_MIMETYPE_REGEXP.test(mimetype);
    cb(null, isAllowed);
  },
});
