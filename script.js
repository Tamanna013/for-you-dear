let highestZIndex = 1;

class Paper {
  constructor() {
    this.isDragging = false;
    this.isRotating = false;
    this.startX = 0;
    this.startY = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.posX = 0;
    this.posY = 0;
    this.rotation = Math.random() * 30 - 15;
  }

  handleStart(x, y, isRightClick = false) {
    if (this.isDragging) return;
    this.isDragging = true;

    this.element.style.zIndex = highestZIndex++;
    this.startX = x;
    this.startY = y;
    this.lastX = x;
    this.lastY = y;

    if (isRightClick) {
      this.isRotating = true;
    }
  }

  handleMove(x, y) {
    if (!this.isDragging) return;

    const deltaX = x - this.lastX;
    const deltaY = y - this.lastY;

    if (this.isRotating) {
      const centerX = this.startX - this.posX;
      const centerY = this.startY - this.posY;
      const angle = Math.atan2(y - centerY, x - centerX);
      this.rotation = (angle * 180) / Math.PI;
    } else {
      this.posX += deltaX;
      this.posY += deltaY;
    }

    this.lastX = x;
    this.lastY = y;
    this.updateTransform();
  }

  handleEnd() {
    this.isDragging = false;
    this.isRotating = false;
  }

  updateTransform() {
    this.element.style.transform = `translate(${this.posX}px, ${this.posY}px) rotate(${this.rotation}deg)`;
  }

  init(element) {
    this.element = element;

    const handleMouseDown = (e) => {
      e.preventDefault();
      this.handleStart(e.clientX, e.clientY, e.button === 2);
    };

    const handleMouseMove = (e) => {
      this.handleMove(e.clientX, e.clientY);
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      this.handleStart(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      this.handleMove(touch.clientX, touch.clientY);
    };

    element.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', () => this.handleEnd());

    element.addEventListener(
      'touchstart',
      handleTouchStart,
      { passive: true }
    );
    element.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', () => this.handleEnd());

    element.addEventListener('contextmenu', (e) => e.preventDefault());
  }
}

document.querySelectorAll('.paper').forEach((paperElement) => {
  const paper = new Paper();
  paper.init(paperElement);
});
