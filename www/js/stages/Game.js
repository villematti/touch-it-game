var sprite;
var group;
var cursors;
var gameStage = {
  score: 0,
  scoreText: undefined,
  shapes: undefined,
  roundShapes: [],
  timeText: undefined,
  level: 1,
  color:,
  symbol:,
  preload: function() {

  },
  init(initialScore, initialLevel) {
    this.score = initialScore
    this.level = initialLevel
  },
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE)

    let styles = {font: "20px Arial",fill: "#ff0044"}

    // Put score text to the screen
    scoreText = game.add.text(game.world.width - 150, 10, "score: " + this.score, styles)
    this.timeText = this.game.add.text(this.game.world.width - 150, 36, "time: 20", styles)

    // Add
    group = game.add.physicsGroup();

    for (var i = 0; i < 5; i++)
    {
      this.createShape()
    }

    // Lets set timer when game ends
    this.game.time.events.add(Phaser.Timer.SECOND * 30, this.done, this)
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
    var shapeData = gameStage.getShape()
    var c = group.create(game.rnd.between(0, 770),
                          game.rnd.between(0, 570),
                          shapeData.color + '_' + shapeData.symbol,
                          game.rnd.between(0, 35));
    c.scale.setTo(0.6, 0.6);
    c.body.velocity.set(game.rnd.between(10, 300), game.rnd.between(10, 300))
    c.inputEnabled = true;
    c.events.onInputDown.add(this.onDown, this)
    //c.shapeColor = shapeData.color
    //c.shapeSymbol = shapeData.symbol
    c.body.bounce.y = 1
    c.body.bounce.x = 1
    c.body.collideWorldBounds = true
  },
  onDown: function(sprite, pointer) {
    if(sprite.shapeSymbol === 'square') {
      this.score += 10
    } else {
      this.score += 1
    }

    sprite.kill()
    this.createShape()
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

      // At level 1, color is always red
      color = 'red'

      // About 50% change that its a circle
      if(symbolNumber <= 50) {
        symbol = 'circle'
      }

      // Around 45% change to get square symbol
      if(symbolNumber > 50 <= 97) {
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

// shape = game.add.graphics(game.world.width*0.5, game.world.height*0.5)
// shape.beginFill(0xFF0000)
// shape.drawCircle(0, 30, 60)
// shapeSprite = game.add.sprite(0,0)
// shapeSprite.addChild(shape)
// shapeSprite.anchor.set(0.5)
// shapeSprite.inputEnabled = true
// shapeSprite.events.onInputDown.add(this.onDown, this);
// game.physics.enable(shape, Phaser.ARCADE)
// shape.body.velocity.set(50, 70)
// shape.body.collideWorldBounds=true
// shape.body.bounce.y = 1
// shape.body.bounce.x = 1
//
// shape2 = game.add.graphics(game.world.width*0.5, game.world.height*0.5)
// shape2.beginFill(0xFF0000)
// shape2.drawCircle(0, 30, 60)
//
// shapeSprite2 = game.add.sprite(5,100)
// shapeSprite2.addChild(shape2)
// shapeSprite2.anchor.set(0.5)
// shapeSprite2.inputEnabled = true
// shapeSprite2.events.onInputDown.add(this.onDown, this);
// game.physics.enable(shape2, Phaser.ARCADE)
// shape2.body.velocity.set(30, 70)
// shape2.body.collideWorldBounds=true
// shape2.body.bounce.y = 1
// shape2.body.bounce.x = 1
