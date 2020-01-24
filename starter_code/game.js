
const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: 0,
    score: 0,
    upObstacles: [],
    downObstacles: [],
    randomize :0,
    init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    // scoreboard.init(this.ctx);
    this.start();
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
          if (this.framesCounter > 5000) {
            this.framesCounter = 0;
          }
        this.framesCounter++;
        this.clear();
        this.drawAll();
        this.moveAll();
        this.generateObstacles();
        this.clearObstacles();
        // if (this.isCollision()) {
        //     this.gameOver();
        // }
        // this.score += 0.01;
        // this.drawScore();
        }, 1000 / this.FPS);
    },
    setDimensions() {
        this.width = 450;
        this.height = 504;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },
    drawAll() {
        this.background.draw();
        this.player.draw(this.framesCounter);
        this.upObstacles.forEach(obs => obs.draw());
        this.downObstacles.forEach(obs => obs.draw());
    },
    
    moveAll() {
    this.background.move();
    this.player.move();
    this.upObstacles.forEach(obs => obs.move());
    this.downObstacles.forEach(obs => obs.move());
    },

    reset() {
    this.background = new Background(this.ctx, this.width, this.height, "./images/bg.png");
    this.player = new Player(this.ctx, this.width, this.height, this.keys);
    this.upObstacles = [];
    this.downObstacles = [];
    // this.scoreboard = scoreboard;
    },

    clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    },

    generateObstacles() {
        if (this.framesCounter % 1000 == 0) {
            this.randomHeight();
            console.log("hola", this.randomize)
            let obj = new ObstacleUp(this.ctx, this.width, this.randomize)
            
            this.upObstacles.push(obj);
            // console.log(obj)
        }
        if (this.framesCounter % 1000 == 0) {
            let obj2 = new ObstacleDown(this.ctx, this.width, this.randomize-120)
            // console.log(obstacleUp.height)
            
            this.downObstacles.push(obj2);
            console.log(this.upObstacles)
            // console.log(this.downObstacles);
            
          }
    },
    
    clearObstacles() {
    this.upObstacles = this.upObstacles.filter(obs => obs.posX >= 0);
    this.downObstacles = this.downObstacles.filter(obs => obs.posX >= 0);
    },

    randomHeight() {
        this.randomize = +randomInt(80, 380)
    },

    isCollision() {
    return this.obstacles.some(obs => {
        return (
        this.player.posX + this.player.width >= obs.posX &&
        this.player.posY + this.player.height >= obs.posY &&
        this.player.posX <= obs.posX + obs.width
        );
    });
    },
    gameOver() {
        clearInterval(this.interval);
    },
    
    // drawScore() {
    // this.scoreboard.update(this.score);
    // }
};
