

// Steps 7 through 9 of assignment

var speakWord = "Good Bye";

(function (window) {
	var byeSpeaker = {};
	byeSpeaker.greeting = speakWord;
	byeSpeaker.sayGoodbye = function(name) {
		console.log(byeSpeaker.greeting+" "+name);

	};
	window.byeSpeaker = byeSpeaker;

} ) (window);
