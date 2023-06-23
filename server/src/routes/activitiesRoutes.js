const { deleteActivities } = require('../controllers/deleteActivities');
const { getActivities } = require('../controllers/getActivities');
const { postActivities } = require('../controllers/postActivities');

const activitiesRouter = require('express').Router();

activitiesRouter.get('/', getActivities);

activitiesRouter.post('/create', postActivities);

activitiesRouter.delete('/:id' , deleteActivities);

module.exports = activitiesRouter;