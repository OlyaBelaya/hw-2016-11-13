// 1. Сумма удвоенных значений каждого элемента
function sumArray(arr){
  var num = 0;
  for (i=0; i<arr.length; i++){
    num = num + arr[i] * 2;
  }
  return num;
}


// 2. Узнать, есть ли в массиве четные числа
function evenNumbers(arr){
  for (i=0; i<arr.length; i++){
    if (arr[i]%2 || arr[i]<=0) {continue;
        } else {return true;} 
  }
  return false;
}

// 3. Соединить элементы массива в одну строку, где слова разделены пробелами
function strForm(arr){
  let str = "";
  return  str = arr.join(" ");
}

// 4. Получить новый массив, в котором каждому элементу будет добавлено число,
//    равное количеству символов в этой строке
function newStr(arr){
  let string = "";
  let newArr = [];
  for (i=0; i<arr.length; i++){
    string = arr[i] + " - " + arr[i].length;
    newArr.push(string);
  }
  return newArr;
}

// 5. Получить новый массив, в котором все элементы строки содержат
//    4 или более символов
function newString(arr){
  let count = 0;
  let newArr = [];
  for (i=0; i<arr.length; i++){
    count = arr[i].length;
    if (count >= 4) {
    newArr.push(arr[i]);
  }
  }
  return newArr;
}

// 6. Получить массив, который будет содержать только не четные числа
function unEvenNumbersArray(arr){
  let unEvenArray = [];
  for (i=0; i<arr.length; i++){
   if (arr[i]%2) {unEvenArray.push(arr[i]); }
  }
  return unEvenArray;
}

// 7. Сообщить, является ли сумма всех элементов больше 100 (boolean)
function sumArrayBoolean(arr){
  let num = 0;
  for (i=0; i<arr.length; i++){
    num += arr[i];
  }
  return num > 100 ? true : false;
}


// 8. Получить новый массив, в котором все элементы будут отсортированы по кол-ву 
//    символов в строке по возрастанию
function newStringSort(arr){
  let max = 0;
  let newArr = [];
  for (var i=0; i<arr.length; i++){
    if (max < arr[i].length) {
      max = arr[i].length;
    } 
  }
  
  for (var l=0; l<= max; l++){
    for (var j=0; j<arr.length; j++){
      if (arr[j].length === l) { newArr.push(arr[j]);}
    }
  }
  return newArr.toString();
}


// 9. Найти индекс самого длинного слова в массиве
function index(arr){
  let max = 0;
  ind = 0;
  let newArr = [];
  for (var i=0; i<arr.length; i++){
    if (max < arr[i].length) {
      max = arr[i].length;
      ind = i;
    } 
  }
  return ind;
}

// 10. Получить строку, которая будет содержать все элементы двух массивов,
//     перечисленных через запятую.
function newDoubleString(arr1, arr2){
  let newArr = arr1.concat(arr2);
  return newArr.toString();
}



let nums = [1, 2,3,5,8,13,21,34];
let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];

let sum = sumArray(nums);
let st = evenNumbers(nums);
let string1 = strForm(str);
let string2 = newStr(str);
let string3 = newString(str);
let string4 = unEvenNumbersArray(nums);
let string5 = sumArrayBoolean(nums);
let string6 = newStringSort(str);
let string7 = index(str);
let string8 = newDoubleString(nums, str);

console.log(sum);
console.log(st);
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);
console.log(string5);
console.log(string6);
console.log(string7);
console.log(string8);



