(function () {
    tm.Translation = Backbone.Model.extend({
        isNew: function () {
            if (this.get('Id')) return false;
            else return true;
        },
        to_s: function () {
            return 'key: ' + this.get('Key') + ' / value: ' + this.get('Value');
        },
        url: function () { return '/translation'; }
    });

    tm.Translations = Backbone.Collection.extend({
        model: tm.Translation,
        url: function () { return '/search'; },
        search: function(searchTerm){
            if (searchTerm && searchTerm.length >= 1) {
                this.fetch({ data: { term: searchTerm} });
            }
            else {
                this.reset();
            }
        }
    });
    tm.Router = Backbone.Router.extend({
        routes: {
            "": "search",
            "searchfor?term=:searchTerm": "search"
        },
        search: function(searchTerm){
            app.translations.search(searchTerm);
        }
    });
})();
