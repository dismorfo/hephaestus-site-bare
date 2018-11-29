'use strict';

const { agartha } = require('hephaestus');

module.exports = exports = class HephaestusCommandExample extends agartha.Command {

  get command () {
    return 'hephaestus-command-example';
  }

  get description () {
    return 'Echo this command description';
  }

  action () {
    agartha.log(this.description(), 'ok');
  }

}
