/** Tipo e variáveis em JavaScript */


/**
 * 1 - string - (primitivo)
 * 2 - number - (primitivo)
 * 3 - boolean - (primitivo)
 * 4 - null - (primitivo)
 * 5 - undefined - (primitivo)
 * 6 - symbol - (primitivo) - permite criar valores únicos
 * 7 - Object
 * 8 - Function - também é um objeto mas permite ser chamado
 * 9 -Array - também é um objeto mas possui relações com os itens (filhos)
 */

// Retornar o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quatidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replacetext = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replacetext);

// Retorna a "fatia" de uma valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última', allWithoutLastChar);

const secontToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letr até a última', secontToEnd);

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:'. twoCharsBeforeFirstPos);