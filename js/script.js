'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          slider = require('./modules/slider'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms');
    tabs();
    modal();
    timer();
    calc();
    slider();
    cards();
    forms();

  });