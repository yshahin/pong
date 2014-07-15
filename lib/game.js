// The game engine
(function(){
  var self = Game = function(canvas) {
    var me = this

    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height

    // Keep track of key states
    // Eg.:
    //   game.keyPressed.up === true  // while UP key is pressed
    //   game.keyPressed.up === false // when UP key is released
    this.keyPressed = {}

    $(canvas).on('keydown keyup', function(e) {
      // Convert key code to key name
      var keyName = self.keys[e.which]

      if (keyName) {
        // eg.: `me.keyPressed.up = true` on keydown
        // Will be set to `false` on keyup
        me.keyPressed[keyName] = e.type === 'keydown'
        e.preventDefault()
      }
    })
  }

  self.keys = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }

  self.prototype.start = function() {
    var me = this,
        fps = 60,
        interval = 1000/60;

    setInterval(function(){
      me.update();
      me.draw(me.context);
    }, interval);
  }

  self.prototype.update = function() {
    this.entities.forEach(function(entity){
      if(entity.update) entity.update();
    });
  }

  self.prototype.draw = function(context) {
    this.entities.forEach(function(entity){
      if(entity.draw) entity.draw(context);
    });
  }

})();
