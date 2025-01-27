let highestZIndex = 1;

class Paper {
  holdingPaper = false;
  startX = 0;
  startY = 0;
  moveX = 0;
  moveY = 0;
  prevX = 0;
  prevY = 0;
  velocityX = 0;
  velocityY = 0;
  rotation = Math.random() * 30 - 15;
  posX = 0;
  posY = 0;
  rotating = false;

  handleMove(x, y, paper) {
    if (!this.rotating) {
      this.moveX = x;
      this.moveY = y;

      this.velocityX = this.moveX - this.prevX;
      this.velocityY = this.moveY - this.prevY;
    }

    const deltaX = x - this.startX;
    const deltaY = y - this.startY;
    const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const normalizedX = deltaX / magnitude;
    const normalizedY = deltaY / magnitude;

    const angle = Math.atan2(normalizedY, normalizedX);
    let degrees = (180 * angle) / Math.PI;
    degrees = (360 + Math.round(degrees)) % 360;

    if (this.rotating) {
      this.rotation = degrees;
    }

    if (this.holdingPaper) {
      if (!this.rotating) {
        this.posX += this.velocityX;
        this.posY += this.velocityY;
      }

      this.prevX = this.moveX;
      this.prevY = this.moveY;

      paper.style.transform = `translateX(${this.posX}px) translateY(${this.posY}px) rotateZ(${this.rotation}deg)`;
    }
  }

  init(paper) {
    const handleStart = (x, y, isRightClick = false) => {
      if (this.holdingPaper) return;
      this.holdingPaper = true;

      paper.style.zIndex = highestZIndex;
      highestZIndex += 1;

      this.startX = x;
      this.startY = y;
      this.prevX = this.startX;
      this.prevY = this.startY;

      if (isRightClick) {
        this.rotating = true;
      }
    };

    const handleEnd = () => {
      this.holdingPaper = false;
      this.rotating = false;
    };

    // Mouse Events
    paper.addEventListener('mousedown', (e) => {
      handleStart(e.clientX, e.clientY, e.button === 2);
    });

    document.addEventListener('mousemove', (e) => {
      if (this.holdingPaper) {
        this.handleMove(e.clientX, e.clientY, paper);
      }
    });

    window.addEventListener('mouseup', handleEnd);

    // Touch Events
    paper.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      handleStart(touch.clientX, touch.clientY);
    });

    paper.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.handleMove(touch.clientX, touch.clientY, paper);
    });

    window.addEventListener('touchend', handleEnd);

    // Gesture Rotation for Touch Devices
    paper.addEventListener('gesturestart', (e) => {
      e.preventDefault();
      this.rotating = true;
    });

    paper.addEventListener('gestureend', () => {
      this.rotating = false;
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});
