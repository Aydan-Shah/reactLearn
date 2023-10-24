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

// const getApiData =  async () => {
//     const getProducts = await (await fetch("https://fakestoreapi.com/products")).json();
//     const getUsers = await (await fetch("https://fakestoreapi.com/users")).json();
//     console.log(getProducts)
//     console.log("********************")
//     console.log(getUsers)
// }
// getApiData()

// ***********************************

// axios
import axios from "axios";
// const getApiData =  async () => {
//     const {data : getProducts} = await axios("https://fakestoreapi.com/products");
//     const {data : getUsers} = await axios ("https://fakestoreapi.com/users");
//     console.log(getProducts)
//     console.log("********************");
//     console.log(getUsers)

// }
// getApiData()

// ***********************************

// Promise

// const getProducts = (statusCode) => {
//     return new Promise((resolve, reject) => {
//         // console.log("List of products")
//         if(statusCode === 200) {
//             resolve("List of products")
//         } else {
//             reject("Error")
//         }
//     })
// }
// getProducts(500).then(response => console.log(response)).catch(error=> console.log(error));


const getProducts = (statusCode) => {
    return new Promise(async(resolve, reject) => {
        // console.log("List of products")
        if(statusCode === 200) {
            const {data} = await axios("https://fakestoreapi.com/products")
            resolve(data)
        } else {
            reject("Error")
        }
    })
}
getProducts(200).then(response => console.log(response)).catch(error=> console.log(error));
// const products = await getProducts(200)
// console.log(products)