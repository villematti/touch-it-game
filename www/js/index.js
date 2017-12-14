document.addEventListener("deviceready", onDeviceReady, false);

// Add Between prototype to number
Number.prototype.between = function(a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return this > min && this < max;
};

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO)

game.state.add('boot', bootStage)
game.state.add('load', loadStage)
game.state.add('game', gameStage)
game.state.add('menu', menuStage)
game.state.add('play', playStage)
game.state.add('win', winStage)

function onDeviceReady() {
  game.state.start('boot')
}
