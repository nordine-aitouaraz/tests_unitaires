const { calculate } = require('../calculator');

describe('Calculatrice JS - opérations de base', () => {
    test('addition : 2 + 3 = 5', () => {
        expect(calculate('2+3')).toBe(5);
    });

    test('soustraction : 5 - 2 = 3', () => {
        expect(calculate('5-2')).toBe(3);
    });

    test('multiplication : 4 * 3 = 12', () => {
        expect(calculate('4*3')).toBe(12);
    });

    test('division : 10 / 2 = 5', () => {
        expect(calculate('10/2')).toBe(5);
    });
});

describe('Calculatrice JS - priorités et parenthèses', () => {
    test('priorité : 2 + 3 * 4 = 14', () => {
        expect(calculate('2+3*4')).toBe(14);
    });

    test('parenthèses : (2 + 3) * 4 = 20', () => {
        expect(calculate('(2+3)*4')).toBe(20);
    });
});

describe('Calculatrice JS - gestion des erreurs', () => {
    test('expression invalide ("2+bad") lève une erreur', () => {
        expect(() => calculate('2+bad')).toThrow('Expression invalide');
    });

    test('chaîne vide lève une erreur', () => {
        expect(() => calculate('')).toThrow('Expression invalide');
    });
});
