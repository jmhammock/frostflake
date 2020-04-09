class TilemapDemo extends TilemapView {

    ball;
    
    static BALL_SPEED_MAX = 100;

    constructor() {
        super('/demo/content/tileset.json', '/demo/content/tilemap.json');

        this.ball = new Sprite('/demo/content/frostflake.png');
        // this.ball.velocity.x = 35;
        // this.ball.velocity.y = 50;
        this.ball.velocity.rotation = MathUtil.randomInRange(-3, 3);
        this.ball.scale = 0.75;
        this.ball.collision.radius = 8;
        this.ball.layer = 100;
        this.addChild(this.ball);
    }

    update() {
        super.update();

        if(this.tilemapLoaded) {
            for(let i = this.collidables.length - 1; i > -1; i--) {
                let tile = this.collidables[i];
                if(this.ball.collision.collideWith(tile.collision, RepositionType.Bounce, 0, 1)) {
                    // randomize rotation velocity
                    this.ball.velocity.rotation = MathUtil.randomInRange(-3, 3);
                }
            }

            FrostFlake.Game.camera.x = this.ball.x;
            FrostFlake.Game.camera.y = this.ball.y;
        }

        //FrostFlake.Log.info(`FPS: ${FrostFlake.Game.time.aveFps()}`);
    }
}