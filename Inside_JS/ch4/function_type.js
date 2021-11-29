//1. 내부함수
function parent(){
    const a = 10;
    const b = 20;

    function child(){
        const b = 300;

        console.log(a);
        console.log(b); //함수 내부에서는 부모함수의 변수에 접근이 가능하다.
    }
    child()
}

parent()
// child() //일반적으로 자신이 정의된 부모함수 내부에서만 호출이 가능하다.

//2.함수를 리턴하는 함수
var self = function () {
    console.log('a');
    return function () {
        console.log('b');
    }
}

self = self()
self()


//3.즉시실행함수
(function (name) {
    console.log('this is immediate function ' + name);
})('foo')