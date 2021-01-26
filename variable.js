// 1. Use strict
// added in ES 5
// use this for Valina Javasvript.
'use strict';

// 2.Variable (변수) r/w(read/write)
// let (ES6에서 추가된 언어)
let globalName = 'global';
//global변수는 프로그램이 시작할때 부터 끝날때 까지 메모리에 탑재되어있어서 최소한으로 사용하는 것이 좋음
//class, 함수, if 등 필요한 부분에서만 사용하는것이 좋음
{
  //block scope
  let name = 'wooin';
  console.log(name);
  name = 'Hi';
  console.log(name);
  console.log(globalName);
}
console.log(name); //블럭 밖에서 접근 불가능
console.log(globalName);

// var (쓰지말자)
// var hoisting ( hoisting = 어디에 선언하든 제일 위로 끌어 올려줌)
// block scope가 없음 블럭을 철저히 무시함
console.log(age); //undefined 값을 선언하기도 전에 출력 가능
{
  age = 4;
  console.log(age);
  var age;
}
console.log(age); //block 을 무시하고 실행됨

// 3.Constant r(read only)
// 값을 한번 할당하면 절때 변하지 않음
// immutable data type 값 변경이 불가능한 타입
const daysInWeek = 7;
// js에서 변수는 mutable 타입의 let과 immuatable 타입의 const 2가지

// 4. Variable types
//primitive, single item: 더이상 나눠질 수 없는 작은 타입, 한가지 아이템
// number, string, boolean, null, undefined, symbol

//object: 싱글 아이템들 여러가지를 묶어서 한 단위, 박스로 만들어서 관리

//function: first-class function
// first-class function: 다른 데이터 타입처럼 변수에 할당 가능, 함수의 인자(파라미터)로 전달가능,
// 리턴타입으로도 함수를 리턴 가능

//number
//C언어 처럼 int,float 선언 안함
// number 라고 선언 안해도됨
const count = 17; //정수
const size = 17.1; //소수점
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//string
const char = 'c';
const wooin = 'wooin';
const greeting = 'hello' + wooin; //string에 다른 변수를 붙임
console.log(`value: ${greeting}, type ${typeof greeting}`);

const num = 3;
const plusnum = 'Hi' + num; // 타입이 다른 변수도 붙일 수 있음
console.log(`value: ${plusnum}, type ${typeof plusnum}`);

const helloBob = `hi ${wooin}!`; //template literals (string)
//백틱(`)기호를 이용해 원하는 문자열과 ${}이용해 변수의 값이 자동으로 붙여짐
console.log(`value: ${helloBob}, type ${typeof helloBob}`);

//boolean
// false: 0. null. undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type ${typeof canRead}`);
console.log(`value: ${test}, type ${typeof test}`);

//null
let nothing = null; //null값이라고 지정해줌
console.log(`value: ${nothing}, type ${typeof nothing}`);

//undefined
let x; //선언은 되었지만 값이 지정되지 않음
let z = undefined;
console.log(`value: ${x}, type ${typeof x}`);
console.log(`value: ${z}, type ${typeof z}`);

//symbol
//우선순위를 줄때 고유한 식별자가 필요할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
//symbol은 .description을 이용해 문자열로 뱌꿔서 출력해줘야함
console.log(`value: ${symbol1.description}, type ${typeof symbol1}`);

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type ${typeof text}`);

text = 1;
//string -> number
console.log(`value: ${text}, type ${typeof text}`);

text = '7' + 5;
//string + number -> string
console.log(`value: ${text}, type ${typeof text}`);

text = '8' / '2';
//숫자 연산/를 사용함 문자열 내용이 숫자임 ->number
console.log(`value: ${text}, type ${typeof text}`);
