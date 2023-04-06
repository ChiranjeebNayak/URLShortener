module.exports = (app) => {
    const api = require("../controllers/shorturl.controller.js");

    var router = require("express").Router();

    // Create a new short url
    router.post("/", api.create);

    // Retrieve long url
    router.get("/:key", api.find);

    app.use("/api", router);
};
