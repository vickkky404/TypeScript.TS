// functions in TypeScript..

// 1.A Function to add two number
function add(a: number , b: number): number {
    return a+b;
}

// 2. A function to greet a user
function greet(name: string): string {
    return  'Hello, ${name} ! Welcome to typescript';
}

// 3. A function with an optional parameter...
function introduction(name: string , age?: number): string {
    if(age) {
        return 'My name is ${name} and I am ${age} years old.'
    }
    return 'My name is ${name}.';
}

console.log("SUM: " ,  add(10 , 20));
console.log(greet("Nalinikant ji"));
console.log(introduction("Nalinikant" , 22));
console.log(introduction("Vicky"));




