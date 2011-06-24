
$(function() {

    var ContentItem = Backbone.Model.extend({
        setData: function(data) {
            this.set({ data: data });
            this.trigger("dataSet");
        }
    });

    var Content = Backbone.Collection.extend({
        model: ContentItem,
        url: function() { return '/content/' + this.first().get('data'); }
    });

    var SomeView = Backbone.View.extend({
        el: "form",

        events: { "keyup #input": "autocomplete" },

        initialize: function() {
            _.bindAll(this, "autocomplete");
            this.input = $("#input");
        },

        autocomplete: function() {
            var input = this.input;
            var userInput = input.val();
            if (userInput.length >= 3) {
                this.model.set({ data: userInput });
                this.collection.refresh(this.model);
                this.collection.fetch({ success: function(collection, result) {
                    alert(JSON.stringify(collection));
                }});
            }
        }
    });

    var item = new ContentItem();
    var content = new Content();
    var someView = new SomeView({ model: item, collection: content });
});