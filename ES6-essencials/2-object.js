const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Guilherme Cabrini da Silva'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26})); // Object.assign({} cria um novo array vazio

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'}; // constantes não permitem a troca do local que está apontando, somente troca de propriedades
Object.freeze(newObj); // não permite alteração e exclusão de propriedade e valor

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {'Guilherme Cabrini'};
Object.seal(person); // Não permite a criação e deleção de propriedades, contudo permite alterações

person.name = 'Guilherme Cabrini';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações: ', person);

