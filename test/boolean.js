var expect = require('chai').expect;
describe.only('Boolean test', () => {
    const numero = 2;
    it ('El valor true es verdadero', () => {
        expect( true ).to.be.true;
        expect( true ).equal( true );
    });
    it('El valor false es falso', () => {
        expect( false ).to.be.false;
        expect( false ).to.equal( false );
    })
    it('1 es de tipo número', () => {
        expect( typeof 1 ).to.equal( 'number' );
        expect( 1 ).to.be.a('number');
    });
    it('1 NO es de tipo string', () => {
        expect( typeof 1 === 'string ').to.be.false;
        expect( typeof 1 === 'string ').to.equal( false );
    });
    it('1 NO es de tipo booleano', () => {
        expect( typeof 1 === 'booleano' ).to.be.false;
        expect( typeof 1 === 'booleano' ).to.equal( false );
    });

});

