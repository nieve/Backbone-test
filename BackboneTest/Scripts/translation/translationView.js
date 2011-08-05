/// <reference path="../lib/backbone.js" />
/// <reference path="../lib/jquery-1.6.1.min.js" />
/// <reference path="../lib/jquery.tmpl.min.js" />
/// <reference path="../lib/underscore-min.js" />
/// <reference path="../lib/json2.js" />
/// <reference path="../app/namespace.js" />

$(function () {
    this.TranslationManager.TranslationView = Backbone.View.extend({
        tagName: "li",
        events: {
            "click .button.save": "saveTranslation",
            "change .translationValue": "updateTranslation"
        },
        initialize: function (options) {
            _.bindAll(this, "saveTranslation", "updateTranslation");
            this.vents = options.vents;
        },
        render: function () {
            var template = $("#resultsDisplay");
            return $(this.el).html($.tmpl(template, this.model.toJSON()));
        },
        saveTranslation: function () {
            this.vents.trigger('saveTranslation', this.model);
            this.model.save();
        },
        updateTranslation: function () {
            this.model.set({ Value: this.$(".valueInput").val() });
        }
    });
});