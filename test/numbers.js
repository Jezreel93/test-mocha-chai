var expect = require('chai').expect;

/**
 * Suma de los elementos que tienen que ser números
 * @param {*} arr Lista de números a sumar
 */
function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += Number(i);
    }
    return sum;
}

describe.only('Numbers test', () => {
    const numero = 2;
    it('Devolver resultado 0 con array vacio de números', () => {
        expect( sum([]) ).to.equal(0);
    });

    it ('El número es igual ', () => {
        expect( sum([5, 8, 10]) ).to.equal(23);
    });
    it('El número es mayor que 0', () => {
        expect( numero > 0 ).to.be.true;
        expect( numero < 0 ).to.be.false;
    })
    it('La suma es de tipo númerico', () => {
        expect( typeof sum([2, 9, 6]) ).to.equals( 'number' );
    });
    it('No es número', () => {
        expect( sum('a')).to.be.NaN;
    });

    it('Comprobar el número resultante con un elemento en el array de la suma', () => {
        expect( sum([1]) ).to.equal(1);   
    });

    it('Comprobar el número (que está en formato string) resultante con un elemento en el array de la suma', () => {
           expect( sum(['1','1']) ).to.equals(2);        
    });

    it('Array numérico con números negativos', () => {
        expect( sum([-5, -10]) ).to.equal(-15);  
    });

    it('Array numérico con números negativos y strings con valor numérico', () => {
        expect( sum(['-5', -10]) ).to.equal(-15);
    });

});
