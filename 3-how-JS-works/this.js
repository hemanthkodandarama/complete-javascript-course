console.log(this); // Window object

calculateAge(1969);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }

        innerFunction();
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
