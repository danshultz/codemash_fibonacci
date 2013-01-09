this["JST"] = this["JST"] || {};

this["JST"]["app/templates/fibonacci.us"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<h1>Fibonacci Calculator</h1>\n\n<form>\n  <label for="index">Index</label>\n  <input id="index" name="index" type="text" value="" size="3" />\n  <button class="calculate">Calculate</button>\n</form>\n\n<div>\n  Result: <span class="result"/>\n</div>';
}
return __p;
};

this["JST"]["app/templates/homepage.us"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<!DOCTYPE html>\n<html>\n  <head>\n    <title>'+
( pkg.name )+
'</title>\n\n    <link rel="stylesheet" type="text/css" href="'+
( css )+
'" media="all" />\n  </head>\n  <body>\n    <div id="content"></div>\n\n    <script type="text/javascript" src="'+
( js )+
'"></script>\n  </body>\n</html>';
}
return __p;
};