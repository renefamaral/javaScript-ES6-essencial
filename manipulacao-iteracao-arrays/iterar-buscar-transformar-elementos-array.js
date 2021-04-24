const cars = ['Corsa', 'Uno', 'Fiat 147', 'Fusca', 'Brasília'];

// forEach - iteração de cada item de um array

cars.forEach((value, index) => { // para cada item em cars. O primeiro parâmetro é o nome que deseja, enquanto o segundo é o index
    console.log(`${index}: ${value}`); // imprima o index: valor
});

console.log();

var cores = ['vermelho', 'verde', 'azul']; // exemplo de forEach comum
cores.forEach(function(cor){
    console.log(cor);
});

console.log();

cores.forEach(cor => console.log(cor)); // exemplo de forEach ES6 - PREFERÍVEL
console.log();
cores.forEach((cor, index) => console.log(`${index}: ${cor}`)); // adicionando o index
console.log();
cores.forEach((cor, index, arr) => console.log(`${index}: ${cor} - [${arr}]`)); // mostrando os índices, cores e o array completo




// map - Retorna um novo array, de mesmo tamanho, iterando cada item de um array. É IMUTÁVEL, NÃO ALTERA A REFRÊNCIA DO ARRAY

console.log();

const numbers = [1, 3, 5, 7, 9];

numbers.map((number, index) => console.log(`Índice ${index}: ${number * 2} - [${numbers}]`)); // retorna cada valor contido no array multiplicado por 2.
console.log(numbers);



// flat - Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo
// com a profundidade especificada(depth) / IMUTÁVEL, NÃO ALTERA AS PROPRIEDADES DO ARRAY DE ORIGEM

console.log();

const arr = [1, 2, [3, 4, [5, 6]]];

const arr2 = arr.flat(1); // função flat transformará com base na profundidade informada (2) tudo num único array // por default a profundidade é 1.
console.log(arr);
console.log(arr2);



// flatMap - Retorna um novo array assim como a função map e 
// executa um flat de profundidade 1

console.log();

const arr3 = arr2.flatMap(value => [value * 2]);
console.log(arr3); 



// keys - Retorna um Array Iterator que contém as chaves para cada elemento do array

console.log();

const arr4 = [15, 25, 35, 45];

const arr4Iterator = arr4.keys(); // pega todas as chaves do array(índices) ou seja, 0, 1, 2 e 3 e cria um iterator.


console.log(arr4Iterator.next());
// {value: 0, done: false}

console.log(arr4Iterator.next());
// {value: 1, done: false}

console.log(arr4Iterator.next());
// {value: 2, done: false}

console.log(arr4Iterator.next());
// {value: 3, done: false}

console.log(arr4Iterator.next());
// {value: undefined, done: true}





// values - Retorna um Array Iterator que contém os valores para cada elemento do array


console.log();

const arr5 = [10, 20, 30, 40];

const arr5Iterator = arr5.values(); // pega todas os valores do array, ou seja, 10, 20, 30 e 40 e cria um iterator.

console.log(arr5Iterator.next());
// {value: 10, done: false}

console.log(arr5Iterator.next());
// {value: 20, done: false}

console.log(arr5Iterator.next());
// {value: 30, done: false}

console.log(arr5Iterator.next());
// {value: 40, done: false}

console.log(arr5Iterator.next());
// {value: undefined, done: true}




// entries - Retorna um Array Iterator que contém os pares chave/valor para cada elemeto do array

console.log();

const arr6 = [12, 23, 34, 48];

const arr6Iterator = arr6.entries(); // pega todas o índide e os valores do array, ou seja,{1 - 12}, {2 - 23}, {,3 - 34} e {4 - 48} e cria um iterator.

console.log(arr6Iterator.next());
// {value: [0, 12], done: false}

console.log(arr6Iterator.next());
// {value: [1, 23], done: false}

console.log(arr6Iterator.next());
// {value: [2, 34], done: false}

console.log(arr6Iterator.next());
// {value: [3, 48] done: true}

console.log(arr6Iterator.next());
// {value: undefined, done: true}




//find (buscar) - Retorna o primeiro item do array que satisfaz a condição

console.log();

const arr7 = [50, 60, 70, 80];

const firstGreaterThanSixty = arr7.find(value => value > 60);

console.log(firstGreaterThanSixty);





// findIndex (busca pelo índice) - Retorna o índice do primeiro item de um array que satisfaz a condição

console.log();

const arr8 = [55, 65, 75, 85];

const firstIndexGreaterThanTwo = arr8.findIndex(value => value > 65); // retorna o primeiro index no qual o valor seja maior que 65
console.log(firstIndexGreaterThanTwo);





// filter (IMUTÁVEL) - Retorna um novo array com todos os elementos que satisfazem a condição


console.log();

const arr9 = [9, 18, 27, 36];

const allValuesGreaterThanNine = arr9.filter(value => value > 9); // retornando todos os valores que sejam superiores a 9
console.log(allValuesGreaterThanNine);






// indexOf - Retorna o primeiro índice em que um elemento pode ser encontrado no array


console.log();

const arr10 = [7, 14, 21, 28, 21, 21];

const firstIndexOfItem = arr10.indexOf(21); // retorna o índice onde ocorre a primeira localização do valor desejado
console.log(firstIndexOfItem);




// lastIndexOf - Retorna o último índice em que um elemento pode ser encontrado no array


console.log();

const arr11 = [8, 16, 24, 28, 16, 8];

const lasttIndexOfItem = arr11.lastIndexOf(8); // retorna o índice onde ocorre a última localização do valor desejado
console.log(lasttIndexOfItem);





// includes - Retorna um booleano verificando se determinado elemento existe no array

console.log();

const arr12 = [4, 8, 12, 16, 20];

const hastInArray = arr12.includes(12); // verifica se o item está no array
console.log(hastInArray);




// some - Retorna um booleano verificando se pelo menos um item de um array satifaz a condição


console.log();

const students = [
    {name: 'Rene' , grade: 5},
    {name: 'Walter', grade: 8},
    {name: 'Magda', grade: 9}
    
];

console.log(students.some(student => student.grade > 5)); // mostra através de booleano se algum aluno que tem nota maior que 5

console.log(students.filter(student => student.grade > 5)); // mostra todos os aluno(s) que tem nota maior que 5

console.log(students.findIndex(student => student.grade > 5)); // mostra através de booleano se algum aluno tem nota maior que 5




// every - Retorna um booleano verificando se todo os itens de um array satisfazem a condição


console.log();

const arr13 = [2, 4, 6, 8];

const allEvenNumbers = arr13.every(value => value % 2 === 0); // verifica se todos o valores no array são pares.
console.log(allEvenNumbers);







// sort - Ordena os elementos de um array de acordo com a condição

console.log();

const athletes = [
    {name: 'Bolt' , grade: 5},
    {name: 'R10', grade: 8},
    {name: 'R9', grade: 9}
    
];

console.log(athletes.sort((current, next) => current.grade - next.grade)); // retorna um array ordenado em ordem crescente.
console.log(athletes.sort((current, next) => next.grade - current.grade)); // retorna um array ordenado em ordem decrescente.





// reverse - Inverte os elementos de um array

const arr14 = [5, 6, 7, 8, 9];

console.log(arr14.reverse());





// join - Junta todos os elementos de um array, separados por um delimitador e retorna uma string

console.log();

const arr15 = [1, 2, 3, 4, 5];
console.log(arr15.join(' - ')); // adicionando delimitador no array





// reduce - Retorna um novo tipo de dado iterando cada posição de um array

console.log();

const arr16 = [1, 2, 3, 4];
const result = arr16.reduce((total, value) => total += value, 0); // O 1° parâmetro é o que quero retornar, o 2° onde será armazenado. O zero no final indica o valor que queremos acrescentar, neste caso o valor que será acrescentado na soma.

console.log(result);


console.log();

const person = ['Magda', 'Rene', 'Ana', 'Lucas'];

const person1 = person.reduce((personName, person) => personName += person + ' ', ' '); // utilizando o recuce para retornar uma string com todos os nomes // As últimas aspas indicam o parâmetro que será retornado, neste caso String.
console.log(person1);
