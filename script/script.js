function show(){
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "flex";
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