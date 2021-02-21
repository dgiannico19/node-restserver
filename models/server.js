const express = require('express');
const cors = require('cors');
const app = express();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //middlewares
    this.middlewares();
    //rutas
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //parseo y lectura del body
    this.app.use(express.json());

    //dir publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriedo en puerto', this.port);
    });
  }
}

module.exports = Server;
