//1.객체의 메서드 호출할 때 this 바인딩
var myObject = {
    name: 'foo',
    sayName: function(){
        console.log(this.name);
    }
};

var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();

//2.함수를 호출할 때 this 바인딩 => 함수는 전역객체에 바인딩 된다.
var test = "this is test";

var sayFoo = function() {
    console.log(this.test);
}

sayFoo();

//3.내부함수의 this 바인딩
//내부함수 호출 패턴이 정의가 안됨!, 내부함수 호출도 함수로 취급
var value = 100;

var object = {
    value:1,
    func1: function() {
        this.value+=1;
        console.log("func1 called, this.value" + this.value);

        func2 = function() {
            this.value+=1;
            console.log("func2 called, this.value" + this.value);

            func3 = function() {
                this.value+=1;
                console.log("func3 called, this.value" + this.value);
            }
            func3();
        }
        func2();
    }
}
object.func1();

//3-1. that
var object2 = {
    value:1,
    func1: function() {
        var that = this;
        this.value+=1;
        console.log("func1 called, this.value" + this.value);

        func2 = function() {
            that.value+=1;
            console.log("func2 called, this.value" + that.value);

            func3 = function() {
                that.value+=1;
                console.log("func3 called, this.value" + that.value);
            }
            func3();
        }
        func2();
    }
}
object2.func1();