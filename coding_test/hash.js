var dic = {};

var arr = ['m','m','w','t','f','f','m']

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
    if(dic[arr[i]] === undefined){
        dic[arr[i]] = 1
    } else {
        dic[arr[i]] += 1
    }
}

console.log(dic);

if('t' in arr){
    console.log('in!')
} else {
    console.log('no!')
}