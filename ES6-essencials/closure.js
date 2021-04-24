// conhecido também como escopo léxico
// capacidade da função lembrar do ambiente que ela foi criada

/**
 * tipos de escopo em JavaScript
 * 
 * 1 - Escopo global
 * 2 - Escopo de função
 * 3 - Escopo de bloco com a inclusão de let e const
 *
 */

// exemplo de closure:

function init() {
    const exemplo = 'Essa variável';

return function() {
    console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

    return function(){
        console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

        return function() {
            console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
         }
    }
 }

}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

/**
 * É sugerido evitar a utilização acima, pois conforme o código fica extenso passa a ser difícil identificar a origem
 * da varíael, que no modelo acima recebeu o nome de exemplo.
 * 
 * O idela é utilizar funções puras, ou seja, recebendo um parâmetro e retornando algo. No caso acima o parâmetro poderia
 * ser a própria variável exemplo da seguinte forma:
 * 
 * return function(exemplo){
 *     console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);
 *  }
 */