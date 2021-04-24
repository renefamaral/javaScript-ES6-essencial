const users = ['Guilherme', 'Pedro', 'Jenifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },

    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },

    {
        name: 'Jenifer',
        age: 18,
        gender: gender.WOMAN
    }
];

// // Retornar a quantidade de itens de um array
// console.log('Items:', persons.length);

// // Verificar se é array
// console.log('A variável person é um array: ', Array.isArray(persons));

// // Iterar os itens do array
// persons.forEach((person, index, arr) => { // o primeiro parâmetro (person) é o item que ele está iterando / Podemos tbm pegar o index e o array corrente como um todo
//     console.log(`Nome: ${person.name} index: ${index}`, arr); // pegando o nome, index e dando log no array
// });


/**
 * Conceitos de mutabilidade. 
 * filter, map e reduce não alteram a referência do objeto, retornam um novo objeto. 
 * Lembrando que arrays e funções também são objetos.
 */



// // Filtrar array
// const mens = persons.filter(person => person.gender === gender.MAN); // filter é uma condicional.
// console.log('\nNova lista apenas com homens:', mens);

// // Retornar um novo
// const personsWithCourse = persons.map(person => { // adicionando uma propriedade no array. O map possibilita a criação de um novo array para não alterarmos a propriedade do array anterior, que no caso é o persons.
//     person.course = 'Introdução ao JavaScrpit'
//     return person;
// });

// console.log('\nNúmero de pessoas com adição do course: ', personsWithCourse);


// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => { // o reduce permite transformar o array em um outro tipo. totalAge é um number. O primeiro parâmetro é o novo tipo que retorna, nesse caso uma variável (age). 
    age += person.age;
    return age; // não podemos esquecer a propriedade que utilizamos no reduce. É comum esquecer no dia a dia.
}, 0); // o segundo parâmetro é o valor inicial da propriedade, que nesse caso é 0.

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons // soma da idades de todas as pessoas que possuem idade par
                        .filter(person => person.age % 2 === 0) // retorna um novo array filtrado
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);
                        
console.log('\nSoma de idades das pessoas que possuem idade par:', totalEvenAges);
