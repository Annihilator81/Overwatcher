var express = require('express');
var app = express();
var playerRoutes = express.Router();
var owjs = require('overwatch-js');

playerRoutes.route('/').get(function (req, res) {
    console.log(req.query);
    owjs.getAll('pc', 'eu', 'Annihilator-2956')
      .then((data) => {
        res.json(data);
      });
});

module.exports = playerRoutes;