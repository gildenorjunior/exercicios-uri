// Escreva uma função que recebe dois parâmetros (fullname, flag.Se a flag for igual a 'firstname', deve retornar apenas a primeira palavra do parâmetro fullname.
// Se a flag for igual a 'lastname', deve retornar todo o texto, exceto a primeira palavra do parâmetro fullname.
// Se o parâmetro flag for vazio ou fullname conter apenas uma palavra, apenas retornar o conteúdo de fullname.

function minhaFuncao(fullname, flag = "") {
    if(flag === '' || fullname.split(' ').length === 1) return fullname;

    if(flag === 'firstname'){
        return fullname.split(' ')[0];
    } else {
        let fullnameAux = fullname.split(' ');
        fullnameAux.shift();
        return fullnameAux.join(' ');
    }
}

console.log(minhaFuncao('John Williams Smith', 'firstname')); //John
console.log(minhaFuncao('John Williams Smith', 'lastname')); //Williams Smith
console.log(minhaFuncao('John Williams Smith')); //John Williams Smith
console.log(minhaFuncao('John', 'lastname')); //John