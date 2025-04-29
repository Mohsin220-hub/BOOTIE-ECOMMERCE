// WHEN WE USE CLASS THEN USE JAVA
// WHEN WE USE STRUCTURAL THEN USE JAVA SCRIPT
// WHAT IS SCOPE


// const myname='mohsin ali'
// myname='hello'
// console.log('this is myname',myname)

// let myname='mohsin ali'
// myname='hello'
// console.log('this is myname',myname)

// var myname='mohsin ali'
// myname='hello'
// console.log('this is myname',myname)



// const myname='mohsin ali'
// myname='hello'
// console.log('this is myname',typeoof(myname))

// const array=[1, 2,3, 4,5,]
// console.log("the type of this =",array)

// const a=25
//  let b=30
//   add=(a+b)

//  console.log("sum is =",add)

// const myname={
//     name:"mohsin ali",
//     contact:9832749283,
//     email:"jason@gmail.com" 
// }

// console.log("this is function",myname)

// const name="gsuy"
// const cont=9789898
// console.log(typeof("name"))

// operators
// arithematic[+, - ,*, / %, ++,--,]
// logical[true o,false1 ]
// assignment[=,==,===,+=,-=, etc]
// comparison[>,<,??=nulish]
// conditional


// FUNCTIONS
// reuseable block of code is called functions
// what is acmascript
// lexicalscoping
// claisures
// errors
// Hosting
// make a fuction and call it anywhere up and down is called hosting



// console.log('hosting a variable')




// function add(a,b){
//    let multiply= a*b;
//    let sub= a-b;
//    // const Sum= priceOne + priceTwo

//    console.log(`the multiple is ${multiply}`)
// }
// const uservalue = 20 
// add(uservalue)
   



// const abc=add()
// console.log()


// const name = ()=>{

// }
// console.log(name())




// function ageCalculator(age,a,b,c){
//    const currentyear=2025;
//    let userAge;
//    let calculatedage= currentyear - age;

//    console.log(`you are ${calculatedage} years old .`)
//    return calculatedage;
// }
// let userAge=2005

// ageCalculator(userAge)



// LOOPS
// WHILE LOOP
// DO WHILE LOOP
// FOR LOOP
// FOR IN (OBJECT)
// FOR OF (ARRAY)

// const start=1
// for(start=1; in start++){
//    if(start===5){
//       break
//    }
// }let
// console.log(`this is break` );


// string $ numbers

string = "hello world";
console.log(string.toUpperCase());
console.log(string.toLowerCase());

let username = "mohsin ali"

    if (!username.includes('$')){

        console.log("you are not registered");
    }
    console.log(username.length);
    
    console.log(string.replace('world',"mohsin"));
    console.log(string.replace('h',"l"));



    let tristring = string.trim() 
    console.log(tristring);
            
    console.log(string.indexOf("w"));
    console.log(string.lastIndexOf("l"));
    console.log(string.split("l"));
    console.log(string.slice(1,9));
    console.log(string.charAt(4));
    
    

    // console.log(string.assign(string, source));

    let FirstName = "mohsin"
    // let middleName  = "u"
    let LastName = "ali"
    // let FullName = FirstName +  LastName
    let FullName = FirstName.concat(LastName)
    console.log(FullName);



                         // NUMBER METHODS

    // let marks="23"
    // let result= 23+ 23+ "23 "
    // console.log(result);

    // let marks="23"
    // let result= Number(marks)+23+ 23+ "23 "
    // console.log(result);

    // let marks="23.987"
    // let result= parseInt(marks) +23+ 23+ "23 "
    // console.log(result);


    // let marks="23.9876"
    // let result= parseFloat(marks)+23
    // console.log(result.toFixed(3));

    // let marks="ASD"
    // let result= parseFloat(marks)+23
    // console.log(result.toFixed(3));


// frontend master channel
// code with step by step 
// programing with mosh
// piyush garg
           // MATH METHODS

// floor , round ,cell , min , max, trunc

// let numbers = 18.990
// let resp = Math.floor(numbers) 
// console.log(resp);



// let numbers = 10.990

// let resp = Math.cell(numbers) 
// console.log(resp);

                                    // -------------------->
                                    //  EVENTS IN JAVASCRIPT
                                    // -------------------->
// GEEKSFORGEEKS(NAMEWEB)

// onclick
// onmouseover
// onmouseout


// let btn=document.getElementById('button')
// console.log(btn.textContent);
// btn.addEventListener("click",function(){alert('HELLO THIS IS ME MOHSIN' )})
// btn.addEventListener('mousemove',function(){alert('THIS IS ME MOHSIN ALI HOW CAN I HELP YOU' )})

// let count=0
// let countValues = document.getElementById("count")

//  countValues.innerHTML=count
// function addToCart(){
  
//  alert("Add")
//  count++
//  countValues.innerHTML=count
// }
// function removeToCart(){
    
//    alert("Remove")
//    count--
//    countValues.innerHTML=count
// }
                                          // -------------------------->
                                         //  ARRAY METHODS IN JAVASCRIPT
                                          // -------------------------->

let baseketprices=[1,2,3,4,5,6,,7,8,9]
// forEach
baseketprices.forEach((item)=> (
    console.log("for Each",item*2)
    
))

// PUSH
baseketprices.push(10)
console.log(baseketprices);

// UN SHIFT
baseketprices.unshift(0)
console.log(baseketprices);

// POP
console.log("pop remove item from end");
baseketprices.pop()
// console.log(baseketprices);

// SHIFT
console.log("shift remove item from start");

baseketprices.shift()
// console.log(baseketprices);

// SLICE
console.log("IT GIVES NEW ARRAY U CHOOSE LAST INDEX NOT INCLUDE");
let Sname =["ali","ahmad","hassan","asghr","gulam","mohsin"]
let newarray=Sname.slice(1,4)
// console.log(newarray);

// SPLICE
console.log("IT GIVES NEW ARRAY not including the array which u select");
Sname.splice(1,3)
// console.log(Sname);

// CONCAT
let arr1=[1,2,3,[4,5,[6,7]]]
let arr2=[8,9,10,11]
let arr3=arr1.concat(arr2)
// console.log(arr3);

// console.log(arr1.flat(3));

// console.log(Sname.includes("ali"));
console.log(Sname.indexOf("hassan"));
console.log(Sname.lastIndexOf("ahmad"));

// SORT ARRAY

let sortarr=[1,2,3,6,5,4,8,7]
// sortarr.length
// for(let i=0;i>=sortarr.length;1++){
    // console.log("array is "i);
    
// }

// REVERSE
// console.log(sortarr.reverse());
// JOIN
// console.log(sortarr.join("**"));

// let unitprices=[10,30,500,20,60]
// EVERY
// let res=unitprices.every((items) => (items > 30))
// console.log('every output',res);

// let result=unitprices.some((items) => (items > 30))
// console.log('every output',result);

// FIND
// MAP
// let mapArray = unitprices.map((items)=>items*2)
// console.log('mapped array', mapArray);

// unitprices.forEach((items)=>items*3)
// console.log(unitprices)

// let filteredArray=unitprices.filter((items) => items > 30)
// console.log(filteredArray);


                                          // -------------------------->
                                         //  OBJECT METHODS IN JAVASCRIPT
                                          // --------------------------->
//KEYS 
//VALUES


let stobj={
    naam:"mohsin",
    age:"20",
    email:"ali@gmail.com"
}
stobj.contact= "098776655";
// stobj['contact']= 098776655
console.log("key of an obj",stobj);
// find out keys
console.log("keys",Object.keys(stobj));

console.log("keys",Object.values(stobj));
console.log("keys",Object.entries(stobj));

// const stobj1 = {
//     naam:"ali ahmad"
// }
// stobj1.freez(stobj1)
// stobj1.naam2 = 'updated hun'
// console.log(stobj1,'changed');

// call back function is like this too
let xyzz=function(){

}
// destruct function
const {naam,age,xyz}=stobj
console.log(naam,age,xyz);
// restparameter
// let myFunc=function(...a){
//  console.log(a);
 
// }
// myFunc=(1,2,3,4,5)


// const n=[1,2,3,4,5];
// const ne=[...n,4,5];
// console.log(ne);

// promises
// ascynic
// fetch & xios crud

// DEFAULT BEHAVIOR OF JAVASCRIPT IS SYNCHRONIOUS
// CRUD
// CRREATE
// ADD
// DELETE 


