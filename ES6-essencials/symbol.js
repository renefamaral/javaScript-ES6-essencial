const symbol1 = Symbol('nome');
const symbol2 = Symbol('nome');

// Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = { // Symbol não permite que as propriedades sejam sobrescritas
    [nameSymbol1]: 'Guilherme', // Symbol não é enumerable, logo não aparece no for in do exemplo abaixo, no Object.keys, Object.values, entre outros.
    [nameSymbol2]: 'Outro nome',
    lastName: 'Cabrini da Silva'
}

console.log(user);

// Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no bjeto user: ', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user: ', Reflect.ownKeys(user));

// Criar um enum 
const directions = {
    UP    : Symbol('UP'),
    DOWN  : Symbol('DOWN'),
    LEFT  : Symbol( 'LEFT'),
    RIGHT : Symbol('RIGHT')
};

