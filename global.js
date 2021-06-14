const speak = () => {
    console.log("hello world");
}

speak();

//Global Object 
// console.log(global);

setTimeout( () => {
    speak();
    clearInterval(gt);
} ,3000)

const gt = setInterval(() => {
    greet("Aniket");
}, 1000);

const greet = (name) => {
    console.log(`Hello ${name}`);
}

console.log(__dirname);
console.log(__filename);