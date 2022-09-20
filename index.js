//a+b =5
const a = new Promise((resolve,reject)=>{
    setTimeout( a =>{
        resolve(2)
    },1500)
}) ;
 const  b = f =>{
     return new Promise((resolve, reject) => {
        setTimeout(e=>{
            resolve(e + 4)
        },1000,f)
     })}

const c =  f =>{
    return new Promise((resolve, reject) => {
setTimeout(e=>{
   resolve(e+2)
},2000,f)
    })
}

const d = f =>{
   return new Promise((resolve, reject) => {
    setTimeout(e=>{
        resolve(e + 2)
    },2000,f)
   })
}

const e = new Promise((resolve,reject)=>{
    setTimeout( ()=>{
        resolve(11)
    },2000)
}); 

const f = b =>{
    return new Promise((resolve, reject) => {
        setTimeout(d=>{
            resolve(d + e)
        },1000,b)
    })
} 



a
.then(f =>{
    console.log(3+f);
    return b(3)
})

.then((e)=>{
    console.log(e)
    return c(e)
})

.then(e=>{
    console.log(e)
    return d(e);
})
.then(k=>{
    console.log(k)
    return e;
})

.then((e)=>{
console.log(e + 2)
return d(2);
})

.t




