
describe.only('Hooks', () => {
    before(() => {
        console.log('before - se ejecuta una vez');
    });
    after(()=>{
        console.log('after - se ejecuta al final de todas las pruebas');
        
    });
    beforeEach(()=> {
        console.log('ejecutando antes de cada IT');
    });
    afterEach(()=> {
        console.log('ejecutando después de cada IT');
    });
    it('test1', ()=> console.log(' test prueba1'));
    it('test2', ()=> console.log(' test prueba2'));
});