
// Steps 1 and 10 through 12 of assigment 4

(function() {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", 
	"Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var i = 0; i<names.length; i++) {
		var firstLetter = names[i].charAt(0);
		firstLetter = firstLetter.toLowerCase();

		if (firstLetter == 'j') {
			byeSpeaker.sayGoodbye(names[i]);
		} else {
			helloSpeaker.sayHello(names[i]);
		}
	};
})();