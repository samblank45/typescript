export class Car {
  year: number;

  constructor() {
    this.year = 10
  }

  drive(speed: number) {
    console.log(`driving at ${speed} mph`)
  }

}

const myCar = new Car();
