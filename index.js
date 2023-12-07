


let boxElement=document.querySelectorAll('.box')
let xAttempts=[]
let oAttempts=[]
let wonTheGame=0

let gameResult=document.getElementById('result')
let message=document.getElementById("message")

let winc=[
    [0,4,8],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]
]
boxElement.forEach((box)=>{
    box.onclick=handleClick
})

let click=0;

function handleClick(event){
    // console.log(event.target.getAttribute("id"))
    let i=event.target.getAttribute("id")
    // console.log(i-1)
    let p=document.createElement('p')
    
    boxElement[i-1].append(p)

    if(click%2==0){
        console.log(click)
    xAttempts.push(i-1);
    p.innerText="X"
    xAttempts.push(i-1)
    // console.log(xAttempts)
    result(winc,xAttempts,'x')
  }

    else{
        console.log(click)
        oAttempts.push(i-1) 
        p.innerText="O"
        // console.log(oAttempts)
        result(winc,oAttempts,'o')
    }
    
    click++
    console.log(click)
    if (click==9 && wonTheGame==0){
        console.log('hi')
        gameResult.style.visibility="visible";
        message.innerHTML="Its a Tie"
    }


}


function result(winc,attempts,playerName){
    let tracker=[]
    let flag=0
    for (let i = 0; i < winc.length; i++) {
        if(Array.isArray(winc[i])){
            result(winc[i],attempts,playerName)
        }else{
            if(attempts.includes(winc[i])){
                tracker.push(true)
                flag++
            }else{
                tracker.push(false)
            }


        }
        
}if(tracker.every(check=>check==true) && flag>2){
    gameResult.style.visibility="visible";
    message.innerHTML="'"+playerName+"'"+"Won the Game!";
    wonTheGame=1;
}
}

var play_again=document.getElementById("button")
play_again.onclick=function(){playagain()}

function playagain(){
    window.location.reload();
}





