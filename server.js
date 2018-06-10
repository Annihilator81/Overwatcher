const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      playerRoutes = require('./routes/player');

      const app = express();
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/player', playerRoutes);
      const port = process.env.PORT || 4000;

      const server = app.listen(port, function() {
        console.log('Listening on port ' + port);
      });