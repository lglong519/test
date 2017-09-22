


var intro = document.getElementById('intro');
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	w = canvas.width =parseInt(getComputedStyle(intro).width),
	h = canvas.height =parseInt(getComputedStyle(intro).height),
	hue = 217,
	stars = [],
	count = 0,
	maxStars = 1200;
	//var w = canvas.width = window.innerWidth,h = canvas.height = window.innerHeight;
 /*
var canvas2 = document.createElement('canvas'),
	ctx2 = canvas2.getContext('2d');
	canvas2.width = 100;
	canvas2.height = 100;
var half = canvas2.width / 2,
	gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
	gradient2.addColorStop(0.025, '#fff');
	gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
	gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
	gradient2.addColorStop(1, 'transparent');
	ctx2.fillStyle = gradient2;
	ctx2.beginPath();
	ctx2.arc(half, half, half, 0, Math.PI * 2);
	ctx2.fill();
// End cache
function random(min, max) {
	if (arguments.length < 2) {
		max = min;
		min = 0;
	}
	if (min > max) {
		var hold = max;
		max = min;
		min = hold;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
	var max = Math.max(x, y),
		diameter = Math.round(Math.sqrt(max * max + max * max));
	return diameter / 2;
}
var Star = function() {
	this.orbitRadius = random(maxOrbit(w, h));
	this.radius = random(60, this.orbitRadius) / 12;
	this.orbitX = w / 2;
	this.orbitY = h / 2;
	this.timePassed = random(0, maxStars);
	this.speed = random(this.orbitRadius) / 900000;
	this.alpha = random(2, 10) / 10;
	count++;
	stars[count] = this;
}
Star.prototype.draw = function() {
	var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
		y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
		twinkle = random(10);
	if (twinkle === 1 && this.alpha > 0) {
		this.alpha -= 0.05;
	} else if (twinkle === 2 && this.alpha < 1) {
		this.alpha += 0.05;
	}
	ctx.globalAlpha = this.alpha;
	ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
	this.timePassed += this.speed;
}
for (var i = 0; i < maxStars; i++) {
	new Star();
}

function animation() {
	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 0.8;
	ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
	ctx.fillRect(0, 0, w, h);
	ctx.globalCompositeOperation = 'lighter';
	for (var i = 1, l = stars.length; i < l; i++) {
		stars[i].draw();
	};
	window.requestAnimationFrame(animation);
}

animation();
*/
//---------------------------------------------------------------------------



//canvas.style.backgroundColor="HSLA(217,40%,10%,0.8)";
ctx.lineWidth = .3;
//创建连接线
ctx.strokeStyle = (new Color(30)).style;

var mousePosition = {
	x: 30 * canvas.width / 100,
	y: 30 * canvas.height / 100
};

var dots = {
	nb: parseInt(w*h/2500),
	distance: 50,
	d_radius: 100,
	array: []
};

function colorValue(min) {
	return Math.floor(Math.random() *26 + min);
}

function createColorStyle(r,g,b) {
	return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
}

function mixComponents(comp1, weight1, comp2, weight2) {
	return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
}

function averageColorStyles(dot1, dot2) {
	var color1 = dot1.color,color2 = dot2.color;

	var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
			g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
			b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
	return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
}

function Color(min) {
	this.min = min || 0;
	this.r =parseInt(Math.random()*56+200);
	//this.g = colorValue(min);
	//this.b =colorValue(min);
	this.g =parseInt(Math.random()*26+230);
	this.b =parseInt(Math.random()*26+230);
	this.style = createColorStyle(this.r, this.g, this.b);
}
//创建点
function Dot(){
	this.x = Math.random() * canvas.width;
	this.y = Math.random() * canvas.height;

	this.vx = -.5 + Math.random();
	this.vy = -.5 + Math.random();

	this.radius = Math.random() * 2;

	this.color = new Color(230);
}

Dot.prototype = {
	draw: function(){
		ctx.beginPath();
		ctx.shadowColor=this.color.style;
		ctx.shadowBlur=15;
		ctx.fillStyle = this.color.style;
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fill();
	}
};

function createDots(){
	for(i = 0; i < dots.nb; i++){
		dots.array.push(new Dot());
	}
}

function moveDots() {
	for(i = 0; i < dots.nb; i++){

		var dot = dots.array[i];

		if(dot.y < 0 || dot.y > canvas.height){
			dot.vx = dot.vx;
			dot.vy = - dot.vy;
		}
		else if(dot.x < 0 || dot.x > canvas.width){
			dot.vx = - dot.vx;
			dot.vy = dot.vy;
		}
		dot.x += dot.vx/parseInt(Math.random()*1+1);
		dot.y += dot.vy/parseInt(Math.random()*1+1);
	}
}

function connectDots() {
	for(i = 0; i < dots.nb; i++){
		for(j = 0; j < dots.nb; j++){
			i_dot = dots.array[i];
			j_dot = dots.array[j];

			if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
				if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
					ctx.beginPath();
					ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
					ctx.moveTo(i_dot.x, i_dot.y);
					ctx.lineTo(j_dot.x, j_dot.y);
					ctx.stroke();
					ctx.closePath();
				}
			}
		}
	}
}

function drawDots() {
	for(i = 0; i < dots.nb; i++){
		var dot = dots.array[i];
		dot.draw();
	}
}

function animateDots() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	moveDots();
	connectDots();
	drawDots();

	requestAnimationFrame(animateDots);
}

intro.onmousemove=function(e){
	mousePosition.x = e.pageX;
	mousePosition.y = e.pageY;
}

intro.onmouseout=function(){
	mousePosition.x = canvas.width / 2;
	mousePosition.y = canvas.height / 2;
}

createDots();
requestAnimationFrame(animateDots);

var deg=0,timer=null;
var bg_music=document.getElementById("bg_music");
var myMusic=document.getElementById("myMusic");
function rotate(){
	deg+=3;
	bg_music.style.transform="rotate("+(++deg)+"deg)";
	timer=setTimeout(function(){
		rotate();
	},10);
}
//rotate();

var onOff=true;
bg_music.onclick=function(){
	if (onOff){
		myMusic.pause();
		clearTimeout(timer);
		timer=null;
		onOff=false;
	}else{
		myMusic.play();
		onOff=true;
		rotate();
	}
}
