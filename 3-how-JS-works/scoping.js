function scopeExample() {
    var a = 'Hello!';

    first();
    
    function first() {
        var b  ='Hi!';
        second();
    
        function second() {
            var c = 'Hey!';
            console.log(a + b + c);
        }
    }
}

// Example to show the different between execution stack and scope chain

function scopeChain() {
    var a = 'Hello!' ;
    first();

    function first() {
        var b = 'Hi!';
        second();

        function second() {
            var c = 'Hey!';
            third();
        }
    }

    function third() {
        var d = 'John';
        // console.log(c); Error - c is not defined
        // console.log(b); Error - b is not defined
        console.log('a = ' + a + ', d = ' + d);
    }
}

scopeChain();
