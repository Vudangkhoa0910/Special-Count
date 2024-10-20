var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
	// 21:36 2/8/2024 - Known each other
	var start = new Date(2024, 7, 2, 21, 36);
	var t = new Date() - start;
	var d = Math.floor(t / 1000 / 60 / 60 / 24);
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	if(h < 10){
		h = "0" + h;
	}
	var m = Math.floor(t / 1000 / 60 % 60);
	if(m < 10){
		m = "0" + m;
	}
	var s = Math.floor(t / 1000 % 60);
	if(s < 10){
		s = "0" + s;
	}
	document.getElementById("d").innerHTML = d;
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;

	// Love duration countdown from 19:00 15/09/2024
	var loveStart = new Date("2024-09-15T19:00:00"); // Thời gian bắt đầu yêu
	var loveDiff = new Date() - loveStart;
	var loveD = Math.floor(loveDiff / 1000 / 60 / 60 / 24);
	var loveH = Math.floor(loveDiff / 1000 / 60 / 60 % 24);
	if(loveH < 10) {
		loveH = "0" + loveH;
	}
	var loveM = Math.floor(loveDiff / 1000 / 60 % 60);
	if(loveM < 10) {
		loveM = "0" + loveM;
	}
	var loveS = Math.floor(loveDiff / 1000 % 60);
	if(loveS < 10) {
		loveS = "0" + loveS;
	}
	document.getElementById("loveD").innerHTML = loveD;
	document.getElementById("loveH").innerHTML = loveH;
	document.getElementById("loveM").innerHTML = loveM;
	document.getElementById("loveS").innerHTML = loveS;
}

function fadein() {
	if (val < 1) {
		val += 0.025;
		dv.style.opacity = val;
	} else {
		clearInterval(fadeinInterval);
		if (ok == 2) {
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

// Call timer functions every second
timer();
setInterval(timer, 1000);

fadeInterval = setInterval(function() {
	if (ok == 2) {
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50);
