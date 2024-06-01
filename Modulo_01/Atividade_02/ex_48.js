/* Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */


function combinaInventario(obj1, obj2) {
    const novoObjeto = {...obj1}
    for(const key in obj2) {
        if(obj2.hasOwnProperty(key)) {
            if(novoObjeto.hasOwnProperty(key)) {
                novoObjeto[key] += obj2[key]
            } else {
                novoObjeto[key] = obj2[key]
            }
        }
    }
    return novoObjeto
}

const inventarioLojaA = {
    cebola: 10,
    macarrao: 30,
    alho: 50,
    miojo: 5,
    sabonete: 90
}

const inventarioLojaB = {
    alho: 10,
    arroz: 30,
    salsinha: 50,
    biscoito: 5,
    desodorante: 90
}

const completaObjeto = combinaInventario(inventarioLojaA, inventarioLojaB)
console.log("Novo Inventario:", completaObjeto)

