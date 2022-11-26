class Boat {
    constructor(x, y, w, h, boatpos) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.image = loadImage('assets/boat.png');
        this.w = w
        this.h = h
        this.boatpos = boatpos
    }
    display() {
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, this.boatpos, this.w, this.h);
        pop();
    }
}