(function () {
    TranslationManager.Translation = Backbone.Model.extend({
        isNew: function () {
            if (this.get('Id')) return false;
            else return true;
        },
        to_s: function () {
            return 'key: ' + this.get('Key') + ' / value: ' + this.get('Value');
        },
        url: function () { return '/translation'; }
    });
    TranslationManager.Search = Backbone.Model.extend({});

    TranslationManager.Translations = Backbone.Collection.extend({
        model: TranslationManager.Translation,
        url: function () { return '/search'; }
    });
})();
