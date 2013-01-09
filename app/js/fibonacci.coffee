class window.Fibonacci
  @getNumber: (val) ->
    $.ajax
      url: '/fibonacci',
      type: "post",
      data: { index: val }

class window.App
  init: ->
    $('.calculate').on('click', @onCalculateClick)

  onCalculateClick: (e) =>
    e.preventDefault()
    val = $("#index").val()
    Fibonacci.getNumber(val)
      .then(@displayResult)

  displayResult: (result) ->
    $('.result').text(result)

$(document).ready ->
  window.app = new App()
  window.app.init()

