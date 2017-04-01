var room_1 = new Room("Main Hall");
var room_2 = new Room("Safe");
var room_3 = new Room("Outside Safe");
var room_4 = new Room("Rooftop");
var room_5 = new Room("Entrance");

var player = new Player("Toby", "Dobbs", "Bury St Edmunds", 21, "m", room_1);
console.log(player);

/*

*/
var door_1 = new Door(room_1, room_2, "north");
var door_2 = new Door(room_2, room_3, "east");
var door_3 = new Door(room_3, room_4, "east");
var door_4 = new Door(room_4, room_5, "south");
var door_5 = new Door(room_5, room_1, "west");
door_1.unlock();
console.log(door_1);

var item_1 = new Item("Knife", "A dangerous utensil used to slice, cut or puncture things.", room_1);
var item_2 = new Item("Pineapple", "A tropical, spikey fruit " + 
	" with a green cactus-like branch emanating from the top. Delicious mate!", room_2);
//console.log(item_1, item_2);

//player.pickUpItem(item_2);
//player.pickUpItem("aa");

arrayLookUp(player.inventory, item_1);
console.log(room_1);