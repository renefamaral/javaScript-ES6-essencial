// Spread ...

var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

// spread acima (...partes) está realizando a seguinte função

var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pés'] // ou seja, concatenando o array




function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args)

// no exemplo acima o spread está passando o ...args como parâmetro da função fn