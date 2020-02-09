// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2020 - year);
}

// retirement(1956);

var retirement = function(year) {
    console.log(65 - (2020 - year));
}

// variables
console.log(age); // undefined
var age  = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();