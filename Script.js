const Rollbutton = document.querySelectorAll("button")[0]


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
    var MyAudio = document.getElementById("audio")
    MyAudio.play()
}
