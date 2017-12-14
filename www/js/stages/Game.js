
// Point chart for different colors and shapes
var shapeChart = {
    "red": {
      "circle": {points: 1},
      "square": {points: 3},
      "star": {points: -1}
    },
    "blue": {
      "circle": {points: 2},
      "square": {points: 4},
      "star": {points: -2}
    },
    "green": {
      "circle": {points: 3},
      "square": {points: 5},
      "star": {points: -3}
    },
    "lightgreen": {
      "circle": {points: 4},
      "square": {points: 6},
      "star": {points: -4}
    },
    "black": {
      "circle": {points: 5},
      "square": {points: 8},
      "star": {points: -6}
    },
    "grey": {
      "circle": {points: 6},
      "square": {points: 10},
      "star": {points: -7}
    },
    "yellow": {
      "circle": {points: 8},
      "square": {points: 12},
      "star": {points: -8}
    },
    "purple": {
      "circle": {points: 10},
      "square": {points: 15},
      "star": {points: -9}
    },
}

var sprite;
var group;
var cursors;
var scoreText = '';
var gameStage = {
  score: 0,
  scoreText: undefined,
  levelText: undefined,
  targetScore: undefined,
  targetScoreText: undefined,
  shapes: undefined,
  roundShapes: [],
  timeText: undefined,
  level: 1,
  gameTimer: undefined,
  targetTime: undefined,
  preload: function() {

  },
  init(initialScore, initialLevel) {
    this.score = initialScore
    this.level = initialLevel
    this.targetScore = initialScore + initialLevel + 49
    this.targetTime = 30 + Math.floor(initialLevel * 1.4)
  },
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE)

    let styles = {font: "20px Arial",fill: "#FF0000"}
    let levelTextStyle = {font: "40px Arial",fill: "#000000", opacity: 0.4}

    // Put score text to the screen
    scoreText = game.add.text(game.world.width - 150, 10, "score: " + this.score, styles)
    this.timeText = this.game.add.text(this.game.world.width - 150, 36, "time: 20", styles)

    this.levelText = game.add.text(10, 10, "TASO " + this.level, levelTextStyle)

    this.targetScoreText = game.add.text(game.world.width / 2, game.world.height - 15, "Tavoite " + this.targetScore, levelTextStyle)
    this.targetScore.anchor.set(0.5)

    // Add
    group = game.add.physicsGroup();

    for (var i = 0; i < 5; i++)
    {
      this.createShape()
    }

    // Lets set timer when game ends
    this.gameTimer = this.game.time.events.add(Phaser.Timer.SECOND * this.targetTime, this.done, this)
  },
  update: function() {
    game.physics.arcade.collide(group);

    if(this.targetScore < this.score) {
      game.state.start('game', true, false, this.score, this.level + 1)
    }
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
    this.score += shapeChart[sprite.shapeColor][sprite.shapeSymbol]["points"]

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

    // About 50% change that its a circle
    if(symbolNumber.between(0, 50)) {
      symbol = 'circle'
    }

    // Around 45% change to get square symbol
    if(symbolNumber.between(50, 97)) {
      symbol = 'square'
    }

    // About 3% change to get star symbol
    if(symbolNumber.between(97, 100)) {
      symbol = 'star'
    }

    if(symbol === '') {
      symbol = 'circle'
    }

    switch(this.level) {

      // Level 1
      case 1:

      // 80% change to get red color
      if(colorNumber.between(0, 80)) {
        color = 'red'
      }

      // 20% change to get blue color
      if(colorNumber.between(80, 100)) {
        color = 'blue'
      }

      break;

      // Level 2
      case 2:

      // 80% change to get red color
      if(colorNumber.between(0, 80)) {
        color = 'red'
      }

      // 20% change to get blue color
      if(colorNumber.between(80, 100)) {
        color = 'blue'
      }

      break;

      // Level 3
      case 3:

      // 60% change to get red color
      if(colorNumber.between(0, 60)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(60, 100)) {
        color = 'blue'
      }

      break;

      // Level 4
      case 4:

      // 60% change to get red color
      if(colorNumber.between(0, 60)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(60, 100)) {
        color = 'blue'
      }

      break;

      // Level 5
      case 5:

      // 50% change to get red color
      if(colorNumber.between(10, 60)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(60, 100)) {
        color = 'blue'
      }

      // 10% change to get green color
      if(colorNumber.between(0, 10)) {
        color = 'green'
      }

      break;

      // Level 6
      case 6:

      // 50% change to get red color
      if(colorNumber.between(10, 60)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(60, 100)) {
        color = 'blue'
      }

      // 10% change to get green color
      if(colorNumber.between(0, 10)) {
        color = 'green'
      }

      break;

      // Level 7
      case 7:

      // 30% change to get red color
      if(colorNumber.between(20, 50)) {
        color = 'red'
      }

      // 50% change to get blue color
      if(colorNumber.between(50, 100)) {
        color = 'blue'
      }

      // 20% change to get green color
      if(colorNumber.between(0, 20)) {
        color = 'green'
      }

      break;

      // Level 8
      case 8:

      // 30% change to get red color
      if(colorNumber.between(20, 50)) {
        color = 'red'
      }

      // 50% change to get blue color
      if(colorNumber.between(50, 100)) {
        color = 'blue'
      }

      // 20% change to get green color
      if(colorNumber.between(0, 20)) {
        color = 'green'
      }

      break;

      // Level 9
      case 9:

      // 20% change to get red color
      if(colorNumber.between(80, 100)) {
        color = 'red'
      }

      // 50% change to get blue color
      if(colorNumber.between(30, 80)) {
        color = 'blue'
      }

      // 25% change to get green color
      if(colorNumber.between(5, 30)) {
        color = 'green'
      }

      // 5% change to get lightgreen color
      if(colorNumber.between(0, 5)) {
        color = 'lightgreen'
      }

      break;

      // Level 10
      case 10:

      // 20% change to get red color
      if(colorNumber.between(80, 100)) {
        color = 'red'
      }

      // 50% change to get blue color
      if(colorNumber.between(30, 80)) {
        color = 'blue'
      }

      // 25% change to get green color
      if(colorNumber.between(5, 30)) {
        color = 'green'
      }

      // 5% change to get lightgreen color
      if(colorNumber.between(0, 5)) {
        color = 'lightgreen'
      }

      break;

      // Level 11
      case 11:

      // 20% change to get red color
      if(colorNumber.between(80, 100)) {
        color = 'red'
      }

      // 50% change to get blue color
      if(colorNumber.between(30, 80)) {
        color = 'blue'
      }

      // 25% change to get green color
      if(colorNumber.between(5, 30)) {
        color = 'green'
      }

      // 5% change to get lightgreen color
      if(colorNumber.between(0, 5)) {
        color = 'lightgreen'
      }

      break;

      // Level 12
      case 12:

      // 5% change to get red color
      if(colorNumber.between(95, 100)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(55, 95)) {
        color = 'blue'
      }

      // 35% change to get green color
      if(colorNumber.between(25, 55)) {
        color = 'green'
      }

      // 15% change to get lightgreen color
      if(colorNumber.between(5, 25)) {
        color = 'lightgreen'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'black'
      }

      break;

      // Level 13
      case 13:

      // 5% change to get red color
      if(colorNumber.between(95, 100)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(55, 95)) {
        color = 'blue'
      }

      // 35% change to get green color
      if(colorNumber.between(25, 55)) {
        color = 'green'
      }

      // 15% change to get lightgreen color
      if(colorNumber.between(5, 25)) {
        color = 'lightgreen'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'black'
      }

      break;

      // Level 14
      case 14:

      // 5% change to get red color
      if(colorNumber.between(95, 100)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(55, 95)) {
        color = 'blue'
      }

      // 35% change to get green color
      if(colorNumber.between(25, 55)) {
        color = 'green'
      }

      // 15% change to get lightgreen color
      if(colorNumber.between(5, 25)) {
        color = 'lightgreen'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'black'
      }

      break;

      // Level 15
      case 15:

      // 5% change to get red color
      if(colorNumber.between(95, 100)) {
        color = 'red'
      }

      // 40% change to get blue color
      if(colorNumber.between(55, 95)) {
        color = 'blue'
      }

      // 35% change to get green color
      if(colorNumber.between(25, 55)) {
        color = 'green'
      }

      // 15% change to get lightgreen color
      if(colorNumber.between(5, 25)) {
        color = 'lightgreen'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'black'
      }

      break;

      // Level 16
      case 16:

      // 3% change to get red color
      if(colorNumber.between(97, 100)) {
        color = 'red'
      }

      // 10% change to get blue color
      if(colorNumber.between(87, 97)) {
        color = 'blue'
      }

      // 50% change to get green color
      if(colorNumber.between(37, 87)) {
        color = 'green'
      }

      // 30% change to get lightgreen color
      if(colorNumber.between(7, 37)) {
        color = 'lightgreen'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 7)) {
        color = 'black'
      }

      break;

      // Level 17
      case 17:

      // 3% change to get red color
      if(colorNumber.between(97, 100)) {
        color = 'red'
      }

      // 10% change to get blue color
      if(colorNumber.between(87, 97)) {
        color = 'blue'
      }

      // 50% change to get green color
      if(colorNumber.between(37, 87)) {
        color = 'green'
      }

      // 30% change to get lightgreen color
      if(colorNumber.between(7, 37)) {
        color = 'lightgreen'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 7)) {
        color = 'black'
      }

      break;

      // Level 18
      case 18:

      // 3% change to get red color
      if(colorNumber.between(97, 100)) {
        color = 'red'
      }

      // 10% change to get blue color
      if(colorNumber.between(87, 97)) {
        color = 'blue'
      }

      // 50% change to get green color
      if(colorNumber.between(37, 87)) {
        color = 'green'
      }

      // 30% change to get lightgreen color
      if(colorNumber.between(7, 37)) {
        color = 'lightgreen'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 7)) {
        color = 'black'
      }

      break;

      // level 19
      case 19:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 4% change to get blue color
      if(colorNumber.between(95, 99)) {
        color = 'blue'
      }

      // 40% change to get green color
      if(colorNumber.between(55, 95)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(15, 55)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(5, 15)) {
        color = 'black'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'grey'
      }

      break;

      // Level 20
      case 20:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 4% change to get blue color
      if(colorNumber.between(95, 99)) {
        color = 'blue'
      }

      // 40% change to get green color
      if(colorNumber.between(55, 95)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(15, 55)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(5, 15)) {
        color = 'black'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'grey'
      }

      break;

      // Level 21
      case 21:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 4% change to get blue color
      if(colorNumber.between(95, 99)) {
        color = 'blue'
      }

      // 40% change to get green color
      if(colorNumber.between(55, 95)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(15, 55)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(5, 15)) {
        color = 'black'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'grey'
      }

      break;

      // Level 22
      case 22:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 4% change to get blue color
      if(colorNumber.between(95, 99)) {
        color = 'blue'
      }

      // 40% change to get green color
      if(colorNumber.between(55, 95)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(15, 55)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(5, 15)) {
        color = 'black'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'grey'
      }

      break;

      // Level 23
      case 23:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 4% change to get blue color
      if(colorNumber.between(95, 99)) {
        color = 'blue'
      }

      // 40% change to get green color
      if(colorNumber.between(55, 95)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(15, 55)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(5, 15)) {
        color = 'black'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'grey'
      }

      break;

      // Level 24
      case 24:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 4% change to get blue color
      if(colorNumber.between(95, 99)) {
        color = 'blue'
      }

      // 39% change to get green color
      if(colorNumber.between(56, 95)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(16, 56)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(6, 16)) {
        color = 'black'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 6)) {
        color = 'grey'
      }

      break;

      // Level 25
      case 25:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 4% change to get blue color
      if(colorNumber.between(95, 99)) {
        color = 'blue'
      }

      // 39% change to get green color
      if(colorNumber.between(56, 95)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(16, 56)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(6, 16)) {
        color = 'black'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 6)) {
        color = 'grey'
      }

      break;

      // Level 26
      case 26:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 1% change to get blue color
      if(colorNumber.between(98, 99)) {
        color = 'blue'
      }

      // 23% change to get green color
      if(colorNumber.between(75, 98)) {
        color = 'green'
      }

      // 50% change to get lightgreen color
      if(colorNumber.between(25, 75)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(15, 25)) {
        color = 'black'
      }

      // 10% change to get black color
      if(colorNumber.between(5, 15)) {
        color = 'grey'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'yellow'
      }

      break;

      // Level 27
      case 27:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 1% change to get blue color
      if(colorNumber.between(98, 99)) {
        color = 'blue'
      }

      // 23% change to get green color
      if(colorNumber.between(75, 98)) {
        color = 'green'
      }

      // 50% change to get lightgreen color
      if(colorNumber.between(25, 75)) {
        color = 'lightgreen'
      }

      // 10% change to get black color
      if(colorNumber.between(15, 25)) {
        color = 'black'
      }

      // 10% change to get black color
      if(colorNumber.between(5, 15)) {
        color = 'grey'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'yellow'
      }

      break;

      // Level 28
      case 28:
      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 1% change to get blue color
      if(colorNumber.between(98, 99)) {
        color = 'blue'
      }

      // 3% change to get green color
      if(colorNumber.between(95, 98)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(55, 95)) {
        color = 'lightgreen'
      }

      // 35% change to get black color
      if(colorNumber.between(20, 55)) {
        color = 'black'
      }

      // 15% change to get black color
      if(colorNumber.between(5, 20)) {
        color = 'grey'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'yellow'
      }

      break;

      // Level 29
      case 29:
      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 1% change to get blue color
      if(colorNumber.between(98, 99)) {
        color = 'blue'
      }

      // 3% change to get green color
      if(colorNumber.between(95, 98)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(55, 95)) {
        color = 'lightgreen'
      }

      // 35% change to get black color
      if(colorNumber.between(20, 55)) {
        color = 'black'
      }

      // 15% change to get black color
      if(colorNumber.between(5, 20)) {
        color = 'grey'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'yellow'
      }

      break;

      // Level 30
      case 30:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 1% change to get blue color
      if(colorNumber.between(98, 99)) {
        color = 'blue'
      }

      // 3% change to get green color
      if(colorNumber.between(95, 98)) {
        color = 'green'
      }

      // 40% change to get lightgreen color
      if(colorNumber.between(55, 95)) {
        color = 'lightgreen'
      }

      // 35% change to get black color
      if(colorNumber.between(20, 55)) {
        color = 'black'
      }

      // 15% change to get black color
      if(colorNumber.between(5, 20)) {
        color = 'grey'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'yellow'
      }

      break;

      // Level 31
      case 31:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 1% change to get blue color
      if(colorNumber.between(98, 99)) {
        color = 'blue'
      }

      // 3% change to get green color
      if(colorNumber.between(95, 98)) {
        color = 'green'
      }

      // 20% change to get lightgreen color
      if(colorNumber.between(75, 95)) {
        color = 'lightgreen'
      }

      // 40% change to get black color
      if(colorNumber.between(35, 75)) {
        color = 'black'
      }

      // 15% change to get black color
      if(colorNumber.between(20, 35)) {
        color = 'grey'
      }

      // 15% change to get black color
      if(colorNumber.between(5, 20)) {
        color = 'yellow'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'purple'
      }

      break;
      default:

      // 1% change to get red color
      if(colorNumber.between(99, 100)) {
        color = 'red'
      }

      // 1% change to get blue color
      if(colorNumber.between(98, 99)) {
        color = 'blue'
      }

      // 3% change to get green color
      if(colorNumber.between(95, 98)) {
        color = 'green'
      }

      // 20% change to get lightgreen color
      if(colorNumber.between(75, 95)) {
        color = 'lightgreen'
      }

      // 40% change to get black color
      if(colorNumber.between(35, 75)) {
        color = 'black'
      }

      // 15% change to get black color
      if(colorNumber.between(20, 35)) {
        color = 'grey'
      }

      // 15% change to get black color
      if(colorNumber.between(5, 20)) {
        color = 'yellow'
      }

      // 5% change to get black color
      if(colorNumber.between(0, 5)) {
        color = 'purple'
      }

      break;
    }

    return {color: color, symbol: symbol}
  }
}
