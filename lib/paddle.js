(function(parent){
  var self = Paddle = function(game) {
    this.init(game);
    this.reset();
  }

  self.prototype = Object.create(parent.prototype)
  self.prototype.constructor = self

  self.prototype.update = function() {
    parent.prototype.update.call(this, arguments)

    var speed = 10;

    this.yVelocity = 0;

    if(this.game.keyPressed.up && this.y > 0){
      this.yVelocity = -speed;
    } else if(this.game.keyPressed.down &&
              this.y < this.game.width - this.width){
      this.yVelocity = speed;
    }
  }

  self.prototype.reset = function() {
    this.width = 20;
    this.height = 100;

    this.x = 20;
    this.y = (this.game.height - this.height)/2;
  }

  return self;
})(Entity);
