/* Create an item to be used in the world! Yay mate! */
function Item(name, description, location) {
	this.name = name;
	this.description = description;
	this.location = location;

	location.items.push(this); /* place the item in the designated room */
}