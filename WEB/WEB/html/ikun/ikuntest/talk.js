function talkIkun() {
    let score = sessionStorage.getItem("sscore");
    Number(score);
    score ++;
    sessionStorage.setItem("sscore",score);
};
function talkXhz() {
    let score = sessionStorage.getItem("sscore");
    Number(score);
    score --;
    sessionStorage.setItem("sscore",score);
};

function finnal() {
    let score = sessionStorage.getItem("sscore");
    Number(score);
    if (score > 0) {
        window.location.href = "finnalikun.html";
    }
    else if (score == 0) {
        window.location.href = "finnalmid.html";
    }
    else {
        window.location.href = "finnalxhz.html";
    }
};