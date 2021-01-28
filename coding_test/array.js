//최대최소
const N = 5;
var arr = '20 10 35 30 7'

arr = arr.split(' ').map(v=>parseInt(v));

var maxNumber = 0;
var minNumber = 9999999999;

for(var i=0; i<arr.length; i++){
    if(arr[i] > maxNumber){
        maxNumber = arr[i];
    }
    if(arr[i] < minNumber){
        minNumber = arr[i];
    }
}
console.log(maxNumber);
console.log(minNumber);