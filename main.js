import getType from "./gettype";
import random from "./getRandom";

// 덧셈
console.log(1 + 2); // 3

// 뺄셈     
console.log(1 - 2); // -1

// 곱셈
console.log(1 * 2); // 2

// 나눗셈
console.log(1 / 2); // 0.5

// 나머지
console.log(1 % 2); // 1

// 거듭제곱
console.log(2 ** 3); // 8   

// 단항 산술 연산자
let x = 1;

//비교 연산자

// 동등 비교
console.log(1 == 1); // true

// 일치 비교
console.log(1 === '1'); // false

// 대소 비교

console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 1); // true
console.log(1 <= 1); // true

// 논리 연산자

// NOT
console.log(!true); // false
console.log(!false); // true

// AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 삼항 연산자

// 세 개의 피연산자를 이용해 조건에 따라 값을 결정할 수 있다.
// 조건 ? 조건이 참이면 값 1 실행 : 조건이 거짓이면 값 2 실행
let flag = true;
console.log(flag ? '참' : '거짓'); // 참

// 할당 연산자
let a, b, c

a = 1;
console.log(a); // 1

a += 1;
console.log(a); // a = a + 1 => a = 2

a -= 1;
console.log(a); // a = a(2) - a(1) = 1

a *= 3;
console.log(a); // a = a(1) * a(3) = 3

a /= 3;
console.log(a); // a = a(3) / a(3) = 1

a %= 3;
console.log(a); // a = a(1) % a(3) = 1

a **= 3;
console.log(a); // a = a(1) ** a(3) = 1



a = 2;

a **= 3;
console.log(a); // 8


// 쉼표 연산자



a = 1, b = 2, c = 3;

console.log(a, b, c); // 1 2 3

// 비트 연산자

// NOT
console.log(~5); // -6

// AND
console.log(5 & 3); // 1

// OR
console.log(5 | 3); // 7

// XOR
console.log(5 ^ 3); // 6

// 왼쪽 시프트
console.log(5 << 1); // 10

// 오른쪽 시프트
console.log(5 >> 1); // 2


//if문
console.log(random());

const number = random();

if (number === 0) {
    console.log('number is 0');
} else if (number === 2) {    
    console.log('number is not 0');
} else {
    console.log('number is not 0 and 2');
}
//switch문
switch (number) {
    case 0:
        console.log('number is 0');
        break;
    case 2:
        console.log('number is not 0');
        break;
    default:
        console.log('number is not 0 and 2');
}

getType(1); // 'Number'
getType('test'); // 'String'
getType(true); // 'Boolean'
getType(null); // 'Null'
getType([]); // 'Array'
getType({}); // 'Object'
getType(new Map()); // 'Map'
getType(Symbol()); // 'Symbol'
getType(undefined); // 'Undefined'
getType(function() {}); // 'Function'

//for문 
// for (시작조건; 종료조건; 변화조건) {}
//i++는 i += 1과 같다.
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

//변수 유효범위
// var, let, const
// var: 함수 스코프
// let, const: 블록 스코프
// var는 함수 스코프를 가지므로 블록 스코프를 가지지 않는다.
// var는 함수 내에서 선언한 변수는 함수 내에서만 유효하다.

function scope() {
    if (true) {
        var a = 123;
        let b = 123;
        const c = 123;
    }
    console.log(a); // 123
    console.log(b); // ReferenceError: b is not defined
    console.log(c); // ReferenceError: c is not defined
}

scope();

//형 변환
// 문자형으로 변환
// Truthy한 값: true, {}, [], 1, 2, 'false', -12, '3.14', ...
// Falsy한 값: false, '', null, undefined, 0, -0, NaN

// String()
console.log(String(1)); // '1'
console.log(String(true)); // 'true'
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'

console.log((1).toString()); // '1'
console.log(true.toString()); // 'true'
console.log(1 =='1'); // true
console.log(1 ==='1'); // false

//함수
// 함수는 코드를 재사용하기 위해 사용한다
// 함수는 인수를 받아서 결과를 반환한다.
// 함수는 매개변수를 가질 수 있다.
// function 함수이름(매개변수) {내용}


// 함수 선언문
// function 함수이름(매개변수) {
//     내용
// }


// function sum(x, y) {

//     return x + y;
// }

// 함수 표현식

// const sum = function (x, y) {

//     return x + y;
// }

// 화살표 함수
// 화살표 함수는 항상 익명 함수로 정의한다.
// 익명 함수는 이름이 없는 함수를 말한다.
// 화살표 함수는 항상 변수에 할당해서 사용한다.
// 화살표 함수는 함수 표현식을 간결하게 만들어준다.
// () => {} // 매개변수가 없을 때 vs function (일반 함수) {}
// x => {} // 매개변수가 하나일 때
// (x, y) => {} // 매개변수가 두개 이상일 때
// x => x * x // 중괄호 안에 return문만 있을 때
// (x, y) => x * y // 중괄호 안에 return문만 있을 때
// () => ({}) // 중괄호를 사용하여 객체를 반환할 때
// () => { return {} } // 중괄호를 사용하여 객체를 반환할 때
// 

// const sum = (x, y) => x + y;

// // 함수 호출
// 함수이름(인수);


// console.log(sum(1, 2)); // 3

// 매개변수
// 매개변수는 함수를 호출할 때 값을 전달하는 변수이다.
// 매개변수는 함수 내부에서 사용할 수 있는 변수이다.
// 매개변수 이름은 함수 내부에서만 유효하다.
// 

function sum(x, y) {//매개변수 x, y 선언
    
        console.log(x); // 1, 매개변수 x 사용
        console.log(y); // 2
    }

    sum(1, 2);

// 기본 매개변수

function sum(x = 1, y = 2) {
        
            console.log(x); // 1
            console.log(y); // 2
        }

        sum();

// 나머지 매개변수

function sum(...rest) {
                
    console.log(rest); // [1, 2, 3, 4, 5]
    }
sum(1, 2, 3, 4, 5);


// hoisting
// 호이스팅은 변수, 함수의 선언을 끌어올리는 것을 말한다.
// 함수 이름을 통해 함수를 유추할 수 있어서,
// 호이스팅을 이용해서 함수 선언문을 하단에 작성해도 상관없다. 

// 변수 호이스팅
// var는 선언과 초기화가 동시에 이루어진다.
// let, const는 선언과 초기화가 분리되어 진행된다.
// var는 선언과 초기화가 동시에 이루어지기 때문에 호이스팅이 발생한다.
// let, const는 선언과 초기화가 분리되어 있기 때문에 호이스팅이 발생하지 않는다.

// console.log(a); // undefined
// var a = 1;

// console.log(b); // ReferenceError: b is not defined
// let b = 2;

// 함수 호이스팅
// 함수 선언문은 전체 코드가 실행되기 전에 로드된다.
// 함수 표현식은 변수에 할당되는 시점에 로드된다.

//함수 선언문
sum(2, 3); // 5, 호이스팅 발생

function sum(x, y) {
    return x + y;
}

// 함수 표현식

// sum(2, 3); // TypeError: sum is not a function

// const sum = function (x, y) {
//     return x + y;
// }

//클로저

// 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
// 클로저는 함수가 생성될 당시의 외부 변수를 기억한다.

function makeCounter() {
    let num = 0;
    return function () {
        return num++;
    }
}

// 즉시 실행 함수
// 함수를 선언과 동시에 실행한다.
// 함수를 한 번만 실행할 때 사용한다.
// 전역 스코프의 오염을 막기 위해 사용한다.
// 즉시 실행 함수 사이에 세미콜론으로 문장을 종료한다.
// IIFE (Immediately Invoked Function Expression)
// 익명 함수를 사용한다.

// const a = 7;
// function double() {
//     console.log(a * 2);
// }
// double();//세미콜론 필수
console.log(a);
(function () {
    console.log(a * 2);
})();

(function () {
    console.log(a * 2);
}());

// 같다

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout

setTimeout(function() {
    console.log('안녕하세요!');
}, 3000);

setTimeout(() => {
    console.log('안녕하세요!');
}, 3000);//함수 선언문

// 1초(1000ms) 후에 실행
const timer = setTimeout(() => {
    console.log('Hi!');
}, 1000);//함수 표현식

// 2초(2000ms) 후에 실행
const h1 = setTimeout(() => {
    console.log('Hello!');
}, 2000);

// 3초(3000ms) 후에 실행

const h2 = setTimeout(() => {
    console.log('Hello!');
}, 3000);

// 4초(4000ms) 후에 실행
const h3 = setTimeout(() => {
    console.log('Hello!');
}, 4000);

// setInterval
// 1초(1000ms) 간격으로 실행
const interval = setInterval(() => {
    console.log('안녕하세요!');
}, 1000);

//clearTimeout 함수 호출
clearTimeout(timer);
clearTimeout(h1);
clearTimeout(h2);
clearTimeout(h3);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
    clearTimeout(timer);
});

//clearInterval
clearInterval(interval);


//콜백

// 콜백은 함수의 인수로 사용되는 함수이다.
// 함수 내부에서 어떤 시점에 호출되는 함수이다.
// 비동기 처리 방식으로 사용된다.
// 콜백 함수는 함수의 매개변수로 전달되어 어떤 이벤트가 발생한 후에 호출된다.

function getData(callback) { //콜백 함수를 인수로 전달받는다.
    setTimeout(() => {
        const data = {
            name: 'John',
            age: 22
        };
        callback(data);//콜백 함수 호출
    }, 1000);
}

getData(data => {
    console.log(data);
}
);

// 콜백 함수를 사용하는 이유
// 비동기 처리 방식으로 사용된다.
// 콜백 함수를 사용하지 않으면 동기 처리 방식으로 사용된다.
// 동기 처리 방식은 순서대로 실행되어 코드가 지연된다.
// 비동기 처리 방식은 순서대로 실행되지 않고 코드가 지연되지 않는다.

// function getData(callback) {

//     setTimeout(() => {
//         const data = {
//             name: 'John',
//             age: 22
//         };
//         callback(data);
//     }, 1000);
// }
// 함수의 인수로 콜백 함수를 전달한다.

// timeout 함수의 인수로 cb를 전달한다. 
// timeout 함수 내부에서 cb를 호출한다.
// 1초 뒤에 다음 작업을 실행한다.

function timeout(cb) {//함수 선언문, 매개변수 cb 선언
    setTimeout(() => {
        console.log('1초 뒤 실행');
        cb() //콜백 함수 호출
    }, 1000);

}

timeout(() => {
    console.log('다음 작업');
});


// 콜백 함수를 별도로 정의합니다.
function callbackFunction() {
    console.log('다음 작업');
}

// 위 함수를 상세히 표현함
// 'timeout' 함수를 정의합니다. 이 함수는 콜백 함수 'callbackFunction'를 매개변수로 받습니다.
function timeout(callbackFunction) {
    // 'setTimeout' 함수를 사용하여 비동기 작업을 수행합니다. 이 작업은 1초 후에 실행됩니다.
    setTimeout(() => {
        // 'setTimeout'으로 지정된 시간이 지난 후에 '1초 뒤 실행'이라는 메시지를 출력합니다.
        console.log('1초 뒤 실행');
        // 그 다음으로, 'cb' 콜백 함수를 호출합니다.
        callbackFunction();
    }, 1000);
}

// 'timeout' 함수를 호출하고, 앞서 정의한 'callbackFunction'을 인자로 전달합니다.
timeout(callbackFunction);


//화살표 함수로 인라인 정의함

//익명함수로 호출되는 함수를 인수로 전달한다.
//같은 표현


//콜백 함수  세가지
//함수 선언문 함수 호출, 굳이 cb를 사용하지 않아도 된다.
function cb() {
    console.log('다음 작업');
};

timeout(cb);

//인라인 정의
timeout(function() {
    console.log('다음 작업');
}
);

//익명함수
timeout(() => {
    console.log('다음 작업');
}
);





//timeout 함수를 호출한다.



    //콘솔 로그를 실행하는 익명 함수를 인수로 전달한다.
//timeout 함수 내부에서 인수로 전달된 익명 함수를 호출한다.
//timeout 함수 내부에서 인수를 받아줄 매개변수를 cb로 선언한다.




//콜백 지옥
// 콜백 지옥은 들여쓰기가 깊어지는 현상을 말한다.
// 콜백 지옥을 해결하는 방법은 Promise, async/await이 있다.

// Promise
// 비동기 작업을 위해 사용하는 객체이다.
