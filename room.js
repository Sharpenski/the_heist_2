/* Constructor to instantiate a new room */
function Room(name) {
	this.name = name;
	this.locked = true; /* doors can be unlocked and locked */
	this.items = []; /* items in room */
	this.doors = {north:null, east:null, south:null, west:null}; /* doors to other rooms */

	/* drop an item in the room */
	this.dropItem = function(item) {
		this.items.push(item);
	}

	/* pick up an item from the room */
	this.pickUpItem = function(item) {
		/* remove item from the array */
		if (arrayLookUp(item, self.items)) {
			
		}

	}
}