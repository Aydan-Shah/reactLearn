// const sayHello = () => {
//     console.log("Say Hello");
// }
// sayHello();

// const getUser = (fullName) => {
//     console.log(`Hello ${fullName}`);
// }
// getUser("Aydan Shah");

// CALLBACK
// const getUser = (getUserDataFunc) => {
//     getUserDataFunc("Aydan Shah")
// }
// getUser((userFullName)=> {
//     console.log(`${userFullName} | Developer`)
// })

// ***********************************

// fetch
// import fetch from "node-fetch";
// fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((products) => {
//         console.log(products);
//         fetch("https://fakestoreapi.com/users")
//             .then((response) => response.json())
//             .then((users) => {
//                 console.log(users);
//                 fetch("https://fakestoreapi.com/carts")
//                     .then((response) => response.json())
//                     .then((carts) => {
//                         console.log(carts)
//                     })
//             })
//     })

// ***********************************

// async await

const getApiData =  async () => {
    const getProducts = await (await fetch("https://fakestoreapi.com/products")).json();
    const getUsers = await (await fetch("https://fakestoreapi.com/users")).json();
    console.log(getProducts)
    console.log("********************")
    console.log(getUsers)
}
getApiData()