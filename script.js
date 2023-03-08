// home script
document.addEventListener('mousemove', parallax);
function parallax(event) {
	this.querySelectorAll('.parallax-wrap span').forEach((shift) => {
		const position = shift.getAttribute('value');
		const x = (window.innerWidth - event.pageX * position) / 90;
		const y = (window.innerHeight - event.pageY * position) / 90;

		shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
}

// app script
var startImage = document.getElementById('startImg');
var nextImage = document.getElementById('nextImg');
var bothImages = document.querySelectorAll('img');
var myStep = document.getElementById('title');
var myProcess = document.getElementById('process');
var imageArray = [
	'img/teaCup.svg',
	'img/teaBag.svg',
	'img/teaBlack.svg',
	'img/teaMilk.svg',
	'img/teaMix.svg',
];
var processArray = [
	'put in the teabag',
	'pour hot water',
	'add milk',
	'mix it up',
	'get cup',
];
var stepArray = ['Step 02', 'Step 03', 'Step 04', 'Step 05', 'Step 01'];
var arrayIndex = 0;

function toggleFade() {
	bothImages.forEach((img) => {
		img.classList.toggle('opaque');
	});
}

function changeImage() {
	arrayIndex = (arrayIndex + 1) % imageArray.length;
	bothImages.forEach((img) => {
		if (img.classList.contains('opaque')) {
			img.setAttribute('src', imageArray[arrayIndex]);
		}
	});
}

function changeProcess() {
	myProcess.innerHTML = processArray[arrayIndex];
}

function changeStep() {
	myStep.innerHTML = stepArray[arrayIndex];
}

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#button');
	button.addEventListener('click', function () {
		toggleFade();
		changeProcess();
		changeStep();
		changeImage();
	});
});

// Change page
function renderHome() {
	window.location = '/home.html';
}

function renderApp() {
	window.location = '/app.html';
}

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#home');
	button.addEventListener('click', function () {
		renderHome();
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var button = document.querySelector('#startButton');
	button.addEventListener('click', function () {
		renderApp();
	});
});
