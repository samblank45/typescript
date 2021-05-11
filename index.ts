// const myName: any = "sam";

// const ten: number = 5;
// const negative: number = -1111;

// const decimal: number = .123123;

// const yes: boolean = true;

// const nothingHere: null = null

// const noDefinition: undefined = undefined


// const add = (a: number, b: number): number => {
//   return a + b
// }

// const joinStrings = (a: string, b: string): string => {
//   return a + " " + b;
// }

// console.log(joinStrings('hello','hi'))

// interface Post {
//   title: string;
//   daysOld: number;
//   published: boolean; 
// }

// const post: { title: string, daysOld: number, published: boolean } = {
//   title: "News",
//   daysOld: 5,
//   published: true
// }

// const printPost = (postToPrint: Post) => {
//   return `${postToPrint.title} (${postToPrint.daysOld} days old)`
// }


// console.log(printPost(post))

class Car {
  public color: string;
  public year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    this.putInGear();
    this.pressPetal();
    this.turnWheel();
  }

  private putInGear() {

  }

  private pressPetal() {

  }

  private turnWheel() {


  }
}

const myCar = new Car('red', 2000);
myCar.drive()

console.log(myCar.color, myCar.year)