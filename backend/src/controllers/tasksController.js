const tasksModel = require('../models/tasksModels');

const getAll = async (request, response) => {

    const tasks = await tasksModel.getAll();

    return response.status(200).json(tasks);
};

module.exports = {
        getAll
};