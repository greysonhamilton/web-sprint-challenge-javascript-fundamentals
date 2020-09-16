// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {

    return this.length * this.width * this.height;
  
  }

  surfaceArea() {

    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
  
  }

}

  const cuboid = new CuboidMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// The code is written out as we are asking for three parameters to pass in as our variables. However, the simpler code would be to use return Math.pow(this.length, 3) for the volume and 6 * Math.pow(this.length, 2) for the surface area.

class CubeMaker extends CuboidMaker {
    constructor(CuboidMaker) {
        super(this.length, this.width, this.height);
    }

    volume() {

        return this.length * this.width * this.height;

    }

    surfaceArea() {

        return 6 * (this.length * this.height);

    }

}