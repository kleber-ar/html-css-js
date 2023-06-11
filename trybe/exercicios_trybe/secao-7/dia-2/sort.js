const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];
/* Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente. */

// Adicione seu código aqui

people.sort((personA, personB) => personB.age - personA.age);

console.log(people);
