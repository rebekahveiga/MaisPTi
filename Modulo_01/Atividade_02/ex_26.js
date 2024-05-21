/* . Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5 */

function randomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = []; //inicializa 
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10); // números aleatórios ente 0 e 9
        }
    }
    return matrix;
}

function productMatrices(m1, m2) {
    if (m1[0].length !== m2.length) {
        console.log("O número de colunas na primeira matriz deve ser igual ao número de linhas da segunda matriz");
    }

    let mProduct = [];
    for (let i = 0; i < m1.length; i++) {
        mProduct[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            mProduct[i][j] = sum;
        }
    }
    return mProduct;
}

// Exemplo Matrizes
const matrix1 = randomMatrix(3, 5); // 3x5 matrix
const matrix2 = randomMatrix(3, 5); // 3x5 matrix


const prodMatrices = productMatrices(matrix1, matrix2);

console.log("Matrix 1:");
console.log(matrix1);
console.log("Matrix 2:");
console.log(matrix2);
console.log("Produto da Matriz 1 and Matriz 2:");
console.log(prodMatrices);
