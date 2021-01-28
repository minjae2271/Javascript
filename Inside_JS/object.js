//1.Object 생성자 함수
var foo = new Object()

foo.name = "foo";
foo.age = 30;
foo.gender = 'male';
console.log(foo);


//2.객체리터럴
var foo1 = {
    name: 'foo1',
    age: 50,
    gender: 'female'
};;
console.log(foo1);


//3.객체 프로퍼티 접근하기
console.log(foo.name);
console.log(foo["age"])

// 4.프로퍼티 갱신
foo.name = "MJ";
foo["age"] = 31;
console.log(foo.name);
console.log(foo["age"])

//5.프로퍼티 동적생성
foo.major = "IE";
foo["address"] = "NY"
foo["full-name"] = "MJ Gwon"
console.log(foo.major);
console.log(foo["address"]);
console.log(foo["full-name"]);
//접근하려는 프로퍼티가 표현식이거나 예약어일 경우 => []로 접근
//console.log(foo.full-name);

//6.for in
for(var props in foo) {
    console.log(props, foo[props]);
}

//7.객체 삭제
delete foo.address
console.log(foo)