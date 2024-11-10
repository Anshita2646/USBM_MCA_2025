//To do: Diffrence b/w push(),pop(),shift(),unshift() with proper defination and examples.

//answer:
// + push()
// - By using push() method,we add the the element.But the element will added into last.

    

//   + unshift()
// - By using this method element will add in first.



//   + pop()
// - By using pop() method,we remove the element and element wii be delete from last.

   

//   + shift()
// - By using shift(),we also remove the element and element will be delete from first.

let names=["Anshu","dipti","Ritu","mamuni","supri"];

console.log(names);
names.push("chinu");
console.log(names);


console.log(names);
names.pop();
console.log(names);

console.log(names);
names.shift();
console.log(names);

console.log(names);
names.unshift("preeti");
console.log(names);