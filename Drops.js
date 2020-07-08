class Drops {
    constructor(x, y) {
        var options = {
            'friction' : 0.3,
        }
    this.body = Bodies.circle(x, y, 5, options);
    this.x = x;
    this.y = y;
    World.add(world, this.body);
    }

    fall(speed) {
        this.y += speed;
    }

    update() {
        if(this.body.position.y > 397) {
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)});
        }
    }

    display() {
        noStroke();
        fill(32, 146, 236);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, 10);
    }
}