(function ($) {
	new WOW().init();
	jQuery(window).load(function() {
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});

})(jQuery);


var deg=0,timer=null;
var bg_music=document.getElementById("bg_music");
var myMusic=document.getElementById("myMusic");
function rotate(){
	deg+=2;
	if(onOff!=false){
		bg_music.style.transform="rotate("+(++deg)+"deg)";
	}
	timer=setTimeout(function(){
		rotate();
	},20);
}
//rotate();

var onOff=true;
bg_music.onclick=function(){
	if (onOff){
		clearTimeout(timer);
		timer=null;
		onOff=false;
		myMusic.pause();
	}else{
		myMusic.play();
		onOff=true;
		rotate();
	}
}

	var degree=180;
	setTimeout("turnOn(1)",1600);
	function turnOn(n) {
		if(n==1){
			degree--;
		}else{
			degree++;
		}

		$("#left").css({ 'transform': 'rotatey(' + degree + 'deg)'});
		$("#left").css({ '-ms-transform': 'rotatey(' + degree + 'deg)'});
		$("#left").css({ 'WebkitTransform': 'rotatey(' + degree + 'deg)'});
		$("#left").css({ '-moz-transform': 'rotatey(' + degree + 'deg)'});
		if(degree<90 || window.navigator.userAgent.search("Trident")!=-1){//|| !("transform" in document.documentElement.style)
			$("#left .first").hide();
		}else{
			$("#left .first").show();
		}
		// Animate rotation with a recursive call
		if((n==1&&degree>0)||(n==0&&degree<180)){
			setTimeout(function(){turnOn(n)},20);
		}
		if(n==0&&degree==180){
			return;
		}
		
	}
	$("#left").click(function(){
	if(degree==0){
		turnOn(0);
	}else if(degree==180){
		turnOn(1);
		return false;
	}
});
//图片大小
if($("#left .second").height()!=0){
	$("#left .first").height($("#left .second").height());
}
window.onresize=function(){
	$("#left .first").height($("#left .second").height());
}
