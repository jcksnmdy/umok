var randomnum, firstQ, secondQ, test;
test = 0
function um() {
    test = 1
    uh()
}
function uh() {
    test = 0
}
mainClock = setInterval(mainFunction, 20)
function mainFunction() {
    console.log("log");
    console.log(test);
    if (test == 1) {
        text = 0;
        document.GetElementById('testing').innerHTML = "Hey"
    } else {
        document.GetElementById('testing').innerHTML = "Bye"
        test = 0;
    }
}
function setup() {
        window.location = 'index.html';
}
function playerActive() {
        window.location = 'player.html';
}
function begin() {
        window.location = 'play.html';

}
