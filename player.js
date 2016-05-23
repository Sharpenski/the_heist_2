/* Constructor to instantiate new player */
function Player(first_name, last_name, place_of_origin, age, gender) {
	this.first_name = first_name;
	this.last_name = last_name;
	this.place_of_origin = place_of_origin;
	this.age = age;
	this.gender = gender;
	this.inventory = []; // initially the player does not possess any items

	/* function to pick up an item and add it to the inventory */
	this.pickUpItem = function(item) {
		try {
			if(typeof item !== "object") {
				throw "invalid type";
			}
			this.inventory.push(item);
			console.log(this.first_name, "added the", item, "to their inventory.");
		} catch(err) {
			console.log("Error:", err);
		}
	};

	/* function to drop an item and remove it from the inventory */
	this.dropItem = function(item) {
		var r = this.inventory.find_index(item);
		delete this.inventory[r];
		console.log(this.first_name, "removed the", item, "from their inventory.");
	};

	/* function to move rom one room to another */
	this.move = function(from, to) {

	}
}