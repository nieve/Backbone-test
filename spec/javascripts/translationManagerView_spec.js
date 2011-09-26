describe("translationManagerView", function(){
  beforeEach(function(){
    this.vents = _.extend({}, Backbone.Events);
    this.view = new TranslationManager.TranslationManagerView({vents: this.vents});
    this.view.el = document.createElement(this.view.tagName);
  });
  
  describe("autocomplete", function(){
    beforeEach(function(){
      this.fetchSpy = sinon.spy(this.view.collection, 'fetch');
      this.resetSpy = sinon.spy(this.view.collection, 'reset');
      this.setInput = function(input){
        var html = "<input type='text' value='" + input + "' />";
        this.view.$(this.view.el).html(html);
      };      
    });
    afterEach(function(){
      this.fetchSpy.restore();
      this.resetSpy.restore();
    });
    it("should populate collection when input was given", function(){
      this.setInput('ghibli');
      this.view.autocomplete();
      expect(this.fetchSpy).toHaveBeenCalled();
    });
    it("should reset collection when no input was given", function(){
      this.setInput('');
      this.view.autocomplete();
      expect(this.resetSpy).toHaveBeenCalled();
    });
  });
  describe("resetting results", function(){
    beforeEach(function(){
      this.translationView = new Backbone.View();
      sinon.spy(this.translationView, "render");
      sinon.stub(TranslationManager, "TranslationView")
        .returns(this.translationView);
    });    
    afterEach(function() {
      TranslationManager.TranslationView.restore();
    });
    it("renders translation views for each translation in the collection", function(){
      var model1 = new TranslationManager.Translation({Key:'food', Value: 'tempura'});
      var model2 = new TranslationManager.Translation({Key: 'balls', Value: 'pouch'});
      this.view.collection.add(model1);
      this.view.collection.add(model2);

      this.view.resetResults();
      
      expect(TranslationManager.TranslationView).toHaveBeenCalledTwice();
      expect(this.translationView.render).toHaveBeenCalledTwice();
    });
  });
});
