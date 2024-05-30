// ===========Print on console============
// console.log("Hello World");


// ==============variable============
// var name = "Aditya";
// console.log(name);
// let age = 20
// console.log(age)
// const age = 34;
// age = 67;

// =========Basic operators=======
// let x = 10;
// let y = 5;
// console.log(x + y); // Addition
// console.log(x - y); // Subtraction
// console.log(x * y); // Multiplication
// console.log(x / y); // Division
// console.log(x % y); // Modulus (remainder)
// console.log(x ** y);


// let name = "Aditya"
// let age = 18;
// console.log(`My name is ${name} and my age is ${age}`)

// let fruits = ["apple", "mango", "banana"];
// // fruits.sort()
// const sortedFruits = fruits.toSorted();
// console.log(fruits);
// console.log(sortedFruits);

// let person = {
//     name: "Aditya",
//     age: 18,
//     address: "Gwalior",
//     profession: "Programmer"
// }
// console.log(person.address)

// const d = new Date()
// console.log(d)



// ======conditional statements============
// let age = 4;
// if (age > 18) {
//     console.log("Eligible for voting");
// } else {
//     console.log("Not eligible for voting");
// }



// ==========Loops============
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }

// const fruits = ["apple", "mango", "banana"];
// fruits.forEach((items) => { console.log(items) })

// ============= Functions ===========

// function greet(name) {
//     console.log(`Good Morning ${name}`);
// }
// greet("Aditya")

// function add(x, y) {
//     return x + y;
// }
// let sum = add(3, 6)
// console.log(sum)

// const greet = (name) => { console.log(`Good Morning ${name}`) }
// greet("aditya")

// const add = (x, y) => x + y;
// console.log(add(5, 6));

// ======= map , filter , reduce ========
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sqArray = number.map((x) => x ** 2);
// console.log(sqArray)
// const even = number.filter((x) => x % 2 === 0)
// console.log(even)

// if (3 === "3") {
//     console.log("true")
// }
// else {
//     console.log(false)
// }




// ============ DOM: Document Object Model ==========
// const parent = document.querySelector("#container2")
// // console.log(parent);

// parent.style.backgroundColor = "green";

// var numberElement = document.getElementById("number");

// function increment() {
//     var number = parseInt(numberElement.innerHTML);
//     number = number + 1;
//     numberElement.innerHTML = number;
// }
// function decrement() {
//     var number = parseInt(numberElement.innerHTML);
//     number = number - 1;
//     numberElement.innerHTML = number;
// }
// // .addEventListener
// numberElement.addEventListener("mouseleave", (event) => {
//     event.preventDefault();
//     numberElement.style.backgroundColor = "black";
// })
// var Btn = document.getElementById("increment");
// Btn.addEventListener("mouseover", (event) => {
//     event.preventDefault();
//     numberElement.style.backgroundColor = "blue";
// })


// ============ Try catch ===========

// try {
//     let x = 10;
//     let y = 4;
//     if (y == 0) {
//         throw new Error("Zero Division Error")
//     }
//     let z = x / y;
//     console.log(z)
// } catch (error) {
//     console.log("Error: ", error)
// }

// let promise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })

// promise
//     .then((value) => { console.log(value) })
//     .catch((error) => { console.log(error) })


// async function fechData() {
//     let data1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data 1");
//         }, 2000)
//     })
//     let data2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data 2");
//         }, 7000);
//     })
//     console.log("Fecthing data 1 .....")
//     let result1 = await data1;
//     console.log(result1)
//     console.log("Fecthing data 2 .....")
//     let result2 = await data2;
//     console.log(result2)
// }

// fechData();

// fetch("https://jsonplaceholder.typiode.com/posts")
//     .then((response) => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.log(error))

// async function fetchdata (){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     console.log(data);
// }
// fetchdata()




async function fetchdata() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    // console.log(data);
    const container = document.getElementById("post")
    data.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("postElement");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p><strong>User ID:</strong> ${post.userId} <strong>Post ID:</strong> ${post.id}</p>
            <hr/>
        `;
        container.appendChild(postElement);
    });
}

fetchdata()