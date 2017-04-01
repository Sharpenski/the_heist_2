/* Constructor to construct a door between 2 rooms */
function Door(from, to, direction) {
	console.log("Created a new doorway between", from.name, "and", to.name, "!");
	this.from = from;
	this.to = to;
	this.locked = true; /* doors can be unlocked and locked */

	switch(direction) {
		case "north":
			from.doors.north = this;
			to.doors.south = this;
			break;
		case "east":
			from.doors.east = this;
			to.doors.west = this;
			break;
		case "south":
			from.doors.south = this;
			to.doors.north = this;
			break;
		case "west":
			from.doors.west = this;
			to.doors.east = this;
			break;
		default:
			console.log("Invalid direction.");
	}

	/* function determining the room the player should move to based on where they are
	 * moving from.
	 */
	this.pass = function(currentRoom) {
		if(currentRoom == this.from) {
			return this.to;
		}
		return this.from;
	}

	this.unlock = function() {
		console.log("You unlocked the door from", this.from, "to", this.to, "!");
		this.locked = false; /* doors can be unlocked and locked */
	}

	this.lock = function() {
		console.log("You locked the door from", this.from, "to", this.to, "!");
		this.locked = true; /* doors can be unlocked and locked */
	}
}