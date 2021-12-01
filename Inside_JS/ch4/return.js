//일반적으로 함수는 리턴값을 지정하지 않을 경우, undefine 값이 리턴된다.
var noReturnFunc = function() {
    console.log("Nooo return!");
};

var result = noReturnFunc();
console.log(result);


//생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    //명시적으로 다른 객체 리턴
    return {
        name: 'bar',
        age: 20,
        gender: 'man',
    }
};

var foo = new Person('foo',30,'woman');
console.dir(foo);