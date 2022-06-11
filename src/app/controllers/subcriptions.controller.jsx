const db = require("../models");
const subcriptions = db.subcriptionss;
const Op = db.Sequelize.Op;

// Create and Save a new subcriptions
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a subcriptions
  const subcriptions = {
    id: req.body.id,
    name: req.body.name
  };

  // Save subcriptions in the database
  subcriptions.create(subcriptions)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the subcriptions."
      });
    });
};

// Retrieve all subcriptionss from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;

  subcriptions.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subcriptionss."
      });
    });
};

// Find a single subcriptions with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  subcriptions.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving subcriptions with id=" + id
      });
    });
};

// Update a subcriptions by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  subcriptions.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "subcriptions was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update subcriptions with id=${id}. Maybe subcriptions was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating subcriptions with id=" + id
      });
    });
};

// Delete a subcriptions with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  subcriptions.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "subcriptions was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete subcriptions with id=${id}. Maybe subcriptions was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete subcriptions with id=" + id
      });
    });
};

// Delete all subcriptionss from the database.
exports.deleteAll = (req, res) => {
  subcriptions.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} subcriptionss were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all subcriptionss."
      });
    });
};

// find all published subcriptions
exports.findAllPublished = (req, res) => {
  subcriptions.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subcriptionss."
      });
    });
};