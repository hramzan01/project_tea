var myImage = document.getElementById('startImg');
var imageArray = [1, 2, 3, 4];
var imageIndex = 0;
var button = document.querySelector('#button');

function changeImage() {
	myImage.classList.remove('opaque');
	imageIndex = (imageIndex + 1) % imageArray.length;
}

document.addEventListener('DOMContentLoaded', function () {
	button.addEventListener('click', function () {
		console.log(imageIndex);
		changeImage();
	});
});
