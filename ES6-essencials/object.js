let user = {
    name: 'Rene'
};

//Alterando a propriedade de um objeto
console.log(user);

user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';

console.log(user);
const prop = 'name'; // criando uma propriedade de recebe name
user[prop] = 'Outro nome 3';
console.log(user);

function getProp(prop) { // demonstrando que é possível pegar o valor dessa forma também
    return user[prop]    
}
console.log(getProp(prop));

//Criando uma propriedade
user.lastName = 'Ferreira Barbosa do Amaral';
console.log(user);

//Deletando uma propriedade
delete user.name;
console.log(user);