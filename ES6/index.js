//Block Scope-Let and Const
// let oldUser = true;
// const discountPercentage = 10;

// if(oldUser==true) {
// 	const discountPercentage = 20;
// 	console.log("discountPercentage of Old User= "+discountPercentage);

// }

// console.log(discountPercentage);









// ////ARROW FUNCTION

// //old Method

// // var multiply = function (x,y){
// // 	return x * y;
// // }
// // console.log(multiply(2,3));

// // //or
// // function multiply (x,y){
// // 	return x * y;
// // }


// //New Method
//  let multiply = (x,y) =>{
//  	return x * y;
//  }
// console.log(multiply(2,3));








// //Default Parameters

// function multiplyAgain(a, b=4){//b=4 is default parameter
// 	return a*b;
// }
// console.log(multiplyAgain(3));








// //Rest Parameters
// let allUserAddress= [];
// let userData = (userId, ...address) => {
// 	//some data
// }
// userData("dawood", someAddress,secondAddress);

// //Exmple

// let allPeopleIWantToInvite =[];

// let pushToPartyList = (...people) =>{
// 	let newPeopleArray = people;
// 	allPeopleIWantToInvite=allPeopleIWantToInvite.concat(newPeopleArray);
// 	console.log(allPeopleIWantToInvite);
// 	return allPeopleIWantToInvite;

// }

// pushToPartyList("Dawood","Shashank","Akshay");

// pushToPartyList("Aisha","Monya","Sonu");





// //Spread Parameters(opp of Rest)

// function sum(x,y,z){
// 	return x+y+z;

// }
// const numbers = [1,2,3];
// //console.log(sum(number[0]+number[1]+number[2]));
// console.log(sum(...numbers));

// //Another Example for concatinating array using Spread

// var a=[25, 89];
// var b=[45, 12];
// var c=[...a, ...b];
// console.log(c);






// //Object Literals

// let firstName = "Dawood";
// let lastName ="Chouhan";

// //let nameOfPerson = {firstName:firstName, lastName:lastName};
// //with object literals
// let nameOfPerson={firstName,lastName};
// console.log(nameOfPerson);

// //another Example
// let actualPrice = 50000;
// let discountPricePercentage = 10;

// let priceOfProduct = {
// 	actualPrice,
// 	discountPricePercentage,
// 	calculateFinalPrice(){
// 		//it is called method here and not a function
// 		return actualPrice-((actualPrice-discountPricePercentage)/100);
// 	}
// }
// console.log(priceOfProduct);
// console.log(priceOfProduct.calculateFinalPrice());






//Template Literals

//var sentence= "I am dawood"+"I am a programmer"

//Using Template literal
var sentence=`I am Dawood . 
				I am a programmer`;

	console.log(sentence);	

	//Another example
let a="i am dawood";
let b="i am a developer";

let combinedSentence =`${a}.${b}`

console.log(combinedSentence);

//One more Example

let generateEmail =(firstName,lastName, message) =>{
	let emailMessage=`Hi ${firstName+" "+lastName}\n
	This is the message we have for you-\n
	${message}\n
	copyrights @edwisor.com`;

	return emailMessage;
}		

console.log(generateEmail("dawood","chouhn","Welcome to Edwisor"))












//For of loop
//Forin loop example
var customers =[{
	'custId' : '123',
	'signedUpDate':'2016-12-11'
},
{
	'custId':'456',
	'signedUpDate':'2015-09-11'
}]
for(x in customers){
	console.log(x)  //here x output is 0 and then 1
	console.log(customers[x].custId)
}

//For of loop example
var customers =[{
	'custId' : '123',
	'signedUpDate':'2016-12-11'
},
{
	'custId':'456',
	'signedUpDate':'2015-09-11'
}]
for(x of customers){
	console.log(x)  //here x output is objects
	}

//for in loop another example
var singleUser={name:"Dawood",
				email:"dawood@gmail.com",
				mobile:9876543210}
for(x in singleUser){
	console.log(x)  //here x is the keys
	console.log(singleUser[x])
}


//Same example with for of loop another example
// var singleUser={name:"Dawood",
// 				email:"dawood@gmail.com",
// 				mobile:9876543210}
// for(x of singleUser){
// 	console.log(x)  //It is not used in objects
// 	console.log(singleUser[x])
// }


