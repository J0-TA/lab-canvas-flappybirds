class Player {
    constructor(ctx, gameW, gameH, keys) {
      this.ctx = ctx;
      this.gameWidth = gameW;
      this.gameHeight = gameH;
  
      this.width = 50;
      this.height = 35;
  
      this.image = new Image();
      this.image.src = "./images/flappy.png";
  
      this.posX = 20;
      this.posY = this.gameHeight/2
      this.posY0 = this.posY;
  
      this.keys = keys;
  
      this.velY = 1;
  
      this.setListeners();
    }
  
    draw() {
      this.ctx.drawImage(this.image,this.posX,this.posY,this.width,this.height);
    }
  
    move() {
        let gravity = 0.4;

        if (this.posY < this.posY0) {
            this.posY += this.velY;
            this.velY += gravity;
        } else {
            this.posY = this.posY;
            this.velY = 1;
        }
    }
  
    setListeners() {
      document.addEventListener("keydown", e => {
          if (e.keyCode === 68) {;
            this.posY -= 40;
            this.velY -= 6;
            console.log("Subiendo!");
            }
    });
    }
}
