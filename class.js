'use strict';
// class: template
// object: instance of a class

// 1. Class declarations
class Person {
  // 생성자
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const wooin = new Person('wooin', 23);
console.log(wooin.name);
console.log(wooin.age);
wooin.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // 값을 리턴
    return this._age;
  }

  set age(value) {
    // 값을 설정
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
  publicField = 2;
  #privateField = 0; //#를 사용해 private로 만듬 클래스 밖에선 값을 보지도 못함
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. static properties and methods
// 클래스 자체에 값이 정해져 있음
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
Article.printPublisher();

// 5. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모 함수 호출
    console.log('🔺');
  }
  getArea() {
    //오버라이딩 함수 재정의
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽에 있는 오브젝트가 오른쪽 클래스의 인스턴스인지 아닌지(클래스를 이용해 만들어졌는지) 구분
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
