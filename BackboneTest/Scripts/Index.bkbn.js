
$(function() {

    var ContentItem = Backbone.Model.extend({
        setData: function(data) {
            this.set({ data: data });
            this.trigger("dataSet");
        },
        url: function() {
            return '/ContentItem/' + this.get("data");
        }
    });

    var SomeView = Backbone.View.extend({
        el: "#input",

        events: { "keyup #input": "autocomplete" },

        initialize: function() {
            _.bindAll(this, "autocomplete");
            $("#input").keyup(this.autocomplete);
        },

        autocomplete: function() {
            var input = $("#input").val();
            if (input.length >= 3) {
                this.model.set({ data: input });
                this.model.fetch({ success: function(model, result) {
                    $("#input").val(model.get("data"));
                }});
            }
        }
    });

    var item = new ContentItem();
    var someView = new SomeView({ model: item });
});	