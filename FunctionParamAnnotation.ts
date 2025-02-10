//First Example
function add(num1 : number,num2 : number){

    return num1 * num2

}

console.log(add(1,2));

//Second Example
function mineName (name: string = "Anonymous") {
    return `My name is ${name}`
}
console.log(mineName())