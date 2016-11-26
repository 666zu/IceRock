function mouseOver(which){
	var source=which.getAttribute("id");
	var div=document.getElementById(source);
	div.style.backgroundImage="url(../images/hover.png)";
	
}
function mouseOut(which){
	var source=which.getAttribute("id");
	var div=document.getElementById(source);
	div.style.backgroundImage="none";
}

function remove1() {
	var get=document.getElementById("name1");
	get.style.backgroundImage="none";
  	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/team.jpg)";
}
function recover1() {
	var get=document.getElementById("name1");
	get.style.backgroundImage="url(../images/words.png)";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/bg.jpg)";
}
function remove2() {
	var get=document.getElementById("name2");
	get.style.backgroundImage="none";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/group.jpg)";
}
function recover2() {
	var get=document.getElementById("name2");
	get.style.backgroundImage="url(../images/words.png)";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/bg.jpg)";
}
function remove3() {
	var get=document.getElementById("name3");
	get.style.backgroundImage="none";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/pro_dim.jpg)";

}
function recover3() {
	var get=document.getElementById("name3");
	get.style.backgroundImage="url(../images/words.png)";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/bg.jpg)";
}
function remove4() {
	var get=document.getElementById("name4");
	get.style.backgroundImage="none";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/partner.jpg)";


}
function recover4() {
	var get=document.getElementById("name4");
	get.style.backgroundImage="url(../images/words.png)";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/bg.jpg)";
}
function remove5() {
	var get=document.getElementById("name5");
	get.style.backgroundImage="none";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/recruit.jpg)";
}
function recover5() {
	var get=document.getElementById("name5");
	get.style.backgroundImage="url(../images/words.png)";
	var bg=document.getElementById("bg0");
	bg.style.backgroundImage="url(../images/bg.jpg)";
}
