// A black background
Background = function(){
  var self = function(game) { this.game = game }
  self.prototype.draw = function(context) {
    context.fillStyle = '#000'
    context.fillRect(0, 0, game.width, game.height)
  }
  return self;
}();
