function merge2String(str1, str2) {
  let newStr = "";
  str1 = str1.split("");
  str2 = str2.split("");

  for (let i = 0; i < st1.length; i++) {
    if(!str1[i]) {
        str1[i] = "";
    } else if(!str2[i]){
        str2[i] = "";
    }
    newStr += str1[i] + str2[i];
}
console.log(merge2String("abc", "123"));
