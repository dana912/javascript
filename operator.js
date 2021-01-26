// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+ 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //덧셈
console.log(1 - 1); //뺄셈
console.log(3 / 1); //나눗셈
console.log(3 * 1); //곱셈
console.log(5 % 2); //나머지
console.log(2 ** 3); //거듭제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //증가 후 삽입
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; //삽입 후 증가
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

const predecrement = --counter; //증가 후 삽입
console.log(`predecrement: ${predecrement}, counter: ${counter}`);
const postdecrement = counter--; //삽입 후 증가
console.log(`postdecrement: ${postdecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y; //x = x - y;
x *= y; //x = x * y;
x /= y; //x = x / y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or) 하나라도 true면 true
console.log(`or: ${value1 || value2 || check()}`);

const value3 = true;
// ||(or) 조건 중 true가 나오면 뒤는 안보고 끝남
// 심플한 값들을 먼저 배치
console.log(`or: ${value3 || value2 || check()}`);

// &&(and) 하나라도 false면 false
// &&(and) 조건 중 false가 나오면 뒤는 안보고 끝남
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 3; i++) {
    console.log('😀😀');
  }
  return true;
}

// !(not) 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality 타입은 상관없고 값만 비교
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality 타입과 값 둘다 비교
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// 8. Conditional operators: if
// if, else if, else
const name = 'wooin';
if (name === 'wooin') {
  console.log('Hi! wooin');
} else if (name === 'corder') {
  console.log('You are amazing corder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// 조건 ? 참 : 거짓;
console.log(name === 'wooin' ? 'yes' : 'no');

// 10. Switch statement
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops

// while loop
// while이 false가 될때까지 실행
// 조건이 안맞으면 한번도 실행 안함
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while loop
//블록을 먼저 실행 후 조건 검사
//무조건 한번은 실행
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(시작; 조건; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// nested loops 중첩
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// Q1. 0부터 10까지 짝수만 출력 continue
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Q2. 0부터 10까지 나열하되 8을 만나면 끝내기 break
for (let i = 0; i < 11; i++) {
  if (i == 8) {
    break;
  }
  console.log(i);
}
