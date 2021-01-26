// function
// - 프로그램을 구성하는 굉장히 기본적인 빌딩 블럭
// - subprogram이라고도 불리며 어려번 재사용이 가능
// - 한가지의 일이나 값을 계산하기 위해 사용됨

// 1. 함수 정의 (Function declaration)
// function name(param1, param2) {body... return;}
// 하나의 함수는 한가지 일만 하도록 만들어야함
// naming: 동사 형태, 커맨드 형태
// 자바스크립트에서 함수는 오브젝트임
// 그래서 함수를 변수에 할당 할 수 있고, 파라미터로 전달도 가능, 함수 리턴 가능

function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello!');
log(1234);
//js는 숫자를 입력해도 문자열로 변환해서 출력함

// 2. Parameters
// premitive patameters는 value가 메모리에 저장되어 있어 그대로 전달이됨
// object parameters는 메모리에 reference가 저장되고 전달됨

function changeName(obj) {
  obj.name = 'coder'; //obg.name을 강제로 coder로 변경
}
const wooin = { name: 'wooin' };
changeName(wooin);
console.log(wooin);
// object는 reference로 전달되기 때문에 함수 안에서 object의 값을 변경하게 되면
// 변경된 사항이 그대로 메모리에 저장됨

// 3. Default parameters (assed in ES6)
function showMessage(message, from = 'unknown') {
  // from이 정의되지 않았을 때 unknown 출력
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // ...를 작성하면 배열형태로 전달
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // 배열을 출력하는 방법 2가지
  // of를 기준으로 뒤에 있는 파라미터에서 한글자 씩 of 앞에 있는 파라미터에 저장
  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 안에서는 밖을 볼 수 있고, 밖에서는 안을 못본다
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // local variable
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early retuen, early exit
// 나쁜 예
// 블럭안에서 로직을 많이 작성하면 가독성이 떨어짐
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// 잘한 예
// 조건이 맞지 않을땐 함수를 빨리 종료
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// 함수는 다른 변수와 마찬가지로 변수에 할당됨
// 함수의 파라미터로 전달 가능
// 리턴값도 가능

// 1. Function expression
// function declaration 함수가 선언되기 이전에 호출가능
// 자바스크립트 엔진이 선언을 제일 위로 올려주기 때문 (hoisted)
// function expression 할당된 다음부터 호출이 가능
const print = function () {
  //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// debugging
// 함수 안에서 또 다른 함수를 호출할 때
const printNo = function () {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// 함수를 간결하게 만들어줌
// 항상 이름이 없음 always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrinter = () => console.log('simplePrinter!');
const add = (a, b) => a + b;

//IIFE: Immediately Invoked Function Expression
// 별도의 함수 호출 없이도 바로 실행 (함수)();
(function hello() {
  console.log('IIFE');
})();

//Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  if (command === 'add') console.log(a + b);
  else if (command === 'substract') console.log(a - b);
  else if (command === 'divide') console.log(a / b);
  else if (command === 'multiply') console.log(a * b);
  else if (command === 'remainder') console.log(a % b);
  else console.log('NO!!');
}

calculate('add', 7, 3);
calculate('substract', 7, 3);
calculate('divide', 7, 3);
calculate('multiply', 7, 3);
calculate('remainder', 7, 3);
calculate('love', 7, 3);
