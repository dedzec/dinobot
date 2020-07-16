const robot = require("robotjs");

const dateTime = new Date;
const dt = `[${dateTime.getHours()+1}:${dateTime.getMinutes()+1}:${dateTime.getSeconds()+1}]`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function start(size) {
	robot.setMouseDelay(2);

	console.log(`${dt}  width: ${size.width * 0.33}`);
    console.log(`${dt}  height: ${size.height * 0.35}`);

	robot.moveMouse(size.width * 0.33, size.height * 0.35);

	const mouse = robot.getMousePos();

	const hex = robot.getPixelColor(mouse.x, mouse.y);
	console.log(`${dt}  #` + hex + " - x:" + mouse.x + " - y:" + mouse.y);

	await sleep(3000);

	robot.keyTap("space");
}

module.exports = start;

/* Mouse
// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

for (var x = 0; x < width; x++)
{
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}
*/

/* Keyboard
// Type "Hello World".
robot.typeString("Hello World");

// Press enter.
robot.keyTap("enter");
*/

/* Screen
// Get pixel color under the mouse.

// Get mouse position.
var mouse = robot.getMousePos();

// Get pixel color in hex format.
var hex = robot.getPixelColor(mouse.x, mouse.y);
console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
*/