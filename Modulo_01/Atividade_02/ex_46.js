/* Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
 */

function somaVendas(vendas) {
    const vendasTotal = {}

    vendas.forEach(venda => {
        if(vendasTotal[venda.vendedor]) {
            vendasTotal[venda.vendedor] += venda.valor
        } else {
            vendasTotal[venda.vendedor] = venda.valor
        }
    });
    return vendasTotal
}


const vendas = [
    { vendedor: 'João', valor: 100 },
    { vendedor: 'Maria', valor: 200 },
    { vendedor: 'João', valor: 150 },
    { vendedor: 'Pedro', valor: 300 },
    { vendedor: 'Maria', valor: 250 }
  ];
  
  const totalV = somaVendas(vendas)
  console.log("total vendas por vendendor:", totalV)