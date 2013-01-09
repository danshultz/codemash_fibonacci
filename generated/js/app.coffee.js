(function() {
  var root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = this;

  root.app || (root.app = {});

  app.View = (function(_super) {

    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = JST["app/templates/fibonacci.us"];

    View.prototype.render = function() {
      $('#content').html(this.template());
      return this;
    };

    return View;

  })(Backbone.View);

  $(function() {
    return new app.View().render();
  });

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Fibonacci = (function() {

    function Fibonacci() {}

    Fibonacci.getNumber = function(val) {
      return $.ajax({
        url: '/fibonacci',
        type: "post",
        data: {
          index: val
        }
      });
    };

    return Fibonacci;

  })();

  window.App = (function() {

    function App() {
      this.onCalculateClick = __bind(this.onCalculateClick, this);

    }

    App.prototype.init = function() {
      return $('.calculate').on('click', this.onCalculateClick);
    };

    App.prototype.onCalculateClick = function(e) {
      var val;
      e.preventDefault();
      val = $("#index").val();
      return Fibonacci.getNumber(val).then(this.displayResult);
    };

    App.prototype.displayResult = function(result) {
      return $('.result').text(result);
    };

    return App;

  })();

  $(document).ready(function() {
    window.app = new App();
    return window.app.init();
  });

}).call(this);
