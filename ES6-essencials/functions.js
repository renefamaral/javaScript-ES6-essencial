//funções são objetos que permitem serem chamados

function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here'; // mesma forma de escrever a função que o exemplo acima. Arrow function possui retorno implícito
const arrowFn2 = () => {
    // o retorno precisa estar explicito nos casos de mais de uma expressão
    return 'Code here';
}

// Funções também são objeto
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => { // criado através de arrow function
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // executará a função fn
handleFnExecution(); // Não executará a função fn

// controlFnExec com function normal
function controlFnExec(fnParam) {
    return function(allowed){
        if (allowed) {
            fnParam();
        }
    }
}