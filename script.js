
function loveCalculate(){

var name1 = document.getElementById("NameOne").value;
var name2 = document.getElementById("NameTwo").value;

if(name1.length <= 2 ){
    alert("Enter at least 3 charater");
}

if(name2.length <= 2 ){
    alert("Enter at least 3 charater");
}

else {
    var Randome  = Math.floor(Math.random()*100);
    document.getElementById("print").innerHTML = name1 + " and " + name2 + " = " + Randome + "%" + "of love❤️"; 
}

if(Randome <= 10 || Randome <= 50){
    document.getElementById("statement").innerHTML = "Poor Relationship 🥲🥲";
}

else if(Randome <= 51 || Randome <= 100){
    document.getElementById("statement").innerHTML = "Made for each other🥰🥰";
}

var audio = document.getElementById("backgroundAudio");
audio.volume = 0.1;
audio.play();
}