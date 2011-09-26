describe("models", function(){
  beforeEach(function(){
    this.model = new TranslationManager.Translation({Id: 42, Key: 'animal', Value: 'racoon'});
  });
  
  describe("When Translation model Id is not null", function(){
    it("model is not new", function(){
      expect(this.model.isNew()).toBeFalsy();
    });
  });
  
  describe("When Translation model Id is null", function(){
    it("model is new", function(){
      this.model.set({Id: null});
      expect(this.model.isNew()).toBeTruthy();
    });
  });
});
