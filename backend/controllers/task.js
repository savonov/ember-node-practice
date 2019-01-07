const Task = require('../models').Task;

module.exports = {
  list(req, res) {
    return Task
      .findAll({

        where: [
          req.query
        ]
      })
      .then((Tasks) => res.status(200).send(Tasks))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  getById(req, res) {

    return Task
      .findById(req.params.id, {

      })
      .then((Task) => {
        if (!Task) {
          return res.status(404).send({
            message: 'Task Not Found',
          });
        }
        return res.status(200).send(Task);
      })
      .catch((error) => res.status(400).send(error));
  },


};