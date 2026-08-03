// console.log("Hello, World!");
// console.log("Using Js");

// let a=54;
// if (a>10){
//    let a = 40
//     console.log("Hi a inside the block :",+a);
// }
// console.log("Hi a is now outside the block :",+a);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(24,6));

// const sum = (a,b) => {
//     return a+b;
// };
// console.log(sum(24,6));

// const data = function(msg){
//     console.log("Hello,I m using JS "+msg);
// };
// data("and Node");


// IIFE (Immediately Invoked Function Expression)

// (()=>{
//     console.log("Hey.. using and calling by IIFE");
// })();


//CALLBACK FUNCTION

// function sum(a,b){
//     return a+b;
// }
// function sumwithMsg(clbk,msg){
//     const result = clbk(24,6);
//     console.log("Hey your result is : "+result+" !! Welldone "+msg);
// }

// sumwithMsg(sum,"Abhishek");


// function login(msg, error){
//     if(error){
//         console.log("Error is : "+error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username, password, clbk ){
//     if(username === "admin" && password === "password"){
//         clbk("Login successful!", null);
//     }
//     else{
//         clbk(null, "Invalid username or password");
//     }
// }
// loginHandler("admin", "password", login);

// console.log("One")
// setTimeout(()=>{
//     console.log("Two")
// }, 100);
// console.log("Three")


// setTimeout(()=>{
//     console.log("One")
//     setTimeout(()=>{
//         console.log("Two")
//         setTimeout(()=>{
//             console.log("Three")
//             setTimeout(()=>{
//                 console.log("Four")
//                 setTimeout(()=>{
//                     console.log("Five")
//                     setTimeout(()=>{
//                         console.log("Six")
//                           setTimeout(()=>{
//                             console.log("Seven")
//                           },100)
//                     },100)
//                 },100)
//             },100)
//         },100)
//     },100)

// },100);


const myPromise = new Promise((resolve, reject)=>{
    const username = "admin";
    const password = "password";
    if(username === "admin" && password === "password"){
        resolve("Success");
    } else {
        reject("Invalid username or password");
    }
})

const orderReceive = new Promise((resolve, reject) => {

    resolve("Order Received");

});



// myPromise.then((msg)=>{
//     console.log(msg);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is settled");
// })


async function handleData() {
    try {
        const msg = await myPromise;
        if (msg === "Success") {
            const orderMsg = await orderReceive;
            setTimeout(() => {
                console.log(orderMsg);
            }, 1000);
        }



    } catch (error) {
        console.log(error);
    } finally {
        console.log("Promise execution completed.");
    }
}

handleData();