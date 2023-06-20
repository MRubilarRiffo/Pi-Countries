const { Country } = require('../db');
const { Op } = require('sequelize');

const getCountries = async (req, res) => {
    try {
        const { name } = req.query;
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });

        return countries.length > 0
            ? res.status(200).json(countries)
            : res.status(404).send("Countries not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getCountries };