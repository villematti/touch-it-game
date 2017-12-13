var winStage = {
  score: undefined,
  init: function(score) {
    this.score = score
  },
  preload: function() {

  },
  create: function() {
    var scoreText = game.add.text(game.world.width / 2,
                                  game.world.height / 2,
                                  "Your score: " + this.score);
    scoreText.anchor.set(0.5)


    var restartText = game.add.text(game.world.width / 2, (game.world.height + 250) / 2, "Tap here to play again");
    restartText.anchor.set(0.5)
    restartText.inputEnabled = true;
    restartText.events.onInputDown.add(this.onDown, this)
  },
  update: function() {

  },
  onDown: function() {
    game.state.start('game', true, false, 0, 1)
  }
}
