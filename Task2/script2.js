function typ(item){
  return typeof(item);
}


function firstWay(){
  var str = "";
  for(i = 0; i<arguments.length; i++){
    str += typ(arguments[i]); 
    if (i < (arguments.length - 1)) {str  = str + ", "};   
  }
  
  return str;
}


function SecondWay(...param){
  var str = "";
  //console.log(!param.length);
  if (!param.length) {return str;}
  var str1 = param.map(typ);
      return str1.toString();
}

let arr = []; 
let st = firstWay(5, "st", true, arr);
let st1 = SecondWay(5, "st", true, arr);
console.log(st);
console.log(st1);


