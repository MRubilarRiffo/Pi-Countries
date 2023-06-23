const { Activity, Country } = require('../db');

const postActivities = async (req, res) => {
    try {
        
        const { name, difficulty, duration, season, countries } = req.body;

        const createdActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        const countriesArray = await Country.findAll({
            where: {
                name: countries
            }
        });

        await countriesArray.map(c => c.addActivity(createdActivity));

        return res.status(201).json(createdActivity);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { postActivities }