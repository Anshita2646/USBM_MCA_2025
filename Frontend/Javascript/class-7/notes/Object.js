//Object (key-value pairs)
let student={name:"Anshita",//value
    age:25,
    batch:"MCA",                  //traditional way
   roll: 12};
   //console.log(typeof student);

   let student1=["Anshita",25,"MCA",12]; //wrong way

   //object is meaningfull as compare to array(meaningless).

   //Using cnstructor
   //const student2 = newObject();
   student.name="Anshita";
   student.age=25;
   student.batch="MCA";
   student.roll=12;
   //console.log(student2);

   //Accessing Element
   //bracket notation('[]')
   //dot notation(.)
   //Ex: want to access student name??
    //console.log(student2["name"]) //bracket 
    //console.log(student2,name);   //dot

    //Modify Element
    student.name="Mamuni";
    //console.log(name);
   
    //Javascript Object Notation-JSON

           
  //Nested Object
  let person={
    name:"Anshu",
    age:23,
    roll:12,
    address:{
        city:"BBSR",
        po:"RRL",
        pin:751030,

    }
  }

//Social media comments
let user={
    username :"abc",email:"abc123@gmail.com",gender:"female",age:21,comments:["abs","ghj","bmn"],
    address:{city:"bbsr",
        pin:750313,
        state:"odisha"}
}
//-->Access values
//1.username ?
//console.log(user.username]);
//2.email ?
//console.log(user.email)
//city & state?
//console.log(user.address.city,user.address.state)
//comments(1st & last)?
console.log(user.comments[0])
console.log(user.comments[user.comments.length-1])


//This keyword
//It refers to the current object.
let student5={
    name:"mamuni",
    age:23,
    greet:function(){           //greet is a method
        console.log('Hello,${this.name}'); //student.name(alternate)    current object
}
}
student5.greet();

//Add to cart
let product={
   // Id:201,
   // productname:"Iphone",
   // stock=30,
    
}
//API
//JSON