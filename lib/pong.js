// Initialize and start the game
var game = new Game($('canvas')[0]);

// Load the game entities
game.entities = [
  new Background(game),
  new Ball(game),
  new Paddle(game),
];

game.start();

