/// <reference path="../lib/backbone.js" />
/// <reference path="../lib/jquery-1.6.1.min.js" />
/// <reference path="../lib/jquery.tmpl.min.js" />
/// <reference path="../lib/underscore-min.js" />
/// <reference path="../lib/json2.js" />
/// <reference path="../app/namespace.js" />

$(function () {

    var Translation = Backbone.Model.extend({});
    var Search = Backbone.Model.extend({});

    var Translations = Backbone.Collection.extend({
        model: Translation,
        url: function () { return '/search'; }
    });

    var TranslationView = Backbone.View.extend({
        render: function () {
            var template = $("#resultsDisplay");
            return $.tmpl(template, this.model.toJSON());
        }
    });

    var SomeView = Backbone.View.extend({
        el: "form",
        model: new Search(),

        collection: new Translations(),

        events: { "keyup #input": "autocomplete" },

        initialize: function () {
            _.bindAll(this, "autocomplete", "resetResults");
            this.input = $("#input");
            this.collection.bind('reset', this.resetResults);
        },

        resetResults: function () {
            var results = $('#results');
            results.html('');
            var view = new TranslationView({ model: this.collection }).render();
            results.append(view);
        },

        autocomplete: function () {
            var searchTerm = this.input.val();
            if (searchTerm.length >= 1) {
                this.collection.fetch({ data: jQuery.param({ term: searchTerm }) });
            }
        }
    });

    var someView = new SomeView();
});