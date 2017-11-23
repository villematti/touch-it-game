var sprite;
var group;
var cursors;
var gameStage = {
  score: 0,
  scoreText: undefined,
  shapes: undefined,
  roundShapes: [],
  preload: function() {

  },
  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    let styles = {font: "20px Arial",fill: "#ff0044"}
    scoreText = game.add.text(game.world.width-100, 10, "score: " + this.score, styles);

    group = game.add.physicsGroup();

    for (var i = 0; i < 5; i++)
    {
        var c = group.create(game.rnd.between(0, 770), game.rnd.between(0, 570), 'logo', game.rnd.between(0, 35));
        c.scale.setTo(0.2, 0.2);
        c.body.velocity.set(game.rnd.between(10, 300), game.rnd.between(10, 300))
        c.inputEnabled = true;
        c.events.onInputDown.add(this.onDown, this)
    }
    group.setAll('body.bounce.y', 1);
    group.setAll('body.bounce.x', 1);
    group.setAll('body.collideWorldBounds', true);
  },
  update: function() {
    game.physics.arcade.collide(group);
  },
  createShape: function() {
    var c = group.create(game.rnd.between(0, 770), game.rnd.between(0, 570), 'logo', game.rnd.between(0, 35));
    c.scale.setTo(0.2, 0.2);
    c.body.velocity.set(game.rnd.between(10, 300), game.rnd.between(10, 300))
    c.inputEnabled = true;
    c.events.onInputDown.add(this.onDown, this)
    c.body.bounce.y = 1
    c.body.bounce.x = 1
    c.body.collideWorldBounds = true
  },
  onTap: function(pointer, doubleTap) {
    console.log("Pointer", pointer)
    if(doubleTap) {
      console.log("Its double tap!!")
    }
  },
  onDown: function(sprite, pointer) {
    this.score += 1
    sprite.kill()
    this.createShape()
    scoreText.setText("score: " + this.score)
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
