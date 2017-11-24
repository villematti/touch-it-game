var loadStage = {
  preload: function() {
    // Start physics engine, ARCADE -> everything is square
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Show logo
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')

    // Set logo anchor point to middle
    this.splash.anchor.setTo(0.5)

    // Load all game assets

    // Load used font

    // Level 1 symbols
    this.load.image('red_circle', 'assets/red_circle.png')
    this.load.image('red_square', 'assets/red_square.png')
    this.load.image('red_star', 'assets/red_star.png')

    // Level 2 symbols
    this.load.image('blue_circle', 'assets/blue_circle.png')
    this.load.image('blue_square', 'assets/blue_square.png')
    this.load.image('blue_star', 'assets/blue_star.png')

    // Level 3 symbols
    this.load.image('green_circle', 'assets/green_circle.png')
    this.load.image('green_square', 'assets/green_square.png')
    this.load.image('green_star', 'assets/green_star.png')

    // Level 4 symbols
    this.load.image('lightgreen_circle', 'assets/lightgreen_circle.png')
    this.load.image('lightgreen_square', 'assets/lightgreen_square.png')
    this.load.image('lightgreen_star', 'assets/lightgreen_star.png')

    // Level 5 symbols
    this.load.image('black_circle', 'assets/black_circle.png')
    this.load.image('black_square', 'assets/black_square.png')
    this.load.image('black_star', 'assets/black_star.png')

    // Level 6 symbols
    this.load.image('grey_circle', 'assets/grey_circle.png')
    this.load.image('grey_square', 'assets/grey_square.png')
    this.load.image('grey_star', 'assets/grey_star.png')

    // Level 7 symbols
    this.load.image('yellow_circle', 'assets/yellow_circle.png')
    this.load.image('yellow_square', 'assets/yellow_square.png')
    this.load.image('yellow_star', 'assets/yellow_star.png')

    // Level 8 symbols
    this.load.image('purple_circle', 'assets/purple_circle.png')
    this.load.image('purple_square', 'assets/purple_square.png')
    this.load.image('purple_star', 'assets/purple_star.png')

    this.load.onComplete.add(this.onLoadComplete, this)
  },
  create: function() {

  },
  update: function() {

  },
  onLoadComplete: function() {
    game.state.start('game')
  }
}
