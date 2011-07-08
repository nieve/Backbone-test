
$(function() {

    var Translation = Backbone.Model.extend({});
    var Search = Backbone.Model.extend({});

    var Translations = Backbone.Collection.extend({
        model: Translation,
        url: function() { return '/search'; } // + $("#input").val()
    });

    var SomeView = Backbone.View.extend({
        el: "form",
        model: new Search(),

        collection: new Translations(),

        events: { "keyup #input": "autocomplete" },

        initialize: function() {
            _.bindAll(this, "autocomplete", "displayResults");
            this.input = $("#input");
            this.collection.bind('reset', this.displayResults);
        },

        displayResults: function() {
            alert(JSON.stringify(this.collection));//TODO: render collection w/template
        },

        autocomplete: function() {
            var searchTerm = this.input.val();
            if (searchTerm.length >= 3) {
                this.collection.fetch({ data: jQuery.param({ term: searchTerm }) });
            }
        }
    });

    var someView = new SomeView();
});