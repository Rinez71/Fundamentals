/*
 * Objects, Interfaces, and API's
 */

/*Objects: Contain 1. State(Current information that describes the object) and 2. Functionality(
Actions or changes the object can make to itself or outside world)
 */

let dog = {
    name: "Penny",
    color: "tan",
    breed: "Puggle",
    size: "small",
    bark: function (typeOfBark){
        console.log("Bark!");
    },
};

/*
Passing by value inside of function only the value of data is imported
Passing by reference only points to the original data
 */

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);