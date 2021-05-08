const myNumber = 12.4032;

//Tranformar número para string
const numberAsString = myNumber.toString();
console.log('Número trasnformado em String: ', numberAsString, typeof numberAsString);

//Retorna número com um número de casas decimais
const fixecTwoDecimals = myNumber.toFixed(0);
console.log('\nNúmero com duas casas decimais: ', fixecTwoDecimals);

//Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));