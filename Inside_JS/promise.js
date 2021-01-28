const condition = true;

const promise = new Promise((resolve, reject) =>{
    if(condition){
        resolve("success")
    } else {
        reject("fail")
    }
});

//다른 코드가 들어갈 수 있음

promise
    .then((message)=>{
        console.log(message);
    })
    .catch((message)=>{
        console.log(message);
    })
    .finally(()=>{
        console.log('무적권')
    });


//then의 then
promise
    .then((message)=>{
        return new Promise((resolve, reject)=>{
            resolve(message);
        });
    })
    .then((message2)=>{
        console.log(message2);
        return new Promise((resolve, reject)=>{
            resolve(message2);
        });
    })
    .then((message3)=>{
        console.log(message3);
    })
    .catch((error)=>{
        console.error(error);
    })

