// We're just really bruteforcing it here
let intId = setInterval(() => {
	try {
		let audio = document.getElementById("succysuccy");
		if(audio.duration == 0 || audio.paused) {
			audio.play();
		} else clearInterval(intId);
	} catch (e) {}
}, 100);


