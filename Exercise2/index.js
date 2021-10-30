// declaración de datos iniciales
let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// limpiar los arrays
const cleanData = (array) => {

    let response = [];
    // recorrer array
    for (let value of array) {
        if (typeof value === 'number') {
            response.push(value);
        }
    }

    return response;

};

// ordenar de menor a mayor el array
// aplicando merge-sort

// construye el array ordenado
const _merge = (left, right, type) => {

    let sorted = [];

    //comenzamos a construir mitades
    while (left.length && right.length) {
        sorted.push(type === '>' ? (left[0] > right[0] ? left.shift() : right.shift()) : (left[0] < right[0] ? left.shift() : right.shift()));
    }

    //continuamos agregando las partes del array
    while (left.length) {
        sorted.push(left.shift());
    }

    while (right.length) {
        sorted.push(right.shift());
    }

    return sorted;

}

// comienza el proceso
const sort = (array, type) => {

    //compromos el tipo
    if (type === '<' || type === '>') {

        //comprobar si ya esta listo
        if (array.length < 2) { return array }

        //calcular la mitad del array
        const middle = Math.floor(array.length / 2);
        //obtener las mitades
        const startMiddle = array.slice(0, middle);
        const secondMiddle = array.slice(middle, array.length);

        //dividir las mitades
        //aplicando recursividaad
        const firstSort = sort(startMiddle, type);
        const secondSort = sort(secondMiddle, type);

        //construimos el array ordenado
        return _merge(firstSort, secondSort, type);

    } else {
        return null;
    }

}

// calcular la media aritmetica
const mediaAritmetica = (arr) => {

    //clean array
    let cleanArray = cleanData(arr);

    // sumar todos los valores
    let suma = cleanArray.reduce((accumulator, currentValue) => accumulator + currentValue);

    // calcular la media
    let media = Math.floor(suma / arr.length);
    return media;

}