//Function is a keyword.
//Declaration:
//function functionname(){
//code here
//}

//write a function to print your namr.
function printName()
{
    console.log("My name is Anshita"); 
}
printName(); //invokation or function call



function printName(name){
    console.log("my name is${name}");
}
printName("Anshita");


//Return keyword
//function printName(name,age,city){
   // return 'My name is ${name},${age},${city}}';
//}
//let output=printName("Anshita",23,"BBSR");
//console.log(output);

//Arrow function
//syntax:
console.log(printName("Anshita"));//Before
const printName=(name)=>{
    return'My name is ${Anshita}';
}
console.log(printName("Anshita"));//After