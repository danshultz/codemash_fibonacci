describe "Fibonacci", ->
  describe "#getNumber", ->
    Given -> spyOn($, "ajax")
    Given -> $.ajax.andReturn("value")
    When -> @number = Fibonacci.getNumber(5)
    Then -> expect(@number).toEqual("value")
    Then -> expect($.ajax).toHaveBeenCalledWith
        url: '/fibonacci',
        type: "post",
        data: { index: 5 }

describe "App", ->
  Given -> @app = new App()

  describe "#init", ->
    Given -> @button = affix('button.calculate')
    Given -> spyOn(@app, "onCalculateClick")
    When -> @app.init()
    When -> @button.click()
    Then -> expect(@app.onCalculateClick).toHaveBeenCalled()

  describe "#onCalculateClick", ->
    Given -> @stubEvent = { preventDefault: -> }
    Given -> @stubResponse = { then: -> }
    Given -> spyOn(@stubEvent, "preventDefault")
    Given -> spyOn(Fibonacci, "getNumber")
    Given -> Fibonacci.getNumber.andReturn(@stubResponse)
    When -> @app.onCalculateClick(@stubEvent)
    Then -> expect(@stubEvent.preventDefault).toHaveBeenCalled()
