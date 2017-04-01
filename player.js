/* Constructor to instantiate new player */
function Player(first_name, last_name, place_of_origin, age, gender, currentRoom) {
	this.first_name = first_name;
	this.last_name = last_name;
	this.place_of_origin = place_of_origin;
	this.age = age;
	this.gender = gender;
	this.inventory = []; // initially the player does not possess any items
	this.currentRoom = currentRoom; // store the position of the player

	/* function to pick up an item and add it to the inventory */
	this.pickUpItem = function(item) {
		console.log(this.first_name, "added the", item.name, "to their inventory.");
		this.inventory.push(item);
	};

	/* function to drop an item and remove it from the inventory */
	this.dropItem = function(item) {
		console.log(this.first_name, "removed the", item.name, "from their inventory.");
		delete_this(this.inventory, item);
	};

	/* function to move rom one room to another */
	this.move = function(direction) {
		try {
			var door = null;
			
			switch(direction) {
				case "north":
					door = this.currentRoom.doors.north;
					break;
				case "east":
					console.log("aaa");
					door = this.currentRoom.doors.east;
					break;
				case "south":
					door = this.currentRoom.doors.south;
					break;
				case "west":
					door = this.currentRoom.doors.west;
					break;
				default:
					throw "You cannot move that way matey-boy!";
			}

			if(door != null && typeof door !== undefined) {
				if(door.locked == false) {
					this.currentRoom = door.pass(this.currentRoom);
				} else {
					console.log("The door is locked.");
				}
			} else {
				console.log("There is not a door to the", direction);
			}
			console.log("You are now in the", this.currentRoom.name, ".");
		} catch(err) {
			console.log("Error:", err)
		}
	}

	/* look around the room */
	this.look = function() {
		var no_items = this.currentRoom.items.length;
		console.log("Inside the", this.currentRoom.name, "there is...");
		console.log(this.currentRoom.items);
	}
}