(function(parent){
  var self = Ball = function(game) {
    this.init(game);
    this.reset();
  }

  self.prototype = Object.create(parent.prototype)
  self.prototype.constructor = self

  self.prototype.update = function() {
    parent.prototype.update.call(this, arguments)

    if(this.x < 0 || this.x > this.game.width -  this.width){
      this.reset();
    }
    if(this.y < 0 || this.y > this.game.height - this.height){
      this.yVelocity *= -1;
    }
  }

  self.prototype.reset = function() {
    this.width = 20;
    this.height = 20;

    this.x = this.game.width/2;
    this.y = this.game.height/2;

    var min = -5, max = 5;
    // TODO init the ball position and velocity
    this.yVelocity = Math.floor(Math.random() * (max - min) + min);
    this.xVelocity = Math.random() > 0.5 ? 3 : -3;
  }
})(Entity);
