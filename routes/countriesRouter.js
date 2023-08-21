const { Router } = require('express');
const {
  getAllCountries,
  createNewCountry,
  getSingleCountry,
  updateCountry,
  deleteCountry
} = require('../controllers/countriesControllers.js');

const countriesRouter = Router();

countriesRouter.route('/').get(getAllCountries).post(createNewCountry);

countriesRouter.route('/:code').get(getSingleCountry).put(updateCountry).delete(deleteCountry);

module.exports = countriesRouter;
