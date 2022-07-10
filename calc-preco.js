var tamanhoPizza = document.getElementById("tamanho-pizza");
var saborMetade1 = document.getElementById("sabor-metade-1");
var saborMetade2 = document.getElementById("sabor-metade-2");
const botaoCalcPreco = document.getElementById("botao-calc-preco");
var precoDaPizzaTexto = document.getElementById("preco-da-pizza");
var precoBasePizzaPequena = 20;
var precoBasePizzaMedia = 30;
var precoBasePizzaGrande = 40;
var precoMetadeMussarela = 4;
var precoMetadeCalabresa = 6;
var precoMetadeFrangoCatupiry = 7;
var precoMetadePepperoni = 9;
var precoMetadePortuguesa = 6;
var precoMetade4Queijos = 7
var precoTotalSalvo;

function calcularPreco() {
    if (tamanhoPizza.value === 'pequena') {
        if (saborMetade1.value === 'calabresa') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeCalabresa * 2).toString() + ',00';
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeCalabresa + precoMetadeMussarela).toString() + ',00';
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeCalabresa + precoMetadeFrangoCatupiry).toString() + ',00';
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeCalabresa + precoMetadePepperoni).toString() + ',00';
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeCalabresa + precoMetade4Queijos).toString() + ',00';
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeCalabresa + precoMetadePortuguesa).toString() + ',00';
            };
        } else if (saborMetade1.value === 'mussarela') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeMussarela + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeMussarela * 2).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeMussarela + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeMussarela + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeMussarela + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeMussarela + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'frango-com-catupiry') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeFrangoCatupiry + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeFrangoCatupiry + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeFrangoCatupiry * 2).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeFrangoCatupiry + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeFrangoCatupiry + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadeFrangoCatupiry + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'pepperoni') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePepperoni + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePepperoni + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePepperoni + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePepperoni * 2).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePepperoni + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePepperoni + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === '4-queijos') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetade4Queijos + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetade4Queijos + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetade4Queijos + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetade4Queijos + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetade4Queijos * 2).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetade4Queijos + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'portuguesa') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePortuguesa + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePortuguesa + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePortuguesa + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePortuguesa + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePortuguesa + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaPequena + precoMetadePortuguesa * 2).toString() + ',00'
            };
        };
    } else if (tamanhoPizza.value === 'media') {
        if (saborMetade1.value === 'calabresa') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeCalabresa * 2).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeCalabresa + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeCalabresa + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeCalabresa + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeCalabresa + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeCalabresa + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'mussarela') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeMussarela + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeMussarela * 2).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeMussarela + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeMussarela + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeMussarela + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeMussarela + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'frango-com-catupiry') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeFrangoCatupiry + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeFrangoCatupiry + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeFrangoCatupiry * 2).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeFrangoCatupiry + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeFrangoCatupiry + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadeFrangoCatupiry + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'pepperoni') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePepperoni + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePepperoni + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePepperoni + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePepperoni * 2).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePepperoni + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePepperoni + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === '4-queijos') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetade4Queijos + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetade4Queijos + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetade4Queijos + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetade4Queijos + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetade4Queijos * 2).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetade4Queijos + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'portuguesa') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePortuguesa + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePortuguesa + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePortuguesa + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePortuguesa + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePortuguesa + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaMedia + precoMetadePortuguesa * 2).toString() + ',00'
            };
        }
    } else if (tamanhoPizza.value === 'grande') {
        if (saborMetade1.value === 'calabresa') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeCalabresa * 2).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeCalabresa + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeCalabresa + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeCalabresa + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeCalabresa + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeCalabresa + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'mussarela') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeMussarela + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeMussarela * 2).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeMussarela + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeMussarela + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeMussarela + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeMussarela + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'frango-com-catupiry') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeFrangoCatupiry + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeFrangoCatupiry + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeFrangoCatupiry * 2).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeFrangoCatupiry + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeFrangoCatupiry + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadeFrangoCatupiry + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'pepperoni') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePepperoni + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePepperoni + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePepperoni + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePepperoni * 2).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePepperoni + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePepperoni + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === '4-queijos') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetade4Queijos + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetade4Queijos + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetade4Queijos + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetade4Queijos + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetade4Queijos * 2).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetade4Queijos + precoMetadePortuguesa).toString() + ',00'
            };
        } else if (saborMetade1.value === 'portuguesa') {
            if (saborMetade2.value === 'calabresa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePortuguesa + precoMetadeCalabresa).toString() + ',00'
            } else if (saborMetade2.value === 'mussarela') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePortuguesa + precoMetadeMussarela).toString() + ',00'
            } else if (saborMetade2.value === 'frango-com-catupiry') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePortuguesa + precoMetadeFrangoCatupiry).toString() + ',00'
            } else if (saborMetade2.value === 'pepperoni') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePortuguesa + precoMetadePepperoni).toString() + ',00'
            } else if (saborMetade2.value === '4-queijos') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePortuguesa + precoMetade4Queijos).toString() + ',00'
            } else if (saborMetade2.value === 'portuguesa') {
                precoDaPizzaTexto.innerHTML = 'R$ ' +(precoBasePizzaGrande + precoMetadePortuguesa * 2).toString() + ',00'
            };
        };
    } else {
        return window.alert('Algo deu errado');
    };
};

botaoCalcPreco.addEventListener('click', () => {
    calcularPreco();
    precoTotalSalvo = precoDaPizzaTexto.innerHTML;
    });