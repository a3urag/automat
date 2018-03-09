ehnum=6;
colors=colorsdisplay(ehnum);
sqcolor=document.querySelectorAll(".square");
goal=pickgoal();
rgb=document.querySelector("#rgb");
rgb.textContent=goal;
message=document.querySelector("#message");
button=document.querySelector("#reset");
h1=document.querySelector("h1");
easy=document.querySelector("#easybtn")
hard=document.querySelector("#hardbtn")

easy.addEventListener("click",function(){
	easy.classList.toggle("selected");
	hard.classList.toggle("selected");
	ehnum=3;
	colors=colorsdisplay(ehnum);
	goal=pickgoal();
	rgb.textContent=goal;
	for(i=0;i<sqcolor.length;i+=1){
		if(colors[i]){
			sqcolor[i].style.backgroundColor=colors[i];
		}
		else{
			sqcolor[i].style.display="none";
		}
	}
})
hard.addEventListener("click",function(){
	hard.classList.toggle("selected");
	easy.classList.toggle("selected");
	ehnum=6;
	colors=colorsdisplay(ehnum);
	goal=pickgoal();
	rgb.textContent=goal;
	for(i=0; i<colors.length; i+=1){
		sqcolor[i].style.backgroundColor=colors[i];
		sqcolor[i].style.display="block";
  	}
})
button.addEventListener("click",function(){
	//note that colors should be written first because goal will pick color from it.unless if you define it later after "goal" then goal will pick color from last used colors array.....

	colors=colorsdisplay(ehnum);
	goal=pickgoal();
	rgb.textContent=goal;
	button.textContent="new colors!"
	for(i=0; i<colors.length; i+=1){
		sqcolor[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelBLue"
	message.textContent="";
})


for(i=0; i<colors.length; i+=1){

	sqcolor[i].style.backgroundColor=colors[i];
	sqcolor[i].addEventListener("click",function(){
		clickedcolor=this.style.backgroundColor;
		if(clickedcolor===goal){
			message.textContent=true;
			changecolors(clickedcolor);
			button.textContent="play again"
			h1.style.backgroundColor=goal;
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="try again";
		}

	});
}

function changecolors(c){
	for(i=0;i<colors.length;i+=1){
		sqcolor[i].style.backgroundColor=c;
	}
}

function pickgoal(){
	random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function colorsdisplay(num){
	var colorsd=[]
	for(i=0;i<num;i+=1){
		colorsd.push(generatergb())
	}
	return colorsd;
}
function generatergb(){
	r=Math.floor(Math.random() * 256);
	g=Math.floor(Math.random() * 256);
	b=Math.floor(Math.random() * 256);

	return "rgb("+ r +", "+ g +", "+ b +")";
}
