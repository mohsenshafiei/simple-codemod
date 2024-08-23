var x = 3;
var fn = () => {};
var fn2 = () => {
  var xx = "m";
  var a,
    b = 3;
};
for (var i = 0; i < 10; i++) {} // Loop variable declared with var
var obj = { a: 1, b: 2 };
for (var key in obj) {
  console.log(key);
}
var arr = [1, 2, 3];
for (var value of arr) {
  console.log(value);
}

var num = 0;
do {
  var result = num * 2;
  num++;
} while (num < 5);
if (true) {
  var conditionMet = true;
}
switch (value) {
  case 1:
    var case1Var = "one";
    break;
  case 2:
    var case2Var = "two";
    break;
  default:
    var defaultVar = "default";
}
(function () {
  var iifeVar = "inside IIFE";
})();
