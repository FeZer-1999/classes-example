const arr = [1, 2, 3, 4, 5, 6];

//arrow_functions

// ----------------------
// devolve um novo Array como resultado.
const squareArr = arr.map(item => item * item)

console.log(squareArr);

// ----------------------
// atribui o valor de retorno ao acumulador.
const sum = arr.reduce((total,next) => total + next)

console.log(sum);

// ----------------------
// retorna os numeros pares ou ímpares do array
const filter = arr.filter(item => item % 2 === 0)

console.log(filter);

// ----------------------
// verificar se existe uma certa info no array
const find = arr.find(item => item === 4)

console.log(find);





