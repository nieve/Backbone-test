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
                $(this.el).children('#saveAll').removeClass('midButton');
                $(this.el).children('#saveAll').addClass('midButton_disabled');
                text = this.emptyMessage;
                $(this.el).attr('original-title', '');
            } else {
                $(this.el).children('#saveAll').removeClass('midButton_disabled');
                $(this.el).children('#saveAll').addClass('midButton');
                text = '<span class="session_number">' + this.collection.length + '</span> translation(s) in the session';
                $(this.el).tipsy({ html: true });
                $(this.el).attr('title', this.setTooltip());
            }
            $(this.el).children('.sessionStatusText').html(text);
        },
        setTooltip: function () {
            var text = 'translations ready to be saved:<br/>';
            var tls = this.collection.map(function (model) { return model.to_s(); });
            return tls.reduce(function (res, current) { return res + current + '<br/>'; }, text);
        }
    });
});