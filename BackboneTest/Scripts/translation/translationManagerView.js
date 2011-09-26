(function () {
    TranslationManager.TranslationManagerView = Backbone.View.extend({
        events: { "keyup .searchInput": "autocomplete" },
        el: "form",
        collection: new TranslationManager.Translations(),
        initialize: function (options) {
            _.bindAll(this, "autocomplete", "resetResults", "displayResult");
            this.collection.bind('reset', this.resetResults);
            this.vents = options.vents;
        },
        resetResults: function () {
            $('#results').html('');
            this.collection.each(this.displayResult);
        },
        displayResult: function (translation) {
            var translationView = new TranslationManager.TranslationView({
                model: translation, vents: this.vents
            });
            var view = translationView.render();
            $('#results').append(view);
        },
        autocomplete: function () {
            var searchTerm = this.$(this.el).find('input').val();
            if (searchTerm.length >= 1) {
                this.collection.fetch({ data: { term: searchTerm} });
            }
            else {
                this.collection.reset();
            }
        }
    });
})();
