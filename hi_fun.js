/*

let user ={
     name:"john",
     age: 30,
};

user.sayHi = function(){
    alert("Hello");
};


user.sayHi();

*/

// for Basic usage of the object-to-primitive

/*
function population(country, pop) {
	return {
		country: country,
		pop: pop
	};
}

var america_pop = population("USA", 350e6);
var mexico_pop = population("Mexico", 200e6);
var canada_pop = population("Canada", 200e6);

alert(america_pop); // [object Object]

var north_america_pop = america_pop + mexico_pop + canada_pop;

alert(north_america_pop); // [object Object][object Object][object Object]
*/

// By using toString
/*
function population(country, pop) {
	return {
		country: country,
		pop: pop,
		
		toString: function () {
			return "[Population " + 
				"\"" + country + "\" " +
				pop +
			"]";
		}
	}
}

var america_pop = population("USA", 350e6);
alert(america_pop); // [Population "USA" 350000000]
var canada_pop = population("Canada", 200e6);
alert(canada_pop);

*/


// by using valueOf 

function population(country, pop) {
	return {
		country: country,
		pop: pop,
		
		toString: function () {
			return "[Population " + 
				"\"" + country + "\" " +
				pop +
			"]";
		},
		
		valueOf: function () {
			return pop;
		}
	};
}

var america_pop = population("USA", 350e6);
var mexico_pop = population("Mexico", 200e6);
var canada_pop = population("Canada", 200e6);

alert(america_pop); // [Population "USA" 350000000

var north_america_pop = america_pop + mexico_pop + canada_pop;

alert(north_america_pop); // 750000000