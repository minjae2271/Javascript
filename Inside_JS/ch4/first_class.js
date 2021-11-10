//함수도 객체다! => 일급객체
function add(x,y){
    return x+y;
}
add.result = add(1,2);
add.status = 'OK';
console.log(add.result);
console.log(add.status);

//변수나 프로퍼티 할당
const foo = 100;
const bar = function () {
    return 100;
};
const obj = {};
obj.baz = function () {
    return 200;
};
console.log(bar());
console.log(obj.baz());

//함수인자로 전달
const param = function(func) {
    func();
};
param(function () {
    console.log('function can be used as argument.');
});

//리턴값으로 활용
const rtn = function () {
    return function () {
        console.log('this function is return value');
    }
};
const res = rtn()
res();