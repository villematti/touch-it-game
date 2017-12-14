
// Point chart for different colors and shapes
var shapeChart = [
  {
    "red": [
      "circle": {points: 1},
      "square": {points: 3},
      "star": {points: -1}
    ],
    "blue": [
      "cicle": {points: 2},
      "square": {points: 4},
      "star": {points: -2}
    ],
    "green": [
      "cicle": {points: 3},
      "square": {points: 5},
      "star": {points: -3}
    ],
    "lightgreen": [
      "cicle": {points: 4},
      "square": {points: 6},
      "star": {points: -4}
    ],
    "black": [
      "cicle": {points: 5},
      "square": {points: 8},
      "star": {points: -6}
    ],
    "grey": [
      "cicle": {points: 6},
      "square": {points: 10},
      "star": {points: -7}
    ],
    "yellow": [
      "cicle": {points: 8},
      "square": {points: 12},
      "star": {points: -8}
    ],
    "purple": [
      "cicle": {points: 10},
      "square": {points: 15},
      "star": {points: -9}
    ],
  }
]

var sprite;
var group;
var cursors;
var gameStage = {
  score: 0,
  scoreText: undefined,
  levelText: undefined,
  shapes: undefined,
  roundShapes: [],
  timeText: undefined,
  level: 1,
  gameTimer: undefined,
  preload: function() {

  },
  init(initialScore, initialLevel) {
    this.score = initialScore
    this.level = initialLevel
  },
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE)

    let styles = {font: "20px Arial",fill: "#FF0000"}
    let levelTextStyle = {font: "40px Arial",fill: "#000000", opacity: 0.25}

    // Put score text to the screen
    this.scoreText = game.add.text(game.world.width - 150, 10, "score: " + this.score, styles)
    this.timeText = this.game.add.text(this.game.world.width - 150, 36, "time: 20", styles)

    this.levelText = game.add.text(10, 10, "score: " + this.level, levelTextStyle)

    // Add
    group = game.add.physicsGroup();

    for (var i = 0; i < 5; i++)
    {
      this.createShape()
    }

    // Lets set timer when game ends
    this.gameTimer = this.game.time.events.add(Phaser.Timer.SECOND * 30, this.done, this)
  },
  update: function() {
    game.physics.arcade.collide(group);
  },
  render: function() {
    this.timeText.setText("time: " + Math.floor(this.game.time.events.duration/1000))
  },
  done: function() {
    game.state.start('win', true, false, this.score)
  },
  createShape: function() {
    var shapeData = this.getShape()
    // var color = ['red', 'blue', 'green', 'lightgreen', 'black', 'grey', 'yellow', 'purple'][Math.floor(game.rnd.between(0, 7))]
    // var symbol = ['circle', 'square', 'star'][Math.floor(game.rnd.between(0, 2))]
    var c = group.create(game.rnd.between(0, 770),
                          game.rnd.between(0, 570),
                          shapeData.color + '_' + shapeData.symbol,
                          game.rnd.between(0, 35));
    c.scale.setTo(0.6, 0.6);
    c.body.velocity.set(game.rnd.between(10, 300), game.rnd.between(10, 300))
    c.inputEnabled = true;
    c.events.onInputDown.add(this.onDown, this)
    c.shapeColor = shapeData.color
    c.shapeSymbol = shapeData.symbol
    c.body.bounce.y = 1
    c.body.bounce.x = 1
    c.body.collideWorldBounds = true
  },
  onDown: function(sprite, pointer) {

    // Calculate new score based on value given by point chart
    this.score = this.score + shapeChart[sprite.shapeColor][sprite.shapeSymbol]

    // Kill tapped sprite and create new one
    sprite.kill()
    this.createShape()

    // Update the score board
    scoreText.setText("score: " + this.score)
  },

  /**
  * Validate what kind of shape should be displayed next
  * @return Object with values shape and color
  */
  getShape: function() {
    var colorNumber = game.rnd.between(0, 100)
    var symbolNumber = game.rnd.between(0, 100)
    var color = ''
    var symbol = ''
    switch(this.level) {
      case 1:

      // 80% change to get red color
      if(colorNumber <= 80) {
        color = 'red'
      }

      // 20% change to get blue color
      if(colorNumber > 80) {
        color = 'blue'
      }

      // About 50% change that its a circle
      if(symbolNumber <= 50) {
        symbol = 'circle'
      }

      // Around 45% change to get square symbol
      if(symbolNumber > 50 && symbolNumber <= 97) {
        symbol = 'square'
      }

      // About 3% change to get star symbol
      if(symbolNumber > 97) {
        symbol = 'star'
      }

      // this.color = ['red', 'blue', 'green', 'lightgreen', 'black', 'grey', 'yellow', 'purple'][Math.floor(game.rnd.between(0, 7))]
      // this.symbol = ['circle', 'square', 'star'][Math.floor(game.rnd.between(0, 2))]

      break;
      case 2:

      break;
      case 3:

      break;
      case 4:

      break;
      case 5:

      break;
      case 6:

      break;
      case 7:

      break;
      case 8:

      break;
      case 9:

      break;
      case 10:

      break;
      case 11:

      break;
      case 12:

      break;
      case 13:

      break;
      case 14:

      break;
      case 15:

      break;
      case 16:

      break;
      case 17:

      break;
      case 18:

      break;
      case 19:

      break;
      case 20:

      break;
      case 21:

      break;
      case 22:

      break;
      case 23:

      break;
      case 24:

      break;
      case 25:

      break;
      case 26:

      break;
      case 27:

      break;
      case 28:

      break;
      case 29:

      break;
      case 30:

      break;
    }

    return {color: color, symbol: symbol}
  }
}
