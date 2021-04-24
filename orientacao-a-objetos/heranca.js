/**
 * Herança em JavaScript é baseada em prototipos - prototype
 * 
 * Prototype armazena as definições do nosso objeto
 * 
 */

function Pessoa(name) { // a função construtora é pessoa contendo o atributo name.
    this.name = name;
}

const p = new Pessoa('Rene') // criando uma nova pessoa

console.log(p);

// exemplo quando houver um retorno explícito

function People (name) {
    this.name = name;

    return {            // quando houver um retorno explícito o this será ignorado.
        name: 'Teste'
    };
}

const p2 = new People ('Magda')

console.log(p2);


/**
 * exemplo 2 ainda não é a forma correta de fazer.
 * Toda vez que uma nova instancia for criada um novo movimentar 
 * e um novo latir também serão, o exemplo 3 mostra como resolver
 * esse problema.
 * 
 */

function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
    this.movimentar = function(){} // implementação de novo método
}

function Cachorro(morde){
    this.morde = morde;

    Animal.call(this, 4);  // estou dizendo que a entidade cachorro possui 4 patas

    this.latir = function(){ // implementação de novo método
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false); // o false diz que o cachorro não morde.
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);


/**
 * Exemplo 3
 * Setando o prototype as funções não serão criadas no new
 * elas já foram definidas anteriormente
 * Ao adicionarmos uma nova propriedade em prototype todos as instancias
 * criadas os receberão automaticamente
 */

function Animals(){} // função construtora

// o prototype contém a definição do meu objeto
Animals.prototype.qtdePatas = 0; // estou dizendo que por padrão todos Animais inicializam com 0 patas
Animals.prototype.movimentar = function(){}  // estou dizendo que todos os animais se movimentam

function Dog(morde){
    this.qtdePatas = 4; // estou dizendo que o cachorro possui 4 patas
    this.morde = morde;
}

Dog.prototype = Object.create(Animals); // ao criar o prototype de Dog falamos que ele deriva do protype de Animals
Dog.prototype.latir = function(){
    console.log('Au! au!');       // Estou dizendo que todo cachorro late
}

const labrador = new Dog(false);
const pastorAlemao = new Dog(true);

console.log(labrador.__proto__);
console.log(pastorAlemao.prototype);

// É necessário ter cuidado com o uso de Porotype, ele permite alterações
// que impactam diretamente em nosso código. Recomenda-se criar a nossa própria
// implementação


