//1. 함수 리터럴
//function name은 선택 사항임을 주목!
function add(x,y) {
    return x+y;
}

//2. 함수 선언문 방식 == 함수 리터럴

//3. 함수표현식
// 함수 리터럴로 하나의 함수(익명함수)를 만들고 여기서 생성된 함수를 변수에 할당하여 함수를 생성
// add2 => 함수변수
const add2 = function (x,y) {
    return x+y;
};

console.log(add2(3,4));

//4.기명함수 표현식 호출
const add3 = function sum(x,y) {
    return x+y;
};

console.log(add3(3,4));
//console.log(sum(3,4)); //eferenceError: sum is not defined

//5.예제
const facConst = function fac(n) {
    if(n<=1){
        return 1;
    }
    return n * fac(n-1);
};
console.log(facConst(3));
//console.log(fac(3)); //ReferenceError: fac is not defined

//함수 표현식은 함수 끝에 ; 권장