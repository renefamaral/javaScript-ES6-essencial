// AND lógico (&&)
exp1 && exp2

var a1 = true && true;        // t && t retorna true
var a2 = true && false;       // t && t retorna false
var a3 = false && true;       // t && t retorna false
var a4 = false && (3 == 4);   // t && t retorna false
var a5 = "Gato" && "Cão";     // t && t retorna Cão
var a6 = false && "Gato";     // t && t retorna false
var a7 = "Gato" && false;     // t && t retorna false

// OU lógico (||)
exp1 || exp2

var o1 = true   || true;       // t || t retorna true
var o2 = false  || true;       // t || t retorna true
var o3 = true   || false;      // t || t retorna true
var o4 = false  || (3 == 4);   // t || t retorna false
var o5 = "Gato" || "Cão";      // t || t retorna Gato
var o6 = false  || "Gato";     // t || t retorna Gato
var o7 = "Gato" || false;      // t || t retorna Gato

// NOT lógico (!)
!exp1

var n1 = !true;     // !t retorna false
var n2 = !false;    // !t retorna true
var n3 = !"Gato";   // !t retorna false // String preenchida com valor é verdadeiro, retorna false se estiver vazia

// Uma string é considerada preenchida desde que haja espaço dentro dela, ex: " "
// Já sem espaço a String não é considerada preenchida, ex: ""

// True
" "
1
['teste']

// false
""
0
[]



