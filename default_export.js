export default class Animal {
  constructor(name) {
    this.name = name;
  }
};
let animal = new Animal("fox");
console.log(animal.name);