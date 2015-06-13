'use strict';

window.$ = window.jQuery = require('jquery');

$(function() {

  window.dust = require('dustjs-linkedin');
  window.bootstrap = require('bootstrap');
  window._ = require('lodash');
  window.Backbone = require('backbone');
  window.Backbone.$ = $;

  var RoomView = require('../views/room/RoomView');

  /* 
  * load precompiled Dust templates 
  * from (/scripts/dist/templates/templates.js)
  */
  window.LOAD_DUST_TEMPATES();

  window.APP = {
    socket: window.io(),
    user: {},
    views: {},
    collections: {
      users: new Backbone.Collection(),
    },
  };

  APP.views.roomView = new RoomView();
  APP.views.roomView.start();
});
