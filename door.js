/* Constructor to construct a door between 2 rooms */
function Door(from, to) {
	console.log("Created a new doorway between", from.name, "and", to.name, "!");
	this.from = from;
	this.to = to;
	this.locked = true; /* doors can be unlocked and locked */

	this.unlock = function() {
		console.log("You unlocked the door!");
		this.locked = false; /* doors can be unlocked and locked */
	}

	this.lock = function() {
		console.log("You locked the door!");
		this.locked = true; /* doors can be unlocked and locked */
	}
}