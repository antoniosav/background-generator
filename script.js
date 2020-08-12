var body = document.getElementsByTagName("body")[0];
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.getElementsByTagName("h3")[0];

function changeLeftColor(event) {
	var newLeftColor = event.target.value;
	body.style.background = "linear-gradient(to right, " + newLeftColor + "," + color2.value + ")";
	h3.textContent = "background: linear-gradient(to right, " + newLeftColor + ", " + color2.value + ");";
}

function changeRightColor(event) {
	var newRightColor = event.target.value;
	body.style.background = "linear-gradient(to right, " + color1.value + "," + newRightColor + ")";
	h3.textContent = "background: linear-gradient(to right, " + color1.value + ", " + newRightColor + ");";
}

body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
h3.textContent = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ");";

color1.addEventListener("input", changeLeftColor);
color2.addEventListener("input", changeRightColor);