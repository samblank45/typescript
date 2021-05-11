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

// class Car {
//   public color: string;
//   public year: number;

//   constructor(color: string, year: number) {
//     this.color = color;
//     this.year = year;
//   }

//   drive() {
//     this.putInGear();
//     this.pressPetal();
//     this.turnWheel();
//   }

//   private putInGear() {

//   }

//   private pressPetal() {

//   }

//   private turnWheel() {


//   }
// }

// const myCar = new Car('red', 2000);
// myCar.drive()

// console.log(myCar.color, myCar.year)

// const Component = (target: any) => {
//   console.log(target)
// }

// @Component
// class Car {
//   @Component year: string;

//   @Component
//   drive(@Component speed: number) {

//   }

//   @Component
//   get year {

//   }
// }

// import { Car } from './Car'

// const myCar = new Car();

// interface Drivable {
//   speed: number;
//   drive(): string;
// }

// class Car implements Drivable {
//   speed = 10;

//   drive() {
//     return `i am driving at ${speed} mph`
//   }
// }

// const myCar = new Car();

// const startDriving = (vehicle: Drivable) => {
//   vehicle.drive();
// }

// startDriving(myCar);

// class NumberHolder {
//   value: number;
// }

// class StringHolder {
//   value: string;
// }

// class BooleanHolder {
//   value: boolean;
// }

// class ValueHolder<TypeForValueProperty> {
//   value: TypeForValueProperty;
// }

// const numberHolder = new ValueHolder<number>();
// numberHolder.value


// const stringHolder = new StringHolder();
// stringHolder.value = "hello";

// const booleanHolder = new BooleanHolder();
// booleanHolder.value = true;

// class ValueHolder<T> {
//   value: T;
// }

const valueWrapper = <T>(value: T): T[] => {
  return [value]
}

console.log(valueWrapper('abc'));

