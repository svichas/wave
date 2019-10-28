

var canvas = document.querySelector(".wavecanvas"),
    context = canvas.getContext("2d"),
    sinDelta = 0,
    waveLine = 20,
    waveTextLeft = window.innerWidth;

canvas.width = window.innerWidth;
canvas.height = 500;

var waveTextElements = document.querySelectorAll(".wavecanvas_txt");

for (var i=0;i<waveTextElements.length;i++) {
    waveTextElements[i].style.left = waveTextLeft;
    waveTextLeft+=350;
}

// tick
function waveDraw() {
    canvas.width = canvas.width;
    
    var randomLeft              = Math.abs(Math.pow(Math.sin(sinDelta/1000), 2)) * 100,
        randomRight             = Math.abs(Math.pow(Math.sin((sinDelta/1000) + 10), 2)) * 100,
        randomLeftConstraint    = Math.abs(Math.pow(Math.sin((sinDelta/1000)+2), 2)) * 100,
        randomRightConstraint   = Math.abs(Math.pow(Math.sin((sinDelta/1000)+1), 2)) * 100;
    
    context.fillStyle = "#005bab";
    context.beginPath();
    context.moveTo(0, randomLeft);
    context.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 3 * 2, randomRightConstraint, canvas.width, randomRight);
    context.lineTo(canvas.width , canvas.height);
    context.lineTo(0, canvas.height);
    context.lineTo(0, randomLeft);
    context.closePath();
    context.fill();

    context.fillStyle = "#0074D9";
    context.beginPath();
    context.moveTo(0, randomLeft+waveLine);
    context.bezierCurveTo(canvas.width / 3, randomLeftConstraint+waveLine,
                          canvas.width / 3 * 2, randomRightConstraint+waveLine,
                          canvas.width, randomRight+waveLine);
    context.lineTo(canvas.width , canvas.height+waveLine);
    context.lineTo(0, canvas.height+waveLine);
    context.lineTo(0, randomLeft+waveLine);
    context.closePath();
    context.fill();

    for (var i=0;i<waveTextElements.length;i++) {
        var cLeft = parseInt(waveTextElements[i].style.left);
        waveTextElements[i].style.left = cLeft - 1;
        if (cLeft + waveTextElements[i].offsetWidth < 0) {
            waveTextElements[i].style.left = window.innerWidth;
        }

        // calc top
        
        


    }
    
    sinDelta += 5;
}

var tickTimer = setInterval(waveDraw, 1000/60);