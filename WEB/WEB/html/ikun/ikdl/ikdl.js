var score = 0;
const cxkdjyx = new Audio("../../../audio/cxkmz.mp3");
const cxkdjyx2 = new Audio("../../../audio/cxkmz2.mp3");
const cxkdjyx3 = new Audio("../../../audio/cxkmz3.mp3");
const cxkdjyx4 = new Audio("../../../audio/cxkmz4.mp3");
const cxkdjyx5 = new Audio("../../../audio/cxkmz5.mp3");




function hidetanc() {
    var tanc = document.getElementById("tanczz");
    tanc.style.display = "none";
    jsqstart();
    spawnpic_a();
}

function jsqstart() {
    var sj = new Date();
    sj.setMinutes(sj.getMinutes() + 1);
    function countdown() {
        var dqsj = new Date();
        var hydsj = sj.getTime() - dqsj.getTime();
        var hysj = hydsj / 1000;
        hysj = Math.round(hysj);
        document.getElementById("sysj").innerHTML = hysj
    }
    var hysj = 1;
    if (hysj > 0){
        itval = setInterval(countdown,1000);
    }
    jssto();
}



function spawnpic_a() {
    pic = document.getElementById("dipk");
    var ckkd = window.innerWidth - 50
    var ckgd = window.innerHeight - 50
    x = Math.floor((Math.random()*ckkd)+20);
    y = Math.floor((Math.random()*ckgd)+20);
    xx = x+"px";
    yy = y +"px";
    pic.style.top = yy;
    pic.style.left = xx;
    pic.style.display = "block";
}


function spawnpic_b() {
    score++
    pic = document.getElementById("dipk");
    var ckkd = window.innerWidth - 50
    var ckgd = window.innerHeight - 50
    x = Math.floor((Math.random()*ckkd)+20);                 //距离
    y = Math.floor((Math.random()*ckgd)+20);
    xx = x+"px";
    yy = y +"px";
    pic.style.top = yy;
    pic.style.left = xx;
    mscsjs = Math.floor(Math.random() * 5);
    if (mscsjs == 4) {
        cxkdjyx.play();
    }
    else if (mscsjs == 3) {
        cxkdjyx2.play();
    }
    else if (mscsjs == 2) {
        cxkdjyx3.play();
    }
    else if (mscsjs == 1) {
        cxkdjyx4.play();
    }
    else {
        cxkdjyx5.play();
    }
}

















function ikun() {
    qqq = document.getElementById("ikuntst");
    if (score <= 10) {
        qqq.innerHTML = "王八转世了属于是"
    }
    else if (score <= 30) {
        qqq.innerHTML = "才点这么几下，一看就是小黑子！"
    }
    else if (score <= 60) {
        qqq.innerHTML = "还算将就吧，一看你就是纯路人"
    }
    else if (score <= 100) {
        qqq.innerHTML = "还算可以，勉强配得上是ikun"
    }
    else {
        qqq.innerHTML = "不愧是真ikun!"
    }
}






function jssto() {
    setTimeout(jswc,60000);
}

function jswc() {
    ikun();
    pic = document.getElementById("dipk");
    pic.style.display = "none";
    var taanc = document.getElementById("tancxx");
    document.getElementById("ikdlfs").innerHTML = score;
    taanc.style.display = "block";
    clearInterval(itval);
}


function hidetancc() {
    var tancc = document.getElementById("tancxx");
    tancc.style.display = "none";
    jsqstart();
}