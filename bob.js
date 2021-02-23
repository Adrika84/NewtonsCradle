class bob {
    constructor(x, y, r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      ellipseMode(CENTER);
      stroke("black");
      fill("magenta");
      ellipse(pos.x, pos.y);
    }
  }
  