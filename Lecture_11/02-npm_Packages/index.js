//don't forget to first install the required 3 packages as mentioned below.
const giveMeAJoke = require('give-me-a-joke');
const colors = require('colors');
const figlet = require('figlet');

// To get a random Chuck Norris joke
giveMeAJoke.getRandomCNJoke (function(joke) {
    console.log(joke); //we are getting joke from give-me-a-joke pkg
    console.log(joke.rainbow);//rainbow is from colors pkg, fills string with rainbow colors.
});

const figletInput = 'Sidharth Pandey'

figlet(figletInput, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});
//figlet code's output will look like below:
//  ____  _     _ _                _   _       ____                 _
// / ___|(_) __| | |__   __ _ _ __| |_| |__   |  _ \ __ _ _ __   __| | ___ _   _
// \___ \| |/ _` | '_ \ / _` | '__| __| '_ \  | |_) / _` | '_ \ / _` |/ _ \ | | |
//  ___) | | (_| | | | | (_| | |  | |_| | | | |  __/ (_| | | | | (_| |  __/ |_| |
// |____/|_|\__,_|_| |_|\__,_|_|   \__|_| |_| |_|   \__,_|_| |_|\__,_|\___|\__, |
//                                                                         |___/


// Please note, in case you are not getting the expected output,
// then please run this file in your system's command line and not in a terminal inside any IDE
// to get the correct output.
