var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it ('Los valores del array son iguales', () => {
        const resultado = [1, 2, 4, 6, 8];
        expect( array ).to.eql(resultado);
        expect( String(array) ).to.equals('1,2,4,6,8');
        expect( array ).to.deep.eql(resultado);
        expect( [1, 2, 3] ).to.have.ordered.members([1, 2, 3]);


    });

    it('Contiene el valor "2" el array', () => {
        expect( array.indexOf(2) == 1).to.be.true;
        expect( array.indexOf(2)).to.equal( 1 );
        expect( array ).to.include( 2 );
        expect( array ).to.include( 2 ).not.to.include(80);
        expect( array ).to.be.an('array').that.include(2).not.to.include(100);
    });
    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        expect( array ).to.include.members([1,1,1,1,1,6]);
        
    });
    it('Contiene los valores independientemente del orden', () => {
        expect( array ).to.have.members([8,2,4,6,1]);
        expect( array ).to.have.members([8,2,4,1,6]);
        expect( array ).to.have.members([6,2,4,8,1]);
        expect( array ).to.have.members([8,1,4,6,2]);
    });
    it('Tiene una longitud de 5 carácteres', () => {
        expect( array.length ).to.equal(5);
    });
});
