var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    var x = document.getElementById("clicks");
    x.style.fontSize = "50px";
    };
