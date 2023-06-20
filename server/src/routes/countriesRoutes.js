const countriesRouter = require('express').Router();
const { getCountries } = require('../controllers/getCountries');
const { getCountriesIdPais } = require('../controllers/getCountriesIdPais');

countriesRouter.get('/', getCountries);

countriesRouter.get('/:idPais', getCountriesIdPais);

module.exports = countriesRouter;