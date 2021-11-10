
//hoist yes
console.log(add(2,3));

function add(x,y){
    return x+y;
}
console.log(add(4,5));


//hoist no
console.log(add2(2,3));

const add2 = function (x,y){
    return x+y;
}
console.log(add2(4,5));