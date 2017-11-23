var loadStage = {
  preload: function() {
    // Start physics engine, ARCADE -> everything is square
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Show logo
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')

    // Set logo anchor point to middle
    this.splash.anchor.setTo(0.5)
  },
  create: function() {
    game.state.start('game')
  },
  update: function() {

  }
}
