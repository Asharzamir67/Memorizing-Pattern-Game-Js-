let gameSeq = [];
let userSeq = [];
let btns= ["red","yellow","green","blue"];
let started = false;
let level=0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("gamestartd");
        started = true;
        lvlup();
    }
});

function btnFlash(randBtn){
    
    randBtn.classList.add("flash");
    
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },250);
}

function userFlash(randBtn){
    
    randBtn.classList.add("userflash");
    
    setTimeout(function(){
        randBtn.classList.remove("userflash");
    },250);
}

function lvlup(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndx= Math.floor( Math.random() * 3 );
    let randColor=btns[randIndx];
    let randBtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkColor(index){
    console.log(index);
    
    if(userSeq[index] == gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(lvlup,1000);
        }
    }else{
        h2.innerHTML = `GAME OVER!! <b>YOUR SCORE WAS ${level}</b> Press Any Key To Start The Game`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="peachpuff";
        },200);
        resetGame();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkColor(userSeq.length-1);
}
let allBtns= document.querySelectorAll(".butn");
for(eachBtn of allBtns){
    eachBtn.addEventListener("click",btnPress);
}
function resetGame(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}