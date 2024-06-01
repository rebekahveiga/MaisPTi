/* . Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */

function transformarObjeto(obj, fn) {
    const novoObjeto = {};
    Object.keys(obj).forEach(key => {
      novoObjeto[key] = fn(obj[key]);
    });
    return novoObjeto;
  }
  
  const objetoOriginal = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const objetoTransformado = transformarObjeto(objetoOriginal, valor => valor * 2);
  
  console.log(objetoTransformado); // { a: 2, b: 4, c: 6 }
  