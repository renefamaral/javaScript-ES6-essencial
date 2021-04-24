/**
 * 
 * Permite acessar métodos e atributos sem instanciar uma determinada classe.
 * 
 */

// Exemplo sem utilizar classes.

function Person (){}

Person.walk = function(){
    console.log('walking...');
}

console.log(Person.walk());

// Exemplo utilizando classe

class Persons {
     static walk(){
         console.log('walking...');
     }
}

console.log(Person.walk());