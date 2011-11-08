describe("SearchView", function(){
  beforeEach(function(){
    this.vents = _.extend({}, Backbone.Events);
    this.view = new tm.SearchView({vents: this.vents});
    this.view.el = document.createElement(this.view.tagName);
  });

  describe("launch search", function(){
      afterEach(function(){
        app.router.navigate.restore();
      });
      beforeEach(function(){
        this.e = { preventDefault: function(){} };
        sinon.stub(app.router, "navigate").returns({});
        sinon.spy(this.e, "preventDefault");
      });
      it("prevents default event behaviour", function(){
        this.view.launchSearch(this.e);
        expect(this.e.preventDefault).toHaveBeenCalledOnce();
      });
      it("navigates router to /searchfor", function(){
        this.view.launchSearch(this.e);
        expect(app.router.navigate).toHaveBeenCalledWith("searchfor?term=undefined", true);
      });
  });
  
  describe("resetting and displaying results", function(){
    beforeEach(function(){
      this.translationView = new Backbone.View();
      sinon.spy(this.translationView, "render");
      sinon.stub(tm, "TranslationView")
        .returns(this.translationView);
    });    
    afterEach(function() {
      tm.TranslationView.restore();
      app.translations.reset();
    });
    it("renders translation views for each translation in the collection", function(){
      var model1 = new tm.Translation({Key:'food', Value: 'tempura'});
      var model2 = new tm.Translation({Key: 'balls', Value: 'pouch'});
      app.translations.add(model1);
      app.translations.add(model2);

      this.view.resetResults();
      
      expect(tm.TranslationView).toHaveBeenCalledTwice();
      expect(this.translationView.render).toHaveBeenCalledTwice();
    });
  });
});
