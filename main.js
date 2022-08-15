
// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

//Removes the '-' (dash) from the string
function removesThatThing (str) {
    let newWord;
    newWord = str.replace(/-/g, ' ');
    return newWord;
    }

// Assigning the variables with values used in the request
const FullName = cleanAndCap(words.get("nome"));
const email = cleanAndCap(words.get("email"));
const endereco = words.get("endereco");
const formaDePgto = words.get("forma-de-pgto");


//This solution just down below is an easier way I thought of rewriting the calculation of any pizza price by using the loop 'for (elem of arr)'.
var precoTotal = 0;

const arrayDeSabores = ['Calabresa', 'Mussarela', 'Pepperoni', 'Frango com catupiry', '4 queijos', 'Portuguesa'];

const CalcPrecoPizza = (tam, sabor1, sabor2) => {
    if (tam === 'Pequena') {
        precoTotal += 20;
        for (sabor of arrayDeSabores) {
            if (sabor1 == sabor) {
                if (sabor == 'Calabresa') {
                    precoTotal += 6;
                } else if (sabor == 'Mussarela') {
                    precoTotal += 4;
                } else if (sabor == 'Frango com catupiry') {
                    precoTotal += 7;
                } else if (sabor == 'Pepperoni') {
                    precoTotal += 9;
                } else if (sabor == '4 queijos') {
                    precoTotal += 7;
                } else if (sabor == 'Portuguesa') {
                    precoTotal += 6;
            } else {
                window.alert('Something has gone wrong!');
            };
        };
    };
        for (sabor of arrayDeSabores) {
            if (sabor2 == sabor) {
                if (sabor == 'Calabresa') {
                    precoTotal += 6;
                    return `R$ ${precoTotal},00`
                } else if (sabor == 'Mussarela') {
                    precoTotal += 4;
                    return `R$ ${precoTotal},00`
                } else if (sabor == 'Frango com catupiry') {
                    precoTotal += 7;
                    return `R$ ${precoTotal},00`
                } else if (sabor == 'Pepperoni') {
                    precoTotal += 9;
                    return `R$ ${precoTotal},00`
                } else if (sabor == '4 queijos') {
                    precoTotal += 7;
                    return `R$ ${precoTotal},00`
                } else if (sabor == 'Portuguesa') {
                    precoTotal += 6;
                    return `R$ ${precoTotal},00`
            } else {
                window.alert('Something has gone wrong!')
            };
        };
    };

    } else if (tam === 'Media') {
        precoTotal += 30;
        for (sabor of arrayDeSabores) {
            if (sabor1 == sabor) {
                if (sabor == 'Calabresa') {
                    precoTotal += 6;
                } else if (sabor == 'Mussarela') {
                    precoTotal += 4;
                } else if (sabor == 'Frango com catupiry') {
                    precoTotal += 7;
                } else if (sabor == 'Pepperoni') {
                    precoTotal += 9;
                } else if (sabor == '4 queijos') {
                    precoTotal += 7;
                } else if (sabor == 'Portuguesa') {
                    precoTotal += 6;
            } else {
                window.alert('Something has gone wrong!');
                };
            };
        };
        for (sabor of arrayDeSabores) {
            if (sabor2 == sabor) {
                if (sabor == 'Calabresa') {
                    precoTotal += 6;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Mussarela') {
                    precoTotal += 4;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Frango com catupiry') {
                    precoTotal += 7;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Pepperoni') {
                    precoTotal += 9;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == '4 queijos') {
                    precoTotal += 7;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Portuguesa') {
                    precoTotal += 6;
                    return ` R$ ${precoTotal},00`
                } else {
                window.alert('Something has gone wrong!')
                };
            };
        };    
    } else if (tam === 'Grande') {
        precoTotal += 40;
        for (sabor of arrayDeSabores) {
            if (sabor1 == sabor) {
                if (sabor == 'Calabresa') {
                    precoTotal += 6;
                } else if (sabor == 'Mussarela') {
                    precoTotal += 4;
                } else if (sabor == 'Frango com catupiry') {
                    precoTotal += 7;
                } else if (sabor == 'Pepperoni') {
                    precoTotal += 9;
                } else if (sabor == '4 queijos') {
                    precoTotal += 7;
                } else if (sabor == 'Portuguesa') {
                    precoTotal += 6;
            } else {
                window.alert('Something has gone wrong!');
                };
            };
        };
        for (sabor of arrayDeSabores) {
            if (sabor2 == sabor) {
                if (sabor == 'Calabresa') {
                    precoTotal += 6;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Mussarela') {
                    precoTotal += 4;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Frango com catupiry') {
                    precoTotal += 7;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Pepperoni') {
                    precoTotal += 9;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == '4 queijos') {
                    precoTotal += 7;
                    return ` R$ ${precoTotal},00`
                } else if (sabor == 'Portuguesa') {
                    precoTotal += 6;
                    return ` R$ ${precoTotal},00`
                } else {
                window.alert('Something has gone wrong!')
                };
            };
        };
    };
};

const tamanhoDaPizza = cleanAndCap(words.get("tamanho-pizza"));
const saborDa1Metade = cleanAndCap(removesThatThing(words.get("sabor-metade-1")));
const saborDa2Metade = cleanAndCap(removesThatThing(words.get("sabor-metade-2")));
const infosAdicionais = words.get("infos-adicionais");

//Showing the data to the client right down here
var dadosDoCliente = document.getElementById("dados");
var pedidoCliente = document.getElementById("pedido");

dadosDoCliente.innerHTML = `<p><b>Seu nome completo:</b> ${FullName}</p>
                            <p><b>Seu e-mail:</b> ${email}</p>
                            <p><b>Seu endereço:</b> ${endereco}</p>
                            <p><b>Forma de pagamento:</b> ${formaDePgto}</p>`;

pedidoCliente.innerHTML =  `<p><b>Tamanho da pizza:</b> ${tamanhoDaPizza}</p>
                            <p><b>Sabor da 1ª Metade:</b> ${saborDa1Metade}</p>
                            <p><b>Sabor da 2ª Metade:</b> ${saborDa2Metade}</p>
                            <p><b>Informações adicionais:</b> ${infosAdicionais}</p>
                            <p><b>Preço Total:</b>${CalcPrecoPizza(tamanhoDaPizza, saborDa1Metade, saborDa2Metade)}</p>`;
