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
    this.load.image('red_circle', 'assets/images/red_circle.png')
    this.load.image('red_square', 'assets/images/red_square.png')
    this.load.image('red_star', 'assets/images/red_star.png')

    // Level 2 symbols
    this.load.image('blue_circle', 'assets/images/blue_circle.png')
    this.load.image('blue_square', 'assets/images/blue_square.png')
    this.load.image('blue_star', 'assets/images/blue_star.png')

    // Level 3 symbols
    this.load.image('green_circle', 'assets/images/green_circle.png')
    this.load.image('green_square', 'assets/images/green_square.png')
    this.load.image('green_star', 'assets/images/green_star.png')

    // Level 4 symbols
    this.load.image('lightgreen_circle', 'assets/images/lightgreen_circle.png')
    this.load.image('lightgreen_square', 'assets/images/lightgreen_square.png')
    this.load.image('lightgreen_star', 'assets/images/lightgreen_star.png')

    // Level 5 symbols
    this.load.image('black_circle', 'assets/images/black_circle.png')
    this.load.image('black_square', 'assets/images/black_square.png')
    this.load.image('black_star', 'assets/images/black_star.png')

    // Level 6 symbols
    this.load.image('grey_circle', 'assets/images/grey_circle.png')
    this.load.image('grey_square', 'assets/images/grey_square.png')
    this.load.image('grey_star', 'assets/images/grey_star.png')

    // Level 7 symbols
    this.load.image('yellow_circle', 'assets/images/yellow_circle.png')
    this.load.image('yellow_square', 'assets/images/yellow_square.png')
    this.load.image('yellow_star', 'assets/images/yellow_star.png')

    // Level 8 symbols
    this.load.image('purple_circle', 'assets/images/purple_circle.png')
    this.load.image('purple_square', 'assets/images/purple_square.png')
    this.load.image('purple_star', 'assets/images/purple_star.png')

    this.load.onLoadComplete.add(this.onLoadComplete, this)
  },
  create: function() {

  },
  update: function() {

  },
  onLoadComplete: function() {
    game.state.start('game', false, true, 0)
  }
}
