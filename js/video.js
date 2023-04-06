// Page Load
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
  video = document.querySelector("#player1")

});

// Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

// Slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower Video");
	video.playbackRate *= .9;
	console.log(video.playbackRate);
});


// Speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster Video");
	video.playbackRate /= .9;
	console.log(video.playbackRate);
});


//Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	console.log(video.currentTime);
	
	if((video.currentTime + 10) < video.duration){
		video.currentTime +=10;
	}
	else(
		video.currentTime = 0
	);
	console.log(video.currentTime)
	
});


// Mute
document.querySelector("#mute").addEventListener("click", function() {
	
	if(video.muted == true){
		console.log("Unmuted");
		video.muted = false
		this.innerHTML = "Mute"}
	else{
		console.log("Mute");
		video.muted = true
		this.innerHTML = "Unmute"}
	
});



// Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Video Slider");
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
});


//Styled
document.querySelector("#vintage").addEventListener("click", function() {
  console.log("I am in vintage");
video.classList.add("oldSchool")

});

//Original
document.querySelector("#orig").addEventListener("click", function() {
  console.log("I am in original");
  video.classList.remove("oldSchool")
});




