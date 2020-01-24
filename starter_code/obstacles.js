function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class ObstacleUp {
    constructor(ctx,width,height,posX,posY) {
      this.ctx = ctx;
      this.width = 14;
      this.height;
  
      this.posX = game.width;
      this.posY = 0;
  
      this.velX = 0.3;
    }
  
    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
    move() {
      this.posX -= this.velX;
    }
  }
  class ObstacleDown {
    constructor(ctx,width,height,posX,posY) {
      this.ctx = ctx;
      this.width = 14;
      this.height = 200;
  
      this.posX = game.width;
      this.posY = game.height - this.height;
  
      this.velX = 0.3;
    }
  
    draw() {
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
    move() {
      this.posX -= this.velX;
    }
  }