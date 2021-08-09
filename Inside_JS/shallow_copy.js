//배열 속 배열
const arr = [[1,'a'], [2,'b']];

const arr_shallow = [...arr];


//객체 속 객체
const obj = {'1': {1: 'a'}, '2': {2: 'b'}};

const obj_shallow = {...obj}

console.log('go')
console.log(arr === arr_shallow); //false
console.log(arr[0] === arr_shallow[0]) // true