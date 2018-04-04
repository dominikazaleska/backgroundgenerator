(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
