﻿$(function () {
    var Translation = Backbone.Model.extend({
        isNew: function () {
            if (this.get('Id')) return false;
            else return true;
        },
        url: function () { return '/translation'; }
    });
    this.TranslationManager.Search = Backbone.Model.extend({});

    this.TranslationManager.Translations = Backbone.Collection.extend({
        model: Translation,
        url: function () { return '/search'; }
    });
});