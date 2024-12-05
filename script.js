
const landingPage=document.getElementById("pocetna");
const mainPage=document.getElementById("glavna");
const startButton=document.getElementById("startBtn");

startButton.addEventListener("click", ()=>{
    landingPage.style.display="none";
    mainPage.style.display="block";
});
const gamearea=document.getElementById("game-area");
const character=document.getElementById("character");

let position={top: 175, left: 257};

document.addEventListener("keydown", (event)=>{
    switch(event.key){
        case "ArrowUp":
            if(position.top>0) position.top-=10;
            break;
            case "ArrowDown":
                if(position.top<350) position.top+=10;
                break;
                case "ArrowLeft":
                    if(position.left>0) position.left-=10;
                    break;
                    case "ArrowRight":
                        if(position.left<550) position.left+=10;
                        break;
    }
    character.style.top=`${position.top}px`;
    character.style.left=`${position.left}px`;
});

const editor=document.getElementById("editor");
const runButton=document.getElementById("run-code");

runButton.addEventListener("click", ()=>{
const userCode=editor.value;
try{
    character.style=userCode;
}catch(error){
    alert("Došlo je do greške u vašem kodu!");
}
})