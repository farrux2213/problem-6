var son = 52814;
var sonStr = son.toFixed();
var yigindi = 0;

for (var i = 0; i < sonStr.length; i++) {
  yigindi += parseInt(sonStr[i]);
}

console.log(yigindi);
