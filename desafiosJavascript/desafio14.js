// Escreva uma função que recebe um array de objetos, sendo cada objeto os dados de um endereço separados em address, city, state, country e zipcode.

// Retorne os endereços formatados em um novo array de strings, seguindo o formato abaixo:

// "address, city - state, zipcode, country."

const minhaFuncao = (array) => {
    return array.map(({ address, city, state, zipcode, country }) => {
        return address.concat(', ', city, ' - ', state, ', ', zipcode, ', ', country);
    });
}

console.log(minhaFuncao([
    {
        address: "Av. Campeche",
        city: "Florianópolis",
        state: "SC",
        zipcode: "88063-301",
        country: "Brasil",
    },
    {
        address: "R. Enguaguaçu",
        city: "São Paulo",
        state: "SP",
        zipcode: "11035-071",
        country: "Brasil",
    },
    {
        address: "R. Domingos Ferreira",
        city: "Rio de Janeiro",
        state: "RJ",
        zipcode: "22050-012",
        country: "Brasil",
    },
]));
// [
//     'Av. Campeche, Florianópolis - SC, 88063-301, Brasil',
//     'R. Enguaguaçu, São Paulo - SP, 11035-071, Brasil',
//     'R. Domingos Ferreira, Rio de Janeiro - RJ, 22050-012, Brasil'
// ]