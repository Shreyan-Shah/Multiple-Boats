class Cannonball {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.image = loadImage('assets/cannonball.png');
        this.radius = radius
    }

    shoot() {
        var newAngle = cannon.angle - 28
        //convert the angle from degrees to radians
        newAngle = newAngle * (3.14 / 180);
        //calculate the x and y velocity from angle
        var velocity = p5.Vector.fromAngle(newAngle)
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14) });
    }

    display() {
        var pos = this.body.position
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}