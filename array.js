'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🥝', '🍍'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); //배열의 마지막

// 3. Loopinh over an array
// 배열 전체 출력
// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addtion, deletion, copy
// push: 제일 뒤에 추가
fruits.push('🍑', '🍒');
console.log(fruits);

// pop: 제일 뒤부터 지움
fruits.pop();
console.log(fruits);

// unshift: 앞에서 부터 데이터 삽입
fruits.unshift('🍇', '🍉');
console.log(fruits);
// shift: 앞에서 부터 데이터 삭제
fruits.shift();
console.log(fruits);

// shift, unshift는 pop, push보다 느리다!
// shift, unshift는 데이터를 앞에서 처리하기 때문에 전체적으로 움직임
// pop, push는 뒤에서 처리하기때문에 다른 데이터가 영향을 받지 않음

fruits.push('🍒', '🍇', '🍈', '🍎');
console.log(fruits);

// splice: 원하는 부분의 데이터를 지움
fruits.splice(1); // 시작하는 인덱스부터 끝까지 다 지움
console.log(fruits);

fruits.push('🥝', '🍍', '🍑', '🍒', '🍇', '🍈', '🍎');
console.log(fruits);

fruits.splice(1, 3); //시작하는 인덱스부터 갯수만큼 지워줌
console.log(fruits);

fruits.splice(1, 1, '🥥', '🍊');
// 1번 인덱스부터 1개 지우고 그자리에 문자 추가
console.log(fruits);

// combine two arrays
const fruits2 = ['🍍', '🍑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: 데이터값으로 인덱스 찾기
console.log(fruits);
console.log(fruits.indexOf('🥥'));
console.log(fruits.indexOf('🍇'));
console.log(fruits.indexOf('🍍')); //없는값은 -1

// includes
console.log(fruits.includes('🍈')); //배열에 포함되어있는지
console.log(fruits.includes('🍍'));

// lastIndexOf
fruits.push('🥥');
console.log(fruits);
console.log(fruits.indexOf('🥥'));
console.log(fruits.lastIndexOf('🥥'));
