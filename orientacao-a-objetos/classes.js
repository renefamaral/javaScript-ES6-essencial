/**
 * 
 * Simplicação da herança de prototipos
 * 
 */

// Criando o mesmo resultado do código digitado no arquivo heranca.js
// mas utilizando classes

class Animal {
    constructor(qtdePatas){
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde){
        super(4); // esse super refere-se a quantidade de patas da classe Animal
        this.morde = morde;
    }
}

const pug = new Cachorro(true);

console.log(pug);


// Exemplo 2, criando métodos dentro da classe

class Animals {
    constructor(){
        this.qtdePatas = 0; // setando a quantidade de patas para todos os animais
    }

    movimentar (){}
}

class Dog extends Animals{
    constructor(morde){       
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir(){
        console.log('Au! au!');
    }
}

const labrador = new Dog(false);
const viraLata = new Dog(true);

console.log(labrador);
console.log(viraLata);
