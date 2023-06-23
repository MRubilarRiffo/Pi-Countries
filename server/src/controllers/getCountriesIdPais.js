const { Country, Activity } = require('../db');

const getCountriesIdPais = async (req, res) => {
    try {
        const { idPais } = req.params;
        const country = await Country.findByPk(idPais.toUpperCase(), {
            include: Activity
        });
        
        return country
            ? res.status(200).json(country)
            : res.status(404).send("Country not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getCountriesIdPais }