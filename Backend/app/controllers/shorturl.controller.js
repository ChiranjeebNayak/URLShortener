const db = require("../models");
const Utils = require ('../utils/utils'); 
const V = require('../validation/common')
const url = db.url;

exports.create = (req, res) => {
  const params = req.body;
  const urlObj = new url({
    longUrl: params.longUrl,
    shortUrl: Utils.hashCodeToChar("" + Utils.hashCode(params.longUrl)),
    updatedAt: new Date().toISOString(),
  });
  var query = { shortUrl: urlObj.shortUrl };
  url.find(query)
    .then((data) => {
      if (data.length > 0) {
        res.status(200).send(data);
      } else {
        urlObj
          .save(urlObj)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "Some error occurred in insert",
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in find query",
      });
    });
};

exports.find = (req, res) => {
  var query = { shortUrl: req.params.key };
  url
    .find(query)
    .then((data) => {
      res.json({
        LongUrl: data[0].longUrl,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred.",
      });
    });
};
