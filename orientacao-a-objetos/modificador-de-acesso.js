/**
 * 
 * JavaScript não possui modificadores de acesso. 
 * Na aula foram abordados conteúdos da versão 12 do JavaScript
 * que não havia suporte para os browsers quando a aula foi
 * gravada.
 * 
 * O sinal de cerquilha # significa privado em JavaScript
 * 
 */

class Person{
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

const p1 = new Person()
// p1.setName('Rene')
// console.log(p1.getName());
console.log(p1);
console.log(p1.name);
p1.name = 'foo';
console.log(p1.name);
