//참조타입의 특성
var objA = {
    val:40
}

var objB = objA;

console.log(objA);
console.log(objB);

objB.val = 50;

console.log(objA);
console.log(objB);

//객체비교
