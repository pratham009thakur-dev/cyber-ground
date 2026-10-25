let game;
const config = {
    type: Phaser.AUTO,
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: window.innerWidth, height: window.innerHeight },
    physics: { default: 'arcade', arcade: { gravity: { y: 0 }, debug: false } },
    scene: { preload: preload, create: create, update: update }
};

let player, obstacles, coins, scoreText, ground;
let score = 0, gameOver = false, lanes, obstacleSpeed = 200, spawnDelay = 1500;

function preload() {
    this.load.image('background', 'https://labs.phaser.io/assets/skies/space3.png');
    this.load.image('ground', 'https://labs.phaser.io/assets/sprites/platform.png');
    this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
    this.load.image('obstacle', 'https://labs.phaser.io/assets/sprites/block.png');
    this.load.image('coin', 'https://labs.phaser.io/assets/sprites/star.png');
}

function create() {
    const w = this.scale.width;
    const h = this.scale.height;
    lanes = [w * 0.25, w * 0.5, w * 0.75];

    this.add.image(w/2, h/2, 'background').setDisplaySize(w, h);
    
    // Create visible ground
    ground = this.physics.add.staticSprite(w/2, h - 30, 'ground').setScale(2).refreshBody();
    
    player = this.physics.add.sprite(w/2, h - 100, 'player').setScale(2);
    
    obstacles = this.physics.add.group();
    coins = this.physics.add.group();

    this.physics.add.collider(player, obstacles, hitObstacle, null, this);
    this.physics.add.overlap(player, coins, collectCoin, null, this);

    scoreText = this.add.text(20, 20, 'Score: 0', { fontSize: '32px', fill: '#fff' });

    this.time.addEvent({ delay: 1500, callback: spawnManager, callbackScope: this, loop: true });
}

function update() {
    if (gameOver) return;
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown && player.x > lanes[0]) player.x -= 8;
    if (cursors.right.isDown && player.x < lanes[2]) player.x += 8;

    // Cleanup and Difficulty Scaling
    obstacles.children.iterate(c => { if(c && c.y > window.innerHeight) c.destroy(); });
    coins.children.iterate(c => { if(c && c.y > window.innerHeight) c.destroy(); });
}

function spawnManager() {
    if (gameOver) return;
    
    const x = lanes[Phaser.Math.Between(0, 2)];
    
    // ADJUSTED: Increased probability of stars (coins)
    // 0 to 10 scale: if result is <= 4, spawn obstacle (40% chance)
    // if result is > 4, spawn star (60% chance)
    const isObstacle = Phaser.Math.Between(0, 10) <= 4;
    
    const obj = isObstacle ? obstacles.create(x, -50, 'obstacle') : coins.create(x, -50, 'coin');
    obj.setVelocityY(obstacleSpeed);

    // Difficulty scaling: increase speed gradually
    if (obstacleSpeed < 600) obstacleSpeed += 5;
}

function collectCoin(p, c) { c.destroy(); score += 10; scoreText.setText('Score: ' + score); }

function hitObstacle() {
    gameOver = true;
    this.physics.pause();
    document.getElementById('gameButtons').style.display = 'block';
}

function startGame() {
    document.getElementById('rulesOverlay').style.display = 'none';
    game = new Phaser.Game(config);
}

function restartGame() {
    location.reload(); 
}