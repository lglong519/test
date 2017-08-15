var link=document.createElement("link");
link.rel="stylesheet";
link.href="https://lglong519.github.io/test/styles/more%20Fun.css";
document.getElementsByTagName("head")[0].appendChild(link);
window.onload=function(){
	var stage=document.createElement("div");
	stage.id="stage";
	stage.innerHTML="<div class='parent'></div>";
	document.body.appendChild(stage);
	divs=document.getElementsByTagName("div");
	for(var i=0,div;i<divs.length;i++){
		if(divs[i].className.indexOf("parent")!=-1){
			for(var n=0;n<6;n++){
				div=document.createElement("div");
				for(var m=0;m<9;div.appendChild(document.createElement("span")),m++);
				divs[i].appendChild(div);
			}
		}
	}
	var angle=0, xyz=0,pom=1;
	var arr=[[1,1,1],[1,1,1],[0,1,1],[1,0,1],[1,1,0]];
	var timer;
	function trans(){
		timer=setTimeout(function(){
			if(!(angle%360)){
				xyz=parseInt(Math.random()*5);
				if(!parseInt(Math.random()*2)){
					//pom=-1;
				}
			}
			stage.children[0].style.transform="rotate3D("+arr[xyz][0]+","+arr[xyz][1]+","+arr[xyz][2]+","+angle++*pom+"deg)";
			trans();
		}, 20);
	}
	trans();
	stage.onmouseover=function(){
		clearTimeout(timer);
		timer=null;	
	}
	stage.onmouseout=function(){
		trans();	
	}
}