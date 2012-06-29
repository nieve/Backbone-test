describe("translationView", function(){
  beforeEach(function(){
    this.vents = _.extend({}, Backbone.Events);
    this.model = new Backbone.Model({Value: 'Tama Hills', Key: 'place'});
    this.view = new tm.TranslationView({
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
  
  describe("render", function(){
    beforeEach(function(){
      console.log("setting fixture path");
      jasmine.getFixtures().fixturesPath = '/BackboneTest/Views/Templates';
      console.log("loading fixtures");
      loadFixtures("Result.ascx");
      console.log("setting rendered view");
      this.renderedView = this.renderedView || this.view.render();
    });
    it("creates a translation value paragraph", function(){
      expect(this.renderedView).toContain('p.translationValue');
    });
    it("displays the view model value property", function(){
      expect(this.renderedView).toContain('p input[value="Tama Hills"]');
    });
  });
});
