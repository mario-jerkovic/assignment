var View = require('jquery-simple-view');

module.exports = View.extend({

    initialize: function() {
        var input = this.$('.query');

        input.on('input', function() {
            require.ensure(['fastsearch'], function() {
                require('fastsearch');

                input.fastsearch({
                    onItemSelect: 'fillInput'
                });

            });
        });
    }

});
