(function () {
  app = {
    initialize: function(){
      var vents = _.extend({}, Backbone.Events);
      var sessionView = new tm.SessionView({ vents: vents });
      this.translations = new tm.Translations();
      this.router = new tm.Router();
      var searchView = new tm.SearchView({ vents: vents });
      Backbone.history.start({ pushState: true });
    }
  };
})();
