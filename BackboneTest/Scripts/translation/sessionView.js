$(function () {
    this.TranslationManager.SessionView = Backbone.View.extend({
        el: "#translationsSessionForm",
        emptyMessage: 'No translations are currently flagged for saving.',
        initialize: function (options) {
            _.bindAll(this, "addTranslationToSession", "saveAll");
            options.vents.bind('saveTranslation', this.addTranslationToSession);
        },
        events: { "click #saveAll": "saveAll" },
        collection: new this.TranslationManager.Translations(),
        addTranslationToSession: function (translation) {
            this.collection.add(translation);
            var text = '';
            if (this.collection.isEmpty()) {
                this.resetSession();
                text = this.emptyMessage;
            } else {
                $(this.el).children('#saveAll').removeClass('midButton_disabled');
                $(this.el).children('#saveAll').addClass('midButton');
                text = '<span class="session_number">' + this.collection.length + '</span> translation(s) in the session';
                $(this.el).tipsy({ html: true });
                $(this.el).attr('title', this.setTooltip());
            }
            $(this.el).children('.sessionStatusText').html(text);
        },
        saveAll: function () {
            this.collection.each(function (translation) {
                translation.save();
            });
            this.collection.reset();
            this.resetSession();
            $(this.el).children('.sessionStatusText').html(this.emptyMessage);
        },
        resetSession: function () {
            $(this.el).children('#saveAll').removeClass('midButton');
            $(this.el).children('#saveAll').addClass('midButton_disabled');
            $(".tipsy").remove();
            $(this.el).unbind('mouseenter mouseleave');
        },
        setTooltip: function () {
            var text = 'translations ready to be saved:<br/>';
            var tls = this.collection.map(function (model) { return model.to_s(); });
            return tls.reduce(function (res, current) { return res + current + '<br/>'; }, text);
        }
    });
});