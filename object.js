// Object
// 자바스크립트 데이터 타입 중 하나
//변수 하나당 값 하나
// object = {key: value};

// 1. Literals and properties

const obj1 = {}; // 'object literal'
const obj2 = new Object(); // 'object constructor'

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const wooin = { name: 'wooin', age: 4 };
print(wooin);

// 선언할때가 아닌 부분에서도 추가 가능
wooin.hasJob = true;
console.log(wooin.hasJob);

//삭제 가능
delete wooin.hasJob;
console.log(wooin.hasJob);

// 2. Computed properties
// 키는 항상 string
console.log(wooin.name);
// 오브젝트의 변수 이름을 스트링 형태로 접근
// 정확히 어떤 값을 출력해야할지 모를때
// 실시간으로 값을 받아올때
console.log(wooin['name']);

wooin['hasJob'] = true;
console.log(wooin.hasJob);

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('wooin', 30);
console.log(person4);

function makePerson(name, age) {
  return {
    name, // == name = name;
    age,
  };
}

// 4. Constructor Function
const person5 = new Person('ellie', 20);
console.log(person5);
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator (key in obj): 오브젝트안에 해당 키값이 있는지 확인
console.log('name' in wooin);
console.log('age' in wooin);
console.log('random' in wooin);
console.log(wooin.random);

// 6. for..in vs for..of
// for (key in obj)
for (key in wooin) {
  console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'wooin', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

const user3 = {};
Object.assign(user3, user);
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// 동일한 프로퍼티가 있을 경우 제일 뒤에 있는게 출력
console.log(mixed.color);
console.log(mixed.size);
