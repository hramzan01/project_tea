var myImage = document.getElementById('1');
var imageArray = [1,2,3,4];
var imageIndex = 0
var button = document.querySelector('#button');

function changeImage() {
    myImage.classList.remove ('opaque');
    imageIndex = (imageIndex + 1) % imageArray.length;
}

document.addEventListener('DOMContentLoaded', function () {
		button.addEventListener('click', function () {
        console.log(imageIndex);
		changeImage();
	});
});






// convert the below jquery to vanilla javascript!!

// $(document).ready(function() {
//   $("#images_controls").on('click', 'span', function() {
//     $("#images img").removeClass("opaque");

//     var newImage = $(this).index();

//     $("#images img").eq(newImage).addClass("opaque");

//     $("#images_controls span").removeClass("selected");
//     $(this).addClass("selected");
//   });
// });