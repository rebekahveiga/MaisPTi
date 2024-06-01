/* . Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

function arrayObjt(arr) {
    return arr.reduce((obj, item) => {
        if(obj[item]) {
            obj[item]++
        } else {
            obj[item] = 1
        }
        return obj
    }, {})
}

const arrayDeStrings = ["nome", "idade", "cidade", "pais", "nome", "cidade", "nome"];
const objetoResultado = arrayObjt(arrayDeStrings);
console.log(objetoResultado);