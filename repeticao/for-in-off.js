let arr = [3, 5, 7];
arr.foo = 'Hello';

for (let i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
};

for (let i of arr) { // for of só executa as propriedades que são numeradas, ou seja, o valor dentro do array.
    console.log(i); // logs "3", "5", "7".
};