class Background {
    constructor(ctx, w, h, imgSource) {
      this.ctx = ctx;
      this.width = 450;
      this.height = 504;
  
      this.image = new Image();
      this.image.src = imgSource;
  
      this.posX = 0;
      this.posY = 0;
  
      this.velX = 0.5;
    }
  
    draw() {
      this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
      this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height);
    }
  
    move() {
      if (this.posX <= -this.width) {
        this.posX = 0;
      }
      this.posX -= this.velX;
    }
  }