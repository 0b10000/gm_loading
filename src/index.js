const config = require("../config.json");
let totalFiles = 0;

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {}
function SetFilesTotal( total ) { totalFiles = total; }

bRando.new(
	"div#main", // Selector string of which elements to change backgrounds on
	config.backgrounds, // Array of backgrounds
	1000, // Time in milliseconds between background changes
	2500, // Duration in milliseconds of transitions
	false // Whether to cycle through the backgrounds randomly or not
);

