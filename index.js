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


// const myPromise = new Promise((resolve, reject)=>{
// const username = "admin";
// const password = "password";
// if(username === "admin" && password === "password"){
//     resolve("Success");
// } else {
//     reject("Invalid username or password");
// }
// })

// const orderReceive = new Promise((resolve, reject) => {

//         resolve("Order Received");

// });



// myPromise.then((msg)=>{
//     console.log(msg);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is settled");
// })


// async function handleData() {
//     try {
//         const msg = await myPromise;
//         if (msg === "Success") {
//             const orderMsg = await orderReceive;
//             setTimeout(() => {
//                 console.log(orderMsg);
//             }, 1000);
//         }



//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Promise execution completed.");
//     }
// }

// handleData();


// function OrderReceive() {
//   return  new Promise((reslove) => {
//         setTimeout(() => {
//             reslove("Order Received");
//         }, 1000);

//     })
// }



// orderReceive().then((status)=>{
//     console.log(status);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Order process completed.");
// })


// function OrderPrepare() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order Prepared");
//         }, 2000);
//     });
// }



// function OrderDispatch() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order Dispatched");
//         }, 3000);
//     });
// }


// function OrderDelivered() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order Delivered");
//         }, 4000);
//     });
// }

// async function orderHandler() {
//     try {
//         const received = await OrderReceive();
//         console.log(received);

//         const prepared = await OrderPrepare();
//         console.log(prepared);

//         const dispatched = await OrderDispatch();
//         console.log(dispatched);

//         const delivered = await OrderDelivered();
//         console.log(delivered);

//         console.log("Order process completed.");
//     } catch (error) {
//         console.log(error);
//     }
// // }

// orderHandler();



const button = document.getElementById("btn");
const container = document.getElementById("container");
console.log(button);
async function fetchData() {
    try {
        const serverData = await fetch("https://fakestoreapi.com/products")
        const jsonData = await serverData.json();
        console.log(jsonData);
        //container.innerHTML = 'JSON.stringify(${jsonData})'
    } catch (e) {
        //loading.innerHTML = '<h2>Something went wrong</h2>'
    } finally {
        //loading.innerHTML = '';
    }
}
    button.addEventListener('click', fetchData)
    fetchData()





