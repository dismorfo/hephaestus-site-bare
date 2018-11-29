'use strict';

const { agartha } = require('hephaestus');

const HephaestusCommandExample = class {

  get command () {
    return 'hephaestus-command-example';
  }

  get alias () {
    return false;
  }

  get description () {
    return 'Simple command example';
  }

  get options () {
    return [];
  }

  get onInit () {
    return false;
  }

  get onDone () {
    return false;
  }

  action () {
    
    agartha.log(this.description(), 'ok');

  }

}

module.exports = exports = HephaestusCommandExample;
