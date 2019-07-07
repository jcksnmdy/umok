var randomnum, firstQ, secondQ;
function um() {
    alert("Hey")
}
function sendMail() {
    randomnum = Math.floor(Math.random(0)*10);
    firstQ = randomnum
    if (randomnum == 0) {
        document.getElementById('q').innerHTML = "What is the apital of America?";
    }
    if (randomnum == 1) {
        document.getElementById('q').innerHTML = "What is the capital of England?";
    }
    if (randomnum == 2) {
        document.getElementById('q').innerHTML = "What is the capital of Argentina";
    }
    if (randomnum == 3) {
        document.getElementById('q').innerHTML = "What is the capital of Ireland";
    }
    if (randomnum == 4) {
        document.getElementById('q').innerHTML = "What is the capital of Scotland";
    }
    if (randomnum == 5) {
        document.getElementById('q').innerHTML = "What is the capital of Iceland";
    }
    if (randomnum == 6) {
        document.getElementById('q').innerHTML = "What is the capital of Japan";
    }
    if (randomnum == 7) {
        document.getElementById('q').innerHTML = "What is the capital of France";
    }
    if (randomnum == 8) {
        document.getElementById('q').innerHTML = "What is the capital of Australia";
    }
    if (randomnum == 9) {
        document.getElementById('q').innerHTML = "What is the capital of China";
    }
    console.log(randomnum)
    var link = "mailto:" + escape(document.getElementById('player1').value)
             + "?subject=Question"
             + "&body=" + escape(document.getElementById('q').value)
    ;
    window.location.href = link;
}
function sendMail2() {
    var link = "mailto:" + escape(document.getElementById('player2').value)
             + "?subject=Question"
             + "&body=" + escape(document.getElementById('q').value)
    ;
    window.location.href = link;
    console.log(randomnum)
}
function sendMail3() {
    randomnum = Math.floor(Math.random(0)*10);
    secondQ = randomnum
    if (randomnum == 0 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the apital of America?";
    }
    if (randomnum == 1 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of England?";
    }
    if (randomnum == 2 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of Argentina";
    }
    if (randomnum == 3 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of Ireland";
    }
    if (randomnum == 4 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of Scotland";
    }
    if (randomnum == 5 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of Iceland";
    }
    if (randomnum == 6 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of Japan";
    }
    if (randomnum == 7 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of France";
    }
    if (randomnum == 8 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of Australia";
    }
    if (randomnum == 9 && randomnum == firstQ) {
        document.getElementById('q').innerHTML = "What is the capital of China";
    }
    console.log(randomnum)
    var link = "mailto:" + escape(document.getElementById('player3').value)
             + "?subject=Question"
             + "&body=" + escape(document.getElementById('q').value)
    ;
    window.location.href = link;
}
function sendMail4() {
    var link = "mailto:" + escape(document.getElementById('player4').value)
             + "?subject=Question"
             + "&body=" + escape(document.getElementById('q').value)
    ;
    window.location.href = link;
    console.log(randomnum)
}
