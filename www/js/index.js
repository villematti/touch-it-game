document.addEventListener("deviceready", onDeviceReady, false);

var game = new Phaser.Game("100%", "100%", Phaser.AUTO)

game.state.add('boot', bootStage)
game.state.add('load', loadStage)
game.state.add('game', gameStage)
game.state.add('menu', menuStage)
game.state.add('play', playStage)
game.state.add('win', winStage)

function onDeviceReady() {
  game.state.start('boot')
}
