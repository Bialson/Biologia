function show(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "flex";
    document.getElementById("bgvid").style.display = "flex";
}

function startGame(){
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "flex";
}

let countAnswer = -1;

function selectAnswer(){
    const answer = document.querySelectorAll(".quest");
    for(let i = 0; i < answer.length; i++){
        answer[i].addEventListener("click", function(){
            this.classList.add("selected");
        });
    }
    countAnswer += 1;
    console.log(countAnswer);
    if(countAnswer == 4){
        checkAnswer();
    }
}

function checkAnswer(){
    var option = document.getElementsByClassName("selected");
    for(let i = 0; i < option.length; i++){
        if(option[i].innerHTML == "Lorem ipsum dolor sit amet."){
            option[i].classList.add("true");
        }
        else{
            option[i].classList.add("false");
        }
    }
}

var counter = 0;

function changeProgress(){
    counter++;
    setTimeout(function(){document.getElementById("progress").innerHTML += ".";}, 500);
    setTimeout(function(){document.getElementById("progress").innerHTML += ".";}, 800);
    setTimeout(function(){document.getElementById("progress").innerHTML += ".";}, 1000);
    switch (counter) {
        case 1:
            document.getElementById("progress").innerHTML = "Loading resources";
            break;
        case 2:
            document.getElementById("progress").innerHTML = "Loading images";
            break;
        case 3:
            document.getElementById("progress").innerHTML = "Patching";
            break;
        case 4:
            show();
            break;
        default:
            break;
    }
}

window.setInterval(changeProgress, 2000);