import readlineSync from 'readline-sync';
import { Tech, Roupas, Moveis } from './itens.js';

async function cartFunc() {
    const cart = [];

    console.log(`\n😊 Seja bem-vindo ao seu carrinho de compras🛒\n`);

    if (cart.length === 0) {
        console.log(`Seu carrinho está vazio!\n`);

        let inputContinue = readlineSync.question("Deseja adicionar mais itens no seu carrinho? [sim]/[nao]: ").toLowerCase();

        if (inputContinue === "sim" || inputContinue === "s") {
            let inputCatalogo = readlineSync.question("Qual catálogo você quer ver? [Tech]/[Roupas]/[Moveis] : ").toLowerCase();

            if (inputCatalogo === "tech") {
                console.log("\n💻 Catálogo Tech: ");
                Tech.forEach(item => {
                    console.log(`Item: ${item.item} | Preço: ${item.preco} | Quantidade disponível: ${item.quantidade}`);
                });
                await addItemToCart(Tech, cart);

            } else if (inputCatalogo === "roupas") {
                console.log("\n👕 Catálogo Roupas: ");
                Roupas.forEach(item => {
                    console.log(`Item: ${item.item} | Preço: ${item.preco} | Quantidade disponível: ${item.quantidade}`);
                });
                await addItemToCart(Roupas, cart);

            } else if (inputCatalogo === "moveis") {
                console.log("\n🛋️ Catálogo Móveis: ");
                Moveis.forEach(item => {
                    console.log(`Item: ${item.item} | Preço: ${item.preco} | Quantidade disponível: ${item.quantidade}`);
                });
                await addItemToCart(Moveis, cart);
            } else {
                console.log("Catálogo inválido. Tente novamente.");
            }
        } else if (inputContinue === "nao" || inputContinue === "n") {
            console.log("Ok, até mais!");
        } else {
            console.log("Entrada inválida!");
        }
    }

    return cart;
}

function calcularTotal(carrinho) {
    let total = 0;

    carrinho.forEach(item => {
        total += parseFloat(item.preco.replace(",", ".")) * item.quantidade;
    });

    return total;
}

async function addItemToCart(catalogo, cart) {
    let itemAdicionado = false;
    while (!itemAdicionado) {
        let inputItem = readlineSync.question("\nDigite o nome do item que você deseja adicionar (digite [null] para sair): ").toLowerCase();

        if (inputItem === "null" || inputItem === "[null]") {
            itemAdicionado = true;
            break;
        }

        let itemEncontrado = catalogo.find(item => item.item.toLowerCase() === inputItem);

        if (itemEncontrado) {
            let quantidadeDesejada = readlineSync.questionInt(`Quantos itens de "${inputItem}" você deseja adicionar? (Quantidade disponível: ${itemEncontrado.quantidade}): `);

            if (quantidadeDesejada > 0 && quantidadeDesejada <= itemEncontrado.quantidade) {
                itemEncontrado.quantidade -= quantidadeDesejada; 
                cart.push({ ...itemEncontrado, quantidade: quantidadeDesejada }); 
                console.log(`Item "${inputItem}" com quantidade ${quantidadeDesejada} adicionado ao seu carrinho!`);

                let inputmaisItem = readlineSync.question("Deseja adicionar outro item? [sim]/[nao]: ");
                if (inputmaisItem === "não" || inputmaisItem === "[não]" || inputmaisItem === "nao" || inputmaisItem === "[nao]" || inputmaisItem === "n") {
                    console.log("Carrinho:", cart);
                    let total = calcularTotal(cart);
                    console.log(`Preço total: R$ ${total.toFixed(2)}`);
                    itemAdicionado = true;
                }
            } else {
                console.log("Quantidade inválida. Tente novamente.");
            }
        } else {
            console.log("Item não encontrado no catálogo. Tente novamente.");
        }
    }
}


export { cartFunc, addItemToCart };
