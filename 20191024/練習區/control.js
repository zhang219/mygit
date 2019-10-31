function getColor() {
	var newColor = document.getElementById("myColor").value;
	document.documentElement.style.setProperty("--back_color",newColor)
}

