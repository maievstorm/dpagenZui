module.exports = app => {
    const apiroutes = require("../controllers/subcriptions.controller.jsx");
  
    var router = require("express").Router();
  
    // Create a new subcriptions
    router.post("/", subcriptions.create);
  
    // Retrieve all subcriptions
    router.get("/", subcriptions.findAll);
  
    // Retrieve all published subcriptions
    router.get("/published", subcriptions.findAllPublished);
  
    // Retrieve a single subcriptions with id
    router.get("/:id", subcriptions.findOne);
  
    // Update a subcriptions with id
    router.put("/:id", subcriptions.update);
  
    // Delete a subcriptions with id
    router.delete("/:id", subcriptions.delete);
  
    // Delete all subcriptions
    router.delete("/", subcriptions.deleteAll);
  
    app.use("/api/subcriptions", router);
  };