// Initialize and start the game
var game = new Game($('canvas')[0]);

// Load the game entities
game.entities = {
  background: new Background(game),
  ball: new Ball(game),
  paddle: new Paddle(game),
};

game.start();

