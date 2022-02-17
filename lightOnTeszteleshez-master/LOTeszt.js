const { test } = QUnit;

QUnit.module('ELLENŐRZÉS METÓDUS', function (hook) {
    hook.before(() => {
      this.lojatek=new LOJatek(0);
      
    });
    test('létezik-e az ellenőrzés metódus', (assert) => {
      assert.ok(this.lojatek.ellenorzes, 'Létezik!');
    });
    test('függvény?', (assert) => {
        assert.ok(typeof this.lojatek.ellenorzes === 'function', 'Függvény!')
    });
    
    test('Minden lámpa fel van kapcsolva?', (assert) => {
        let lojatek=new LOJatek(9);
        assert.equal(lojatek.ellenorzes(9), 9)
    });
    test('Minden lámpa le van kapcsolva?', (assert) => {
        let lojatek=new LOJatek(0);
        assert.equal(lojatek.ellenorzes(0), 0)
    });
});


QUnit.module('SZOMSZEDOKVALTOZTATASA METÓDUS', function (hook) {
    hook.before(() => {
      this.lojatek=new LOJatek(0);
      
    });
    test('létezik-e az szomszedokValtoztatasa metódus', (assert) => {
        assert.ok(this.lojatek.szomszedokValtoztatasa, 'Létezik!');
      });
      test('függvény?', (assert) => {
        assert.ok(typeof this.lojatek.szomszedokValtoztatasa === 'function', 'Függvény!')
    });
    test('Középső lámpa van felkapcsolva', (assert) => {
      
          this.lojatek=new LOJatek(tomb);

        assert.equal(this.lojatek.szomszedokValtoztatasa(tomb)=== false,false,false,false,true,false,false,false );
    });

    });