(() => { 
    
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name; // o this do arrow function não altera

    function getName() {
        return this.name
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName // já na função retorna o valor do contexto que está sendo utilizada
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());

})();