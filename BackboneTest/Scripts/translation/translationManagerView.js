$(function () {
    var TranslationView = this.TranslationManager.TranslationView;
    var Translation = this.TranslationManager.Translation;
    var Search = this.TranslationManager.Search;
    var Translations = this.TranslationManager.Translations;

    this.TranslationManager.TranslationManagerView = Backbone.View.extend({
        el: "form",
        model: new Search(),

        collection: new Translations(),

        events: { "keyup #input": "autocomplete" },

        initialize: function (options) {
            var s = options.vents.toString();
            _.bindAll(this, "autocomplete", "resetResults");
            this.input = $("#input");
            this.collection.bind('reset', this.resetResults);
            this.vents = options.vents;
        },

        resetResults: function () {
            var results = $('#results');
            results.html('');
            var self = this;
            this.collection.each(function (translation) {
                var view = new TranslationView({ model: translation, vents: self.vents }).render();
                results.append(view);
            });
        },

        autocomplete: function () {
            var searchTerm = this.input.val();
            if (searchTerm.length >= 1) {
                this.collection.fetch({ data: jQuery.param({ term: searchTerm }) });
            }
            else {
                this.collection.reset();
            }
        }
    });
});