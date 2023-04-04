/* JAVASCRIPT FILE */

var b_Debug  = true;

/*===================================================================================
    3
===================================================================================*/

var canvas = document.getElementById("canvas0");
var ctx = canvas.getContext('2d');

w = ctx.canvas.width = window.innerWidth;
h = ctx.canvas.height = window.innerHeight;

window.onresize = function(){
	
w = ctx.canvas.width = window.innerWidth;
h = ctx.canvas.height = window.innerHeight;
}

var spawnpoint = {x:w/2, y:h/2}

function init(){
	
	console.log("Initialized");
}

var frame = 0;
function draw(){
		console.log("Initialized");

	frame++
	
	ctx.font = "12px System"
	ctx.fillStyle = "rgba(200,255,225,1)";
	ctx.fillText("FRAME:" + frame, spawnpoint.x, spawnpoint.y )
	
	requestAnimationFrame(draw)
	
}

init();
draw();