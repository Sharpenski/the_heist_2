var player = new Player("Toby", "Dobbs", "Bury St Edmunds", 21, "m");
console.log(player);

var room_1 = new Room("Main Hall");
var room_2 = new Room("Safe");
var room_3 = new Room("Outside Safe");
var room_4 = new Room("Rooftop");
var room_5 = new Room("Entrance");

var door_1 = new Door(room_1, room_2);
var door_2 = new Door(room_2, room_3);
door_1.unlock();

var item_1 = new Item("Knife", "A dangerous utensil used to slice, cut or puncture things.");
var item_2 = new Item("Pineapple", "A tropical, spikey fruit with a green cactus-like branch emanating from the top. Delicious mate!");
console.log(item_1, item_2);

player.pickUpItem(item_2);
player.pickUpItem("aa");

arrayLookUp(player.inventory, item_1);
