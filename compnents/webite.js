const myName='Hamid'
console.log('Audi', myName)

const my="hamid"
const contact = 8989899899
const email = "hamidmarajgmail.com"
// console.log(array)


 const array=[1,'pakitan',true,343.89]
console.log(array)


const student={
    
name: "ahmed",
uni: "kfueit",
conatc: "hamidmarajgmail"


}
console.log(student)

function addition() {
let priceone=10;
let pricetwo=20;
const  sum=priceone+pricetwo
console.log("the total price is",sum)

}

console.log(addition())
addition();

// hosting
console.log("hositinf")


const unNamedfunc=() =>{

   
        let priceone=10;
        let pricetwo=20;
        const  sum=priceone+pricetwo
        console.log("the total price is",sum)


}




function  calculateage() {

         const currentage=2025
         let userage;
         let calculateAge=currentage-age

}


function  arthmetic(a,b){
sum=a+b
sub=a-b
multi=a*b
divid=a/b
console.log(`The addition of ${a} and ${b}  variable:`,sum)
console.log(`The Subtraction of ${a} and ${b}  variable:`,sub)
console.log(`The multiplication of  ${a} and ${b} variable:`,multi)
console.log(`The diviion of  ${a} and ${b} variable:`,divid)


}

arthmetic(10,30)
let i=1
let num=5
let ittration=10

 //while(i<=ittration){

   //     console.log(`${num} * ${i} =`, num*i)
//} 










 for(let i=1; i<=ittration; i++){

        console.log(`${num} * ${i} =`, num*i)
}

        

// for in loop
const student1={
 name: "ahmed",
 email: "ahmed4@gmail.com",
 phone: 786999,
 rollNo: 23,
 age: 20,
 gender: "Male"

}
console.log(student1)


for (const key in student1) {
 // console.log(key,"their are key")
  console.log(`thee are the key ${key} and value are${student1[key]}`)     
}

const dressprice=[2000,5000,3000,4000,5000]
let afterdiscount=[]
for (const item of dressprice) {
     const dis=0.25*item 
     const afterdis=item-dis
     afterdiscount.push(afterdis)
     console.log("the dicount are here",afterdis)  
}


// break and continue
let start=1;
let end=10;
 //while(start<=end){

        if(start==5){

      //          continue;
        }
        console.log()
//}



        for(let start=i; start<=end; start++ ){

if(start==5){

        break;
}
console.log("break",start)
        }



const carhorom1={


        car:"audi",
        model: 3030 ,
        color: "black"
}



for (const key in carhorom1) {

        console.log(`the key are ${key } and their value are: ${carhorom1[key]}`)
}



const originalprice =[3000,4000,5000,6000,7000]
for (const item of originalprice) {
        const dis=0.25*item 
        const afterdis=item-dis
        console.log("the  price after discount:",afterdis)
}




// string and number method


let string="hello world";
console.log(string.toUpperCase());
console.log(string.toLowerCase());
// console.log(string.length())

let username="#hamid.hmail.@com"
console.log(username.includes("#","@"))
let x=123456789;

console.log(string.replace("hello","Hamid"))
console.log(string.replaceAll("o", "i"))


let trstring=string.trim()
console.log(trstring)


console.log(string.indexOf("l"))
console.log(string.lastIndexOf("l"))



console.log(username.charAt(3))
console.log(string.split("l"))
console.log(string.slice(1,9))
let last_name= "Hamid"
let Firt_name="Khalid"
console.log(last_name.concat(Firt_name))





// number methods


let mark="1000jh"



//let result=  Number(mark)+1000


let result= parseFloat(+mark)+1000
console.log(result.toFixed(3))


console.log(Number(mark))
 

// math methods


//flor,cell,round,ma,min,random
let number=10.9;
 let rep=Math.floor(number)
 console.log(rep)


 let number1=10.9;
 let rep1=Math.ceil(number1)
 console.log(rep1)


 let number3=10.9;
 let rep3=Math.round(number3)
 console.log(rep3)



 let number4=10.9;
 let rep4=Math.trunc(number4)
 console.log(rep4)
//  console.log(string.length())







///  Javascript eventl
 let btn=document.getElementById("xyz")
console.log(btn.innerHTML)
btn.addEventListener("mousemove",function() {alert("the button is cancelled..........")})

let count=0
let countValue=document.getElementById("count")

function addToCart(){

count++
        // alert("ADD")
        
        countValue.innerText=count
}


function RemoveToCart(){


count--
        // alert("Remove")

countValue.innerText=count
        console.log(count)
}  



// array method
let baketprice=[10,30,40,50,60,70,90]

//forEach

//             baketprice.forEach((item)=>{
// console.log(item*3)


// })

// puh method add item to end

baketprice.push(100)
console.log(baketprice)


//unshift add to the firt

baketprice.unshift(5)
console.log(baketprice)


//pop delete value from lat

baketprice.pop()
console.log(baketprice)

//hift remove from tart

baketprice.shift()
console.log(baketprice)



//slice
let studentName=['hamid','mohsin','mustafa','ahmed','hassan']
let nearray=studentName.slice(1,4)
console.log(nearray)


//splice

studentName.splice(3,4)
console.log(studentName)




//concat
let array1=[1,3,4]
let array3=[4,5,6]

let array5=array1.concat(array3)
console.log(array5)



//flat

let aar=[1,3,4,[5,6,[7,8]]]
console.log(aar.flat(3))




console.log(studentName.includes("hamid"))

//inde of

console.log(studentName.indexOf("mohsin"))



//lat inde of
console.log(studentName.lastIndexOf("hamid"))


let sortArray=[1,3,6,5,4,10]

//  console.log(sortArray.sort(a,b) => a-b)

//reverse

 console.log(sortArray.reverse())

 //join

 console.log(studentName.join("------------"))

//every
 let unitprice=[400,800,700,890,600]
 

 //console.log(unitprice.some(item) => item>10)


 //find
 //let maparray=unitprice.map((item) => (item*3))
//  console.log(maparray)



 //filter
  let filteredArray=unitprice.filter((item) =>  item>30)
 console.log(filteredArray);



 
let arr1=[1,3,4,5,6,7]

// arr1.splice(1,3)
 //console.log(arr1)


//let arr3=arr1.slice(3,4)
//console.log(arr3)


arr1.push(10)
console.log(arr1)



//object method
//value
//add
//delete
//assign
//entrie
let  studentobj={


        name:"john",
        age: '38',
        email: "johneample.gmail.com"

}

studentobj.contact=1349084949;
console.log(studentobj,"object")


//find out keys
console.log(Object.keys(studentobj))
console.log(Object.values(studentobj))

//key values pair
console.log(Object.entries(studentobj))


let student3={


name: "hamid",
age: 19,
gmial: hamidmaraj.com

}


//student3.prototype.hello3={

//console.log("thi name is"+name)

// }










