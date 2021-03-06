'use strict';

var DustView = require('../components/DustView');
var subtitleExtensions = ['srt', 'vtt'];

module.exports = DustView.extend({

  el: '#app',

  templateName: 'room/fileHandler.dust',

  initialize: function () {
    $(document)
      .on('dragenter', this.dragenter.bind(this))
      .on('dragover', this.dragover.bind(this))
      .on('dragleave', this.dragleave.bind(this))
      .on('drop', this.drop.bind(this));
  },

  dragenter: function(e) {
    e.stopPropagation();
    e.preventDefault();
  },

  dragover: function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.$handler.addClass('fileHandler-dragOver');
  },

  dragleave: function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.$handler.removeClass('fileHandler-dragOver');
  },

  drop: function(e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.originalEvent.dataTransfer.files;
    var file;
    var extension;
    for (var i = 0; i < files.length; i++) {
      file = files[i];
      extension = file.name.split('.').pop();
      if (extension === 'srt') {
        APP.alert(
          '.srt subtitles are not supported, please convert your file to .vtt',
          'warning'
        );
      }
      if (extension === 'vtt') {
        APP.views.localVideoView.subtitleFile = file;
        continue;
      }
      APP.views.localVideoView.videoFile = file;
    }
    APP.views.localVideoView.render();
  },

  rendered: function () {
    this.$handler = this.$el.find('.js-dragDropFileHandler');
  },

});
