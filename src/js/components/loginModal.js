var $ = require('jquery');
var View = require('jquery-simple-view');

require('simple-lightbox');

module.exports = View.extend({

    initialize: function(options) {

      $.get('login-modal.html', function (response) {
        $.simpleLightbox.open({
          content: response,
          elementClass: 'slbContentEl'
        });
      });

    }

});
