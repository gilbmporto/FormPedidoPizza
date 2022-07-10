var botaoTeste = document.getElementById("botao-de-teste");

// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the request
const FullName = cleanAndCap(words.get("nome"));
const email = cleanAndCap(words.get("email"));
const endereco = words.get("endereco");
const formaDePgto = words.get("forma-de-pgto");

const tamanhoDaPizza = cleanAndCap(words.get("tamanho-pizza"));
const saborDa1Metade = cleanAndCap(words.get("sabor-metade-1"));
const saborDa2Metade = cleanAndCap(words.get("sabor-metade-2"));
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
                            <p><b>Preço Total:</b></p>`;
