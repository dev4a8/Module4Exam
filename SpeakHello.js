
// Steps 2 through 5 of assignment 4

var speakWord = "Hello";

(function (window) {
	var helloSpeaker = {};
	helloSpeaker.greeting = speakWord;
	helloSpeaker.sayHello = function(name) {
		console.log(helloSpeaker.greeting+" "+name);

	};
	window.helloSpeaker = helloSpeaker;

} ) (window);
