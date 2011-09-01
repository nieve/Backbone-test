describe("translationView", function(){
  beforeEach(function(){
    this.vents = _.extend({}, Backbone.Events);
    this.model = new Backbone.Model({Value: 'Tama Hills'});
    this.view = new TranslationManager.TranslationView({
      model: this.model, 
      vents: this.vents
    });
    this.vents.bind('saveTranslation', function(model){
      model.set({name: 'shokachi'});
    });
    var html = "<input class='valueInput' value='Pom Poko' />";
    this.view.$(this.view.el).html(html);
  });
  
  describe("adding translation triggers", function(){
    it("saves translation event", function(){
      this.view.addTranslation();
      expect(this.model.get('name')).toEqual("shokachi");
    });
  });
  
  describe("updating translation updates model value property", function(){
    it("saves translation event", function(){
      this.view.updateTranslation();
      expect(this.model.get('Value')).toEqual("Pom Poko");
    });
  });
});