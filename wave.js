

var canvas = document.querySelector(".wavecanvas"),
    context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 500;
  
    
// tick
function drawWave(delta) {
    requestAnimationFrame(drawWave);
    canvas.width = canvas.width;
    
    var randomLeft = Math.abs(Math.pow( Math.sin(delta/1000), 2 )) * 100,
        randomRight = Math.abs(Math.pow( Math.sin((delta/1000) + 10), 2 )) * 100,
        randomLeftConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+2), 2 )) * 100,
        randomRightConstraint = Math.abs(Math.pow( Math.sin((delta/1000)+1), 2)) * 100;
    
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
    context.moveTo(0, randomLeft+20);
    context.bezierCurveTo(canvas.width / 3, randomLeftConstraint+20, canvas.width / 3 * 2, randomRightConstraint+20, canvas.width, randomRight+20);
    context.lineTo(canvas.width , canvas.height+20);
    context.lineTo(0, canvas.height+20);
    context.lineTo(0, randomLeft+20);
    context.closePath();
    context.fill();

}


requestAnimationFrame(drawWave);