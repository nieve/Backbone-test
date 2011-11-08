(function () {
    tm.TranslationView = Backbone.View.extend({
        tagName: "li",
        events: {
            "click .button.add": "addTranslation",
            "change .translationValue": "updateTranslation"
        },
        initialize: function (options) {
            _.bindAll(this, "addTranslation", "updateTranslation");
            this.vents = options.vents;
        },
        render: function () {
            var template = $("#resultsDisplay");
            return $(this.el).html($.tmpl(template, this.model.toJSON()));
        },
        addTranslation: function () {
            this.vents.trigger('saveTranslation', this.model);
        },
        updateTranslation: function () {
            this.model.set({ Value: this.$(".valueInput").val() });
        }
    });
})();
