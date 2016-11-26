// 1. Сумма удвоенных значений каждого элемента
function sumArray(arr){
 var num = 0;
 num = arr.reduce(function(sum, curent){
       return sum + curent*2;
 }, 0); 
  return num;
}


// 2. Узнать, есть ли в массиве четные числа
function evenNumbers(arr){
  return arr.some(a => !(a%2) & !(a === 0));
}

// 3. Соединить элементы массива в одну строку, где слова разделены пробелами
function strForm(arr){
  let str = "";
  return  str = arr.join(" ");
}

// 4. Получить новый массив, в котором каждому элементу будет добавлено число,
//    равное количеству символов в этой строке
function newStr(arr){
  let newArr = arr.map(item => `${item} - ${item.length}`);
  return newArr;
}

// 5. Получить новый массив, в котором все элементы строки содержат
//    4 или более символов
function newString(arr){
  let newArr = arr.filter(item => item.length >= 4);
  return newArr;
}

// 6. Получить массив, который будет содержать только не четные числа
function unEvenNumbersArray(arr){
  return arr.filter(item => item%2);
}

// 7. Сообщить, является ли сумма всех элементов больше 100 (boolean)
function sumArrayBoolean(arr){
  let num = 0;
  arr.forEach(item => num += item);
  console.log("Sum item = " + num);
  return num > 100 ? true : false;
}



// 8. Получить новый массив, в котором все элементы будут отсортированы по кол-ву 
//    символов в строке по возрастанию
function newStringSort(arr){
  let newArr = arr.slice().sort(function sortNumber(a,b){
                                 return a.length - b.length;
                                  });
  return newArr;
}


// 9. Найти индекс самого длинного слова в массиве
function index(arr){
   let newArr = arr.slice().sort(function sortNumber(a,b){
                                 return a.length - b.length;
                                  });
  return arr.findIndex(a => a === newArr[newArr.length-1]);
}


// 10. Получить строку, которая будет содержать все элементы двух массивов,
//     перечисленных через запятую.
function newDoubleString(arr1, arr2){
  return arr1.concat(arr2).toString();
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



