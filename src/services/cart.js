import { Tech, Roupas, Moveis } from "./itens.js";
import readlineSync from 'readline-sync';

async function cart() {
    const cart = [];

    console.log(`\n😊 Seja bem-vindo ao seu carrinho de compras🛒\n`);

    if (cart.length >= 0) {
        console.log(`Seu carrinho está vazio!\n`);
        
        let inputContinue = readlineSync.question("Deseja adicionar mais itens no seu carrinho? [sim]/[nao]: ").toLowerCase();

        if (inputContinue === "sim" || inputContinue === "s") {
            let inputCatalogo = readlineSync.question("Qual catalogo voce quer ver? [Tech]/[Roupas]/[Moveis] : ").toLowerCase();

            if (inputCatalogo === "tech") {
                console.log("\n💻 Catálogo Tech: ");
                Tech.forEach(item => {
                    console.log(`Item: ${item.item} | Preço: ${item.preco} | Quantidade disponível: ${item.quantidade}`);
                });

                let itemAdicionado = false; 

                while (!itemAdicionado) {
                    let inputItem = readlineSync.question("\nDigite o nome do item que voce deseja adicionar (digite [null] para sair): ").toLowerCase();
                    let itemEncontrado = Tech.find(item => item.item.toLowerCase() === inputItem);
                    if (inputItem==="null" || inputItem==="[null]") {
                        itemAdicionado=true;
                    }

                    if (itemEncontrado) {

                        let quantidadeDesejada = readlineSync.questionInt(`Quantos itens de "${inputItem}" voce deseja adicionar? (Quantidade disponivel: ${itemEncontrado.quantidade}): `);
                        if (quantidadeDesejada > 0 && quantidadeDesejada <= itemEncontrado.quantidade) {
                            itemEncontrado.quantidade -= quantidadeDesejada; 
                            cart.push({...itemEncontrado, quantidade: quantidadeDesejada}); 
                            console.log(`Item "${inputItem}" com quantidade ${quantidadeDesejada} adicionado ao seu carrinho!`);
                            
                            let inputmaisItem = readlineSync.question("Deseja adicionar outro item? [sim]/[nao]: ");
                            if (inputmaisItem === "não" || inputmaisItem === "[não]" || inputmaisItem === "nao" || inputmaisItem === "[nao]" || inputmaisItem === "n") {
                                console.log(cart);
                                itemAdicionado = true;
                            }
                        } else {
                            console.log("Quantidade inválida. Tente novamente.");
                        }
                    } else {
                        console.log("Item nao encontrado no catálogo. Digite exatamente o nome do item desejado.");
                    }
                }
                //Roupas ==============================================================================================
            } else if (inputCatalogo === "roupas") {
                console.log("\n👕 Catálogo Roupas: ");
                Roupas.forEach(item => {
                    console.log(`Item: ${item.item} | Preço: ${item.preco} | Quantidade disponível: ${item.quantidade}`);
                });
                let itemAdicionado = false; 

                while (!itemAdicionado) {
                    let inputItem = readlineSync.question("\nDigite o nome do item que voce deseja adicionar (digite [null] para sair): ").toLowerCase();
                    let itemEncontrado = Roupas.find(item => item.item.toLowerCase() === inputItem);
                    if (inputItem==="null" || inputItem==="[null]") {
                        itemAdicionado=true;
                    }

                    if (itemEncontrado) {

                        let quantidadeDesejada = readlineSync.questionInt(`Quantos itens de "${inputItem}" voce deseja adicionar? (Quantidade disponivel: ${itemEncontrado.quantidade}): `);

                        if (quantidadeDesejada > 0 && quantidadeDesejada <= itemEncontrado.quantidade) {
                            itemEncontrado.quantidade -= quantidadeDesejada; 
                            cart.push({...itemEncontrado, quantidade: quantidadeDesejada}); 
                            console.log(`Item "${inputItem}" com quantidade ${quantidadeDesejada} adicionado ao seu carrinho!`);
                            
                            let inputmaisItem = readlineSync.question("Deseja adicionar outro item? [sim]/[nao]: ");
                            if (inputmaisItem === "não" || inputmaisItem === "[não]" || inputmaisItem === "nao" || inputmaisItem === "[nao]" || inputmaisItem === "n") {
                                console.log(cart);
                                itemAdicionado = true;
                            }
                        } else {
                            console.log("Quantidade inválida. Tente novamente.");
                        }
                    } else {
                        console.log("Item nao encontrado no catálogo. Digite exatamente o nome do item desejado.");
                    }
                }
                //Moveis ======================================================================================================
            }else if (inputCatalogo === "moveis") {
                console.log("\n🛋️ Catálogo Móveis: ");
                Moveis.forEach(item => {
                    console.log(`Item: ${item.item} | Preço: ${item.preco} | Quantidade disponível: ${item.quantidade}`);
                });
                let itemAdicionado = false; 

                while (!itemAdicionado) {
                    let inputItem = readlineSync.question("\nDigite o nome do item que voce deseja adicionar (digite [null] para sair): ").toLowerCase();
                    let itemEncontrado = Moveis.find(item => item.item.toLowerCase() === inputItem);
                    if (inputItem==="null" || inputItem==="[null]") {
                        itemAdicionado=true;
                    }

                    if (itemEncontrado) {

                        let quantidadeDesejada = readlineSync.questionInt(`Quantos itens de "${inputItem}" voce deseja adicionar? (Quantidade disponivel: ${itemEncontrado.quantidade}): `);
                        if (quantidadeDesejada > 0 && quantidadeDesejada <= itemEncontrado.quantidade) {
                            itemEncontrado.quantidade -= quantidadeDesejada; 
                            cart.push({...itemEncontrado, quantidade: quantidadeDesejada});
                            console.log(`Item "${inputItem}" com quantidade ${quantidadeDesejada} adicionado ao seu carrinho!`);
                            
                            let inputmaisItem = readlineSync.question("Deseja adicionar outro item? [sim]/[nao]: ");
                            if (inputmaisItem === "não" || inputmaisItem === "[não]" || inputmaisItem === "nao" || inputmaisItem === "[nao]" || inputmaisItem === "n") {
                                console.log(cart);
                                itemAdicionado = true;
                            }
                        } else {
                            console.log("Quantidade inválida. Tente novamente.");
                        }
                    } else {
                        console.log("Item nao encontrado no catálogo. Digite exatamente o nome do item desejado.");
                    }
                }
            } else {
                console.log("Catálogo inválido. Tente novamente.");
            }
        } else if (inputContinue === "nao" || inputContinue === "n" || inputContinue === "não") {
            console.log("Ok, até mais!");
        } else {
            console.log("Entrada inválida!");
        }


    }else {
        console.log(`Ops, algo deu errado!`);
    }
}

cart();
