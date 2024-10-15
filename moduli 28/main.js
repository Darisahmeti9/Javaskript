var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")
var button4 = document.getElementById("btn4")
var ds_text = document.getElementById("txt1")

button1.onclick = function(){
    ds_text.style.color="blue";
    ds_text.style.textAlign = "center";
    ds_text.style.fontSize = "50px";

}





button2.onclick= function(){
    alert("You hovered on button2!")
}
button3.onclick= function(){
    alert("You hovered on button3!")
}
button4.onclick= function(){
    ds_text.style.cssText = "color: red; text-align: right; font-size: 100px; background-color: lightblue;"
}