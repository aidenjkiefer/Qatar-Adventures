var inventory = []; //this is the currently empty inventory
//these are arrays for item drops
var items = ["Sword", "Shield", "Bow", "Laser Gun"]; //list of potential rewards from purchasing random shop weapon
var tutorialRewards = ["Wooden Spoon", "Leather Hat", "Moon Boots", "Starter's Spells", "Nice Sword", "Rocks", "Ghost Shirt"]; //finishing the tutorial
var normal = ["Qatar's Helm", "Big Fat Sword", "Striker's Shiv"]; //normal items from chests
var uncommon = ["Hunter's Longbow", "Twisted Blade", "Spell Book: Fire", "Big Man's Boots"];
var rare = ["Cloak of Disguise", "Warriors' Axe", "Leper's Knife", "Sawed-Off Shotgun", "Sheriff's Duty"];
var exotic = ["Qatar's Grieves", "Queen's Bow", "Qin's Blade", "Gingerbread Boy's Cane", "Soldier's Pipe"];

var chests = ["Normal Chest", "Normal Chest", "Normal Chest", "Normal Chest", "Uncommon Chest", "Uncommon Chest", "Uncommon Chest", "Rare Chest", "Rare Chest", "Exotic Chest"]; //rng list for purchasing random chests


//these are values for certain items !not in use yet!
var sword = {attack:50, defense:25, rarity:"Common"};
var shield = {attack:10, defense:100, rarity:"Common"};
var bow = {attack:75, defense:10, rarity:"Uncommon"};
var laser = {attack:100, defense:0, rarity:"Rare"};
var gold = 250;
function randomWeapon() {
var item = items[Math.floor(Math.random()*items.length)]; 
var cost = 100;
inventory.push(item); 
document.getElementById("demo").innerHTML = inventory; };
document.getElementById("gold").innerHTML = gold;
function finishLevel() {
var tutorialReward = tutorialRewards[Math.floor(Math.random()*tutorialRewards.length)];
inventory.push(tutorialReward);
alert(inventory);
}
//chest opener drag and drop 
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}
function allowDrop(ev) {
	event.preventDefault();
};
function drop(ev) {
	ev.preventDefault();
	var data =
ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
	randomNormalItem = normal[Math.floor(Math.random()*normal.length)];
	inventory.push(randomNormalItem);
	alert(inventory);
	
}
function openChest() {
	var randomChest = chests[Math.floor(Math.random()*chests.length)];
	display: block;
	inventory.push(randomChest);
	if (inventory = ["Normal Chest"]) {
		randomNormalItem = normal[Math.floor(Math.random()*normal.length)];
		inventory.push(randomNormalItem);
	}
	alert(inventory);
}
