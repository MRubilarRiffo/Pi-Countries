const { Activity, Country } = require('../db');


const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll({
            include: Country
        });

        return activities.length > 0
            ? res.status(200).json(activities)
            : res.status(404).send("Activities not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getActivities };