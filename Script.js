const Rollbutton = document.querySelectorAll("button")[0]
const MyAudio = document.getElementById("audio")

Rollbutton.onclick = function(){
    roll()
    Play()
}

function roll(){

    const firstRandomNumber = Math.floor(Math.random() * 6 + 1)
    const secondRandomNumber = Math.floor(Math.random() * 6 + 1)

    document.querySelectorAll("h1")[0].innerHTML = firstRandomNumber.toString()
    document.querySelectorAll("h1")[1].innerHTML = secondRandomNumber.toString()
    document.querySelectorAll("h1")[2].innerHTML = firstRandomNumber + secondRandomNumber

}

function Play(){
    
    MyAudio.play()
}
