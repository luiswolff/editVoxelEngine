var createGame = require('voxel-engine');

game = createGame({
texturePath: 'textures/',
generate: function(x,y,z){
	if (z*z + x*x > 20*20)
		return 0;
    if (y == -1)
        return 1;
    if (y < -1 && y >= -10)
        return 3;
	return 0;
	}
});
var container = document.body;
game.appendTo(container);

window.game = game;

var createPlayer = require('voxel-player')(game);

window.createPlayer = createPlayer;
