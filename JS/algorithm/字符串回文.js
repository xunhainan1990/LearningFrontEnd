function isPalina(str) {
  if (Object.prototype.toString.call(str) !== "[object String]") {
    return false;
  }
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
