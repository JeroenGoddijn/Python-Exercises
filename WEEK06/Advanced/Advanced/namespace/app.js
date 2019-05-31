var MYAPP = MYAPP || {};


var ns = (function (namespace) {
    var prompt = "Welcome,",
        prompt2 = "How are you?",
        prompt3 = "Good to see you again.",
        counter = 0,
        users = [];

    namespace.greeting = function (user) {
        var greeting = prompt + " ";
        if (namespace.newUser(user)) {
            greeting += prompt2;
        } else {
            greeting += prompt3;
        }
        console.log(greeting);
        counter++;
    };

    namespace.newUser = function (user) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].toUpperCase() === user.toUpperCase()) {
                return false;
            }
        }
        addUser(user);
        return true;
    };

    var addUser = function (user) {
        users.push(user);
    };

    namespace.numberOfGreetings = function () {
        console.log("Total number of greetings: " + counter);
    };

    return namespace;

})(MYAPP)