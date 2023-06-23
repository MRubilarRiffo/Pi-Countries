const { Activity } = require('../db');

const deleteActivities = async (req, res) => {
    try {
        const { id } = req.params;

        const activity = await Activity.findByPk(id);

        if (!activity) {
            return res.status(404).send("Activity not found");
        }

        await activity.destroy();

        return res.status(200).send("Activity deleted successfully");

    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { deleteActivities };