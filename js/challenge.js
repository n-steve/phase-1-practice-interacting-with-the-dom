
document.addEventListener("DOMContentLoaded",()=>{

    const newForm = document.querySelector("form")
    newForm.addEventListener("submit",(event)=>{
        event.preventDefault()
        commentBox(event)
    })

const stores = [];
const stores2 = [];
const likes = document.querySelector(".likes")
const comment = document.getElementById("submit")
const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const id = document.getElementById("list");
let clock = null
let seconds = 0


function go(){
    clock = setInterval(() => {
        counter.innerHTML = ++seconds;},1000);
}

function handlePlus(){
counter.innerHTML = ++seconds 
}

function handleMinus(){
counter.innerHTML = --seconds
}

function handleHeart(){
    let found = -1
for (let i = 0;i<stores.length; i++){
    if (stores[i] === seconds){
   found = i
   stores2[i] = +stores2[i]+1
   break
    }
} 
if (found === -1){
    stores.push(seconds)  
    stores2.push("1")
    found = stores2.length-1

const list = document.createElement("li")
list.innerHTML = `The Number ${seconds} has been liked`
likes.appendChild(list)
}
else {const selectAll = document.querySelectorAll('li')
selectAll[found].innerHTML = `The Number ${seconds} has been liked ${stores2[found]} times!`
}
}


function handlePause(){
    if(pause.innerText==="Resume"){
        handleResume()
    } else { pause.innerText = "Resume",
clearInterval(clock)
plus.disabled=true
minus.disabled=true
heart.disabled=true
newForm.disabled=true
comment.disabled=true
}
}

function handleResume(){
    pause.innerText = "Pause"
pause.disabled=false
plus.disabled=false
minus.disabled=false
heart.disabled=false
newForm.disabled=false
comment.disabled=false
go()
}


function commentBox(element){
    const p = document.createElement("p")
    p.textContent = `${element.target.comment.value}`
    id.appendChild(p)
}



plus.addEventListener("click",handlePlus);
minus.addEventListener("click",handleMinus);
heart.addEventListener("click",handleHeart);
pause.addEventListener("click",handlePause);

 



go();

})

