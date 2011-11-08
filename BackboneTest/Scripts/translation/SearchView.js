(function () {
    tm.SearchView = Backbone.View.extend({
        events: { "click .search": "launchSearch" },
        el: "form",
        initialize: function (options) {
            _.bindAll(this, "resetResults", "displayResult");
            app.translations.bind('reset', this.resetResults);
            this.vents = options.vents;
        },
        resetResults: function () {
            $('#results').html('');
            app.translations.each(this.displayResult);
        },
        displayResult: function (translation) {
            var translationView = new tm.TranslationView({
                model: translation, vents: this.vents
            });
            var view = translationView.render();
            $('#results').append(view);
        },
        launchSearch: function(e){
            e.preventDefault();
            var searchTerm = this.$(this.el).find('input').val();
            app.router.navigate('searchfor?term=' + searchTerm, true);
        }
    });
})();
