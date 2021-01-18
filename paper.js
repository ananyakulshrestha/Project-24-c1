class Paper{
    constructor(x, y, radius)
    {
    var options={
        isStatic:false,
        restituition: 0.3,
        friction: 0.5,
        density: 1.2
    }

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x, this.y, this.radius/2, options)
    this.image = loadImage("paper.png");
    World.add (world, this.body);
}
    display() {

        var pos = this.body.position;
        imageMode(CENTER);
        fill("pink");
        image(this.image, pos.x, pos.y, 50, 50);
    }
}
