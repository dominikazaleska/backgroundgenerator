const h3 = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.querySelector("button");

const setInitial = () => setGradient();

const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	h3.textContent = `${body.style.background};`;
}

const generateRandom = () => {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = `#${randomColor1}`;
	color2.value = `#${randomColor2}`;
	setGradient();
}

window.onload = setInitial;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandom);