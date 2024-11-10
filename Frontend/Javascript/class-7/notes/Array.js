//Array
//Array is a collection of elements.

let newArray=[];
//console.log(newArray);
//console.log(typeof newArray);

let name="ram";
let age= 60;
let proffession ="doctor";
let isMarried = true;

//Array declaration(traditional method)

let userArray =["Ram",60,"doctor",true];
//console.log(userArray);


let num = [1,2,3,4,5];
//console.log(num);

let newNum = new Array(10,20,30,50);
//console.log(newNum);

//Array method:
//length
//create an array and check the length
//console.log(num.length); //5

//Accessing:
let cities = ["BBSR","CTC","JPR","KDP","BDK"];
//console.log(cities[0]);
//console.log(cities[4]);
//console.log(cities[3]);

//last element:
//let lastcity = cities.length-1;//4
//console.log(cities[lastcity]);
//JPR
//console.log(cities[2]);
//console.log(cities[lastcity/2]);
//console.log(cities[lastcity-2]);

//MODIFY
//console.log(cities);
//let modifycity = "puri";
//cities[2]=modifycity;
//console.log(cities);

//Add element
//push()
//console.log(cities);
let addcity= "kjr";
//cities.push(addcity);
//console.log(cities); //add element in an array using push()method (added in last).

//pop()
//console.log(cities);
//cities.pop();
//console.log(cities);

//shift
//console.log(cities);
//cities.shift();
//console.log(cities);

//unshift
//unshift()
//console.log(cities);
 //cities.unshift("");
 //console.log(cities);

//concat :
let fruits = ["apple","mango"];
let addarray=fruits.concat(["straberry","banana"]);
//console.log(addarray);

//includes()
let students = ["anshita","lipsa","dipali","sonali","ankita"];
//students.includes()

//slice()
const animals = ['ant','bison','camel','duck','elephant'];
const slice = animals.slice(2);//camel,duck,element
//console.log(slice);
const slice2= animals.slice(2,4);
//console.log(slice2);

//splice
const months =['jan','march','april','june'];
months.splice(1,0,'feb');
//console.log(months);//jan,feb,march,april,june
//index no 1, where i need to add.delete no 0.
months.splice(2,1,"dec");
//console.log(months);

//forloop
const array1=['a','b','c'];
const array2=[1,2,3,4,5];
//Double the no of array2;
for(let i=0; i<array2.length;i++)
{
    const doubled=array2[i]*2;
    // console.log(doubled);
}
//forEach
array2.forEach((d)=>{
//console.log(d*2)
}
)

//HOF:Higher order function

let arr =["A","B","R","S","J","P"];
for(let i=0;i<arr.length;i++)
{
 //  console.log(arr[i]);
}

//using forEach();
arr.forEach((element,index)=>{
    //console.log(element,index);
});

//map() (normal)
arr.forEach((el,i)=>{
//console.log(el);//uppercase A,B,R,S,J,P
});

arr.map((el,i)=>{
   // console.log(el.toLowerCase());//a,b,r,s,j,p
}
);
//Afer modifing(higher)
const newArray1 =arr.map((el,i)=>{
    return el.toLowerCase();
});
//console.log(newArray1);

//Filter() // HOF
//filter out the odd numbers.
let numArray =[1,2,3,4,5,6,7] //.Q-solve it using map().
const oddNumbers =numArray.filter((a)=>{
    return a%2!==0
});
//console.log(oddNumbers);

//Reduce
let number=[10,20,30,40];