let turn  = "X"
document.getElementsByClassName('turn1')[0].lastElementChild.style.visibility = "visible"




const changeTurn = (element)=>{
    if (!element){
        turn = "X"
        document.getElementsByClassName('turn2')[0].lastElementChild.style.visibility = "hidden"
        document.getElementsByClassName('turn1')[0].lastElementChild.style.visibility = "visible"
    }
    else if (turn === "X"){
        turn = "O"
        document.getElementsByClassName('turn1')[0].lastElementChild.style.visibility = "hidden"
        document.getElementsByClassName('turn2')[0].lastElementChild.style.visibility = "visible"
        element.innerHTML = "X"
        
    }
    else if (turn === "O"){
        turn = "X"
        document.getElementsByClassName('turn2')[0].lastElementChild.style.visibility = "hidden"
        document.getElementsByClassName('turn1')[0].lastElementChild.style.visibility = "visible"
        element.innerHTML = "O"
    }
    
 
}
const box = document.getElementsByClassName("box")

const reset = ()=>{
    Array.from(box).forEach(e=>{
        e.innerHTML = ""
    })
    document.getElementById("winner").innerHTML = ""
    changeTurn()
}

const gameOver = (winner)=>{
    document.getElementById("winner").innerHTML = winner + " is the Winner"
    
}
const checkWin = ()=>{
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((box[e[0]].innerText === box[e[1]].innerText)&&(box[e[1]].innerText === box[e[2]].innerText)&&(box[e[0]].innerText!=="")){
            const winner = box[e[0]].innerText
            gameOver(winner)
        }
    })
}





Array.from(box).forEach(function(element){
    element.addEventListener('click',function(e){
        changeTurn(this)
        checkWin()
    })
})