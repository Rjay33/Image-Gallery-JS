/* Initialize and declare variables */
var displayedImage = document.querySelector('.display-Image');
var thumbBar = document.querySelector('.thumbs');
var figcaption = document.querySelector('figcaption');

/*  Create the <img> elements */
for (var i = 1; i < 6; i ++) {
	var newImage = document.createElement('image');
	newImage.setAttribute('src', 'images/flowers' + i + '.jpg');
	thumbBar.appendChild(newImage);
}
/* Change the src of the main ,<img> */
function displayImage(value) {
	value = value.replace('small', 'large');
	displayedImage.setAttribute('src', value);

}
/*  Click the  handler to capture each target  from the event object */
thumbBar.onclick = function(event) {
	// event.target = element that was clicked
	if (event.target && event.target.nodeName === 'IMG') {
		var imgSrc = event.target.getAttribute('src');
		displayImage(imgSrc);
		figcaption.textContent = event.target.getAttribute('alt');
	}
}
