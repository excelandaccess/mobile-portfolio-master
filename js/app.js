
SIZE_BETWEEN_ROWS = 100
SIZE_BETWEEN_COLS = 85
CHARACTER_PADDING = 50
MAX_NUM_COLS = 6 // Enemies can start from 1 to 6;
                 // 6 being off grid so space out enemies
MAX_NUM_ROWS = 3 //Enemies can be from rows 1 to 3
BASE_COL = -300 // for calculation on random Col start of enemies
BASE_ROW = 60 // for calculation on random Row start of enemies
FIRST_ROW = 0
LAST_ROW = 400
BEYOND_LEFT_EDGE = -50
BEYOND_RIGHT_EDGE = 400
ENEMY_RIGHT_LIMIT = 700 // let enemies go a few cols off so they
                      // don't reset so quickly back on grid
SPEED = 200

// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;   
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.  was 700
    if ( this.x < ENEMY_RIGHT_LIMIT) {
        this.x += SPEED * dt;
    } else {
        this.x = 0;
    }
    //checkCollisions(this.x,this.y);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
    // Reset player when it reaches the water
    // or bottom, left, and right edges
    if (this.y <= FIRST_ROW || this.y > LAST_ROW || this.x <BEYOND_LEFT_EDGE || this.x > BEYOND_RIGHT_EDGE) {
        this.reset();
    }
};

// Reset the player when it loses life or reaches goals.
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function() {

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for (var i = 0; i < 4; i++){
    //var y = parseint((Math.random()*2));
    var x = BASE_COL + (Math.floor(Math.random()*MAX_NUM_COLS)*SIZE_BETWEEN_ROWS);
    var y = BASE_ROW + (Math.floor(Math.random()*MAX_NUM_ROWS)*SIZE_BETWEEN_COLS);
    allEnemies.push(new Enemy(x,y));//230  145 60
}

// Place the player object in a variable called player
var player = new Player();
player.reset();

Player.prototype.handleInput = function (keyCode){
  if(keyCode == 'left'){
        this.x -= SIZE_BETWEEN_ROWS;
    }
  else if(keyCode == 'right'){
        this.x += SIZE_BETWEEN_ROWS;
    }
  else if (keyCode == 'down'){
        this.y += SIZE_BETWEEN_COLS;
    }
  else if (keyCode == 'up'){
        this.y -= SIZE_BETWEEN_COLS;
    }
};

function checkCollisions(enemyX,enemyY){
    if (enemyX <= (player.x + CHARACTER_PADDING) &&
        (enemyX + CHARACTER_PADDING) >= player.x &&
        enemyY <= (player.y + CHARACTER_PADDING) &&
        (enemyY +  CHARACTER_PADDING) >= player.y ) {
            player.reset();
    }    
};

var keystrokes = new player.handleInput();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
