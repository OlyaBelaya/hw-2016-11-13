
function isInArray(item){
  for (i = 0; i < letters.length; i++){
    if (item === letters[i]) { return true;}
  }
  return false;
}

function lettersStr(string){
  let arr = string.split("");
  for (var i=0; i<=arr.length; i++){ 
    if (isInArray(arr[i])) {arr.splice(i, 1);  i= i-1;}
  }
  return arr.join("");
}

var letters = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];
let str = "ooollkjYYfda";
let st = lettersStr(str);
console.log(st);