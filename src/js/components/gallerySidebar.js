var View = require('jquery-simple-view');

module.exports = View.extend({

    initialize: function() {
        var self = this;

        self.$el.on('click', function(event) {
            event.preventDefault();

            require.ensure(['simple-lightbox'], function() {
                require('simple-lightbox');
                self.$el.simpleLightbox();
            });
        });
    }
});
