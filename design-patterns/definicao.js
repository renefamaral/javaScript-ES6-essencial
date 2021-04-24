/**
 * 
 * Design Patterns ou padrões de projetos são soluções generalistas
 * para problemas recorrentes durante o desenvolvimento de um 
 * software. Não se trata de um framework ou um código pronto, mas de uma
 * definição de alto nível de como um problema comum pode ser solucionado.
 * 
 * Os Padrões de Criação são aqueles que abstraem e/ou adiam o processo
 * de criação dos objetos. Eles ajudam a tornar um sistema independente de 
 * como seus objetos são criados, compostes e representados.
 * 
 * Padrões de Criação mais conhecidos: 
 * 
 * Abstract Factory
 * Builder
 * Factoru Method
 * Prototype
 * Singleton
 * 
 * 
 * Os Padrões Estruturais se preocupam com a forma como classes e 
 * objetos são compostos para formar estrutura maiores.
 * 
 * Padrões Estruturais: 
 * 
 * Adapter, Bridge, Composite, Decorator, Facade, Business Delegate, Flyweight e Proxy
 * 
 * 
 * Os Padrões Comportamentais se concentram nos algoritmos e atribuições
 * de responsabilidades entre os objetos. Eles não descrevem apenas
 * padrões de objetos ou classes, mas também os padrões de comunicação
 * entre os objetos.
 * 
 * Padrões Comportamentais:
 * 
 * Chain of Responsibility
 * Command
 * Interpreter
 * Iterator
 * Mediator
 * Observer
 * State
 * Strategy
 * Template Method
 * Visitor 
 * 
 * 
 * 
 * Patterns mais utilizados em JavaScript:
 * 
 * Facotry, Singleton, Decorator, Observer e Module.
 * 
 * 
 * Factory => Todas as funções que retornam um objeto, sem a necessidade de chamá-las
 * com o new, são consideradas funcções Factory(fábrica).
 * 
 * Abaixo exemplos de função factory
 */

//1 - Factory
function FakeUser(){
    return{
        name: 'Rene',
        lastName: 'Amaral'
    }
}

const user = FakeUser();
console.log(user);

//2 - Factory
function Person(name){
    return{
        name,
        lastName: 'Barbosa'
    }
}

const person = Person('Magda');
console.log(person);

//3 - Factory

function Person1(customProperties){
    return{
        name: 'Rene',
        lastName: 'Ferreira',
        ...customProperties
    }
}

const p = Person1({name: 'Custom Name', age: 31, from: 'Brazil'});
console.log(p);


/**
 * 
 * Padrão Singleton - o objetivo desse pattern é criar uma única instância de uma
 * função construtora e retorná-la toda vez em que for necessário utilizá-la. * 
 * 
 */

//ex 1 - Singleton
var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

//ex 2 - Singleton
function MyApp(){
    if(!MyApp.instance){      // caso a variável instance não esteja definida
        MyApp.instance = this; // ele instancia
    }

    return MyApp.instance; // sempre retorna a mesma instancia
}

// 2 - Singleton
function Person2(){
    if(!Person2.instance){
        Person2.instance = this;
    }

    return Person2.instance;
}

const p2 = Person2.call({name: 'Rene'});
const p02 = Person2.call({name: 'Custom Name'});

console.log(p2); // Após instanciado p2 pela primeira vez, ele sempre será chamado mesmo que outra instância seja criada.
console.log(p02);// Vai retornar a mesma instância de p2 por padrão


/**
 * 
 * Padrão Decorator - Uma função recebe uma outra função como parâmetro
 *  e estende o seu comportamento sem modificá-lo explicitamente.
 * 
 */

//ex 1 - Decorator.
//Quremos controlar a execução uma função, que por sua vez
//só será executada se o usuário estiver autenticado.

let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn(); //se usuário estiver loggedIn executa a função
}

function sum(a, b){
    return a + b;
}

console.log(callIfAuthenticated(() => sum (2, 3)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum (2, 3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum (2, 3)));


/**
 * 
 * Padrão Observer - É um pattern muito popular em aplicações JavaScript. A instância
 * (subscriber) mantém uma coleção de objetos (observers) e modifica todos eles quando
 * ocorrem mudanças no estado.
 *
 */

//ex 1 - Observer
class Observable{
    constructor(){
        this.observers = []; // mantém uma lista de observers (obrigatório!)
    }

    subscribe(fn){           // obrigatório ter uma função subscribe que permite adicionar subscribes
        this.observers.push(fn);
    }

    unsubscribe(fn){ // remove um subscribe
        this.observers = this.observers.filter(obs => obs !== fn); // Só retorna os que forem diferentes dessa função.
    }

    notify(data){         // função notify obrigatória e recebe um dado (data).
        this.observers.forEach(fn => fn(data));
    }

}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notifield 1');

o.unsubscribe(logData2);

o.notify('notifield 2');


/**
 * 
 * Padrão Module - É um pattern que possibilita organizarmos melhor o 
 * nosso código, sem a necessidade de expor variáveis globais.
 * 
 */

//ex 1 - Module

let name = 'default';

function getName(){
    return name;
}

function setName(newName){
    name = newName;
}

module.exports = {
    getName,
    setName
};











