var randomnum, firstQ, secondQ, test;
test = 0
function um() {
    test = 1
}
mainClock = setInterval(mainFunction, 20)
function mainFunction() {
    console.log("log")
    console.log(test)
    if (test == 1) {
        text = 0
        alert("More than one")
    } else {
        test = 0
        return test
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
