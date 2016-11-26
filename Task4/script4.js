
// Написать функцию, которая будет принимать строку (только буквы латинского алфавита) 
// любой длины и возвращать ее, но удалив из нее все гласные буквы английского алфавита. 

function delItem(item, i, arr){
  if (letters.includes(item)) {return delete arr[i]}
  return item;
}


function lettersStr(string){
  let arr = string.split("");
  arr.forEach(delItem);
  return arr.join("");
}

var letters = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];
let string000 = "ooollkjYYfda";
let out = lettersStr(string000);
console.log(out);