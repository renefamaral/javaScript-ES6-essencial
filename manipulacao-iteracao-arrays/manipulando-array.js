const persons = Array.of('John', 'Cris', 'Jenny');
console.log(persons);

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto');
console.log(numbersAndStrings);

//Criando uma nova instância de array de acordo com os parâmetros informados

const arr = Array(3) // um parâmetro com 1 tipo inteiro cria array a quantidade de posições vazias selecionadas

const arr2 = Array(3, 2); // se passarmos mais de um parâmetro ele criará o array contendo o parâmetro informado e não o tamanho.

console.log(arr);
console.log(arr2);

// Criando uma nova instância de array a partir de um parâmetro array-like ou iterable object

// array-like pode ser um NodeList
// iterable object é o set map

// const divs = document.querySelectorAll('div') // document.querySelectorAll() retorna uma lista de elementos presentes no documento que coincidam com o grupo de seletores especificados. O obejto retornado é uma NodeList. // Todas as divs encontradas na página serão armazenadas aqui dentro.

// const arr3 = Array.from(divs) // convertendo a NodeList acima num array. // testes executados no console do browser.
// console.log(arr3);


// push - Adiciona um ou mais elementos no final do array e retorna o tamanho do novo array

const frutas = ['melancia', 'banana'];
console.log(frutas);

const frutas2 = frutas.push('Laranja');
console.log(frutas);
console.log(frutas2);

// pop - Remove o último elemento de um array e retorna o elemento removido

const removedItem = frutas.pop(); // retorna o item removido
console.log(removedItem);
console.log(frutas);


// unshift - adiciono um ou mais elementos no início do array e retorna o tamanho do array

const addItem = frutas.unshift('Cereja');
console.log();
console.log(addItem); // retorna o tamanho do array após inclusão
console.log(frutas); // retorna os itens do array após a inclusão

// shift - remove o primeiro elemento de um array e retorna o elemento removido

const removeInitialItem = frutas.shift();
console.log();
console.log(removeInitialItem);
console.log(frutas);

// concat - concatena um ou mais arrays retornando um novo array

const cars = ['Fiesta', 'Saveiro', 'Gol'];
const bestCars = ['Civic', 'Corolla', 'Fusion'];

const allCars = cars.concat(bestCars); // o interessante é que o concat não altera os arrays anteriores, ou seja, ele é imutável.
console.log();
console.log(allCars);

// slice - retorna um novo array "fatiando" o array de acordo com ínicio e fim - O slice é imutável

const fatiando = allCars.slice(0, 2); // o primeiro parâmetro é o índice inicial enquanto o segundo é o índice final o qual não será carregado
console.log();
console.log(fatiando);

const fatiando1 = allCars.slice(2); // o valor informando representa a partir de qual índice a variável pegará os valores
console.log();
console.log(fatiando1);

const fatiando2 = allCars.slice(-1); // seleciona o item que está no último índice do array
console.log();
console.log(fatiando2);

const fatiando3 = allCars.slice(-3); // seleciona os três últimos itens do array
console.log();
console.log(fatiando3);

// splice - altera um array adicionando novos elementos enquanto remove elementos antigos

const removeOldCars = allCars.splice(2); // removendo todos os carros a partir do índice 2. // ELE ALTERA O ARRAY ORIGINAL
console.log();
console.log(allCars);
console.log(removeOldCars);

const addNewCars = allCars.splice(1, 2, 'X1', 'UX 250h'); // o primeiro parâmetro informa a partir de qual índice quero adicionar item(ns). O segundo parâmetro informa quantos itens que apagar/sobscrever. Os itens posteriores é o que deseja ser adicionado.
console.log();
console.log(addNewCars); // carrega os item que foram excluídos
console.log(allCars); // mostra o array alterado após as inserções e exclusões.









