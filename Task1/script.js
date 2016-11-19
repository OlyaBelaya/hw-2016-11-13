function Count(init, step){
   var sumstep = init + step;
       
   return sumstep;
}

///////////////////////////////////////////////////////////////////
var start = prompt("Введите значение, начинающее отсчет:", "");

var numStart = Number(start);
console.log(numStart); 
//console.log(isNaN(numStart));
if (isNaN(numStart) || numStart <= 0) {
            alert("Не верно введено значение!");
        }

var steps = prompt("Введите значение, указывающее шаг:", "");

var numSteps = Number(steps);
console.log(numSteps); 
if (isNaN(numSteps) || numSteps <= 0) {
            alert("Не верно введено значение!");
        }

var times = prompt("Введите значение, определяющее количество повторений:", "");

var numTimes = Number(times);
console.log(numTimes); 
if (isNaN(numTimes) || numTimes <= 0) {
            alert("Не верно введено значение!");
        }
///////////////////////////////////////////////////////////////////

var sum = numStart;
//console.log(typeof(sum));
for (var i = 1; i <= numTimes; i++){
    sum = Count(sum, numSteps);
    console.log(typeof(sum));
    console.log(sum);
     
}

alert(sum);