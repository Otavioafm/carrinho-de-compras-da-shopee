import { cartFunc } from './services/cart.js';

async function main() {
    const cart = await cartFunc();

    if (cart.length > 0) {
        console.log("\nCarrinho finalizado:");
        console.log(cart);
        let total = 0;
        cart.forEach(item => {
            total += parseFloat(item.preco.replace(",", ".")) * item.quantidade;
        });
        console.log(`Preço total: R$ ${total.toFixed(2)}`);
    } else {
        console.log("Nenhum item foi adicionado ao carrinho.");
    }
}

main();
