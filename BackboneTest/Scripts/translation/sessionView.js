$(function () {
    this.TranslationManager.SessionView = Backbone.View.extend({
        el: "#translationsSessionForm",
        emptyMessage: 'No translations are currently flagged for saving.',
        initialize: function (options) {
            _.bindAll(this, "addTranslationToSession");
            options.vents.bind('saveTranslation', this.addTranslationToSession);
        },
        collection: new this.TranslationManager.Translations(),
        addTranslationToSession: function (translation) {
            this.collection.add(translation);
            var text = '';
            if (this.collection.isEmpty()) {
                text = this.emptyMessage;
            } else {
                text = '<span class="session_number">' + this.collection.length + '</span> translation(s) in the session';
            }
            $(this.el).html(text);
        }
    });
});