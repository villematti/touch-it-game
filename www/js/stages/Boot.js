var bootStage = {
  preload: function() {

    // Load game logo to memory
    game.load.image('logo', 'img/game_logo.png')
  },
  create: function() {

    // Set canvas background color
    game.stage.backgroundColor = '#eee'

    // Disable multi touch
    this.input.maxPointers = 1

    // Check what kind of device we are using
    if(this.game.device.desktop) {

      // On desktop, lets allign page horozontally
      this.scale.pageAlignHorizontally = true
    } else {
      console.log("Its a mobile thing!")
      // Here are mobile spesific settings
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.forcePortrait = true
      this.scale.pageAlignHorizontally = true
    }
    game.state.start('load')
  },
  update: function() {

  }
}
