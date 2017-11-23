var winStage = {
  preload: function() {

  },
  create: function() {
    scoreText = game.add.text(game.world.width / 2, game.world.width / 2, "You win!");
    scoreText.anchor.set(0.5)
  },
  update: function() {

  }
}
