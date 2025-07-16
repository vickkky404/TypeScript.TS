function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Vickky"));


function greet2(name: string, age?: number) {
  console.log(name, age);
}

greet2("Vickky");
greet2("Vickky", 25);
