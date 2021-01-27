// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // join: 배열을 string으로 저장
  const result = fruits.join('^'); // ^가 없으면 기본은 ,(콤마)
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // split: string을 배열로 저장
  const result = fruits.split(','); //구분자
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // reverse: 배열안에 순서를 거꾸로 만듦
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열 자체를 뒤집음
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // slice: 배열에서 원하는 부분만 받아옴
  // splice: 배열 자체를 수정
  const result = array.slice(2, 5); // 5는 배제됨(4까지 출력)
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find: 첫번째로 true가 나오면 그 배열의 요소를 리턴
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter: 우리가 원하는 조건을 가진 요소만 출력
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map: 배열의 값을 콜백함수에서 리턴해준 값으로 대체
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // some: 하나라도 true 가 나오면 true
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // every: 전체가 true면 true
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // reduce: 배열을 돌며 어떤 값을 누적할때 사용
  // reduceRight: 배열을 반대로 돌아서 누적함
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);

  /*
  const result = students.reduce((prev, curr) => {
    console.log('----------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score; //리턴값이 다음의 prev값이 됨
  }, 0);
  console.log(result / students.length);
  */
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // sort:
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // a - b가 마이너스면 작은수 부터
    .join();
  console.log(result);
}
