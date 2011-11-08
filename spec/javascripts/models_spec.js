app.initialize();

describe("models", function(){
  describe("Translation", function(){
    beforeEach(function(){
      this.model = new tm.Translation({Id: 42, Key: 'animal', Value: 'racoon'});
    });
    
    describe("Is New", function(){
      it("returns false when id is not null", function(){
        expect(this.model.isNew()).toBeFalsy();
      });
    
      it("returns true when id is null", function(){
        this.model.set({Id: null});
        expect(this.model.isNew()).toBeTruthy();
      });
    });
  });
  describe("Translations", function(){
    beforeEach(function(){
      this.translations = new tm.Translations();
      this.fetchSpy = sinon.spy(this.translations, 'fetch');
      this.resetSpy = sinon.spy(this.translations, 'reset');
    });
    afterEach(function(){
      this.fetchSpy.restore();
      this.resetSpy.restore();
    });
    it("should populate collection when input was given", function(){
      this.translations.search('ghibli');
      expect(this.fetchSpy).toHaveBeenCalled();
    });
    it("should reset collection when no input was empty", function(){
      this.translations.search('');
      expect(this.resetSpy).toHaveBeenCalled();
    });
    it("should reset collection when no input was null", function(){
      this.translations.search(null);
      expect(this.resetSpy).toHaveBeenCalled();
    });
  });
});
