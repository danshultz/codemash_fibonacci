(function() {

  describe("Fibonacci", function() {
    return describe("#getNumber", function() {
      Given(function() {
        return spyOn($, "ajax");
      });
      Given(function() {
        return $.ajax.andReturn("value");
      });
      When(function() {
        return this.number = Fibonacci.getNumber(5);
      });
      Then(function() {
        return expect(this.number).toEqual("value");
      });
      return Then(function() {
        return expect($.ajax).toHaveBeenCalledWith({
          url: '/fibonacci',
          type: "post",
          data: {
            index: 5
          }
        });
      });
    });
  });

  describe("App", function() {
    Given(function() {
      return this.app = new App();
    });
    describe("#init", function() {
      Given(function() {
        return this.button = affix('button.calculate');
      });
      Given(function() {
        return spyOn(this.app, "onCalculateClick");
      });
      When(function() {
        return this.app.init();
      });
      When(function() {
        return this.button.click();
      });
      return Then(function() {
        return expect(this.app.onCalculateClick).toHaveBeenCalled();
      });
    });
    return describe("#onCalculateClick", function() {
      Given(function() {
        return this.stubEvent = {
          preventDefault: function() {}
        };
      });
      Given(function() {
        return this.stubResponse = {
          then: function() {}
        };
      });
      Given(function() {
        return spyOn(this.stubEvent, "preventDefault");
      });
      Given(function() {
        return spyOn(Fibonacci, "getNumber");
      });
      Given(function() {
        return Fibonacci.getNumber.andReturn(this.stubResponse);
      });
      When(function() {
        return this.app.onCalculateClick(this.stubEvent);
      });
      return Then(function() {
        return expect(this.stubEvent.preventDefault).toHaveBeenCalled();
      });
    });
  });

}).call(this);
