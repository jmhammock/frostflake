class Cursor {
    x;
    y;
    changeX;
    changeY;
    worldX;
    worldY;
    isInFrame;

    update() {
        this.worldX = FrostFlake.Game.camera.x + this.x;
        this.worldY = FrostFlake.Game.camera.y + this.y;
    }

    setHardwarePosition(x, y) {
        let cursorX = x - (FrostFlake.Game.canvas.width / 2);
        let cursorY = MathUtil.invert(y) + (FrostFlake.Game.canvas.height / 2);
        this.changeX = this.x - cursorX;
        this.changeY = this.y - cursorY;
        this.x = cursorX;
        this.y = cursorY;
    }
}