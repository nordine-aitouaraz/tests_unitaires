### 1. Test réussi

![Test réussi](image/test-reussi.png)

→ `OK (1 test, 1 assertion)`.

### 2. Test raté (j'ai mis `$a - $b` à la place de `$a + $b`)

![Test raté](image/test-rate.png)

→ PHPUnit affiche : `Failed asserting that -1 matches expected 5`.

### 3. Test corrigé

![Test corrigé](image/test-corrige.png)

## Bilan

- `assertEquals(attendu, obtenu)` = base de PHPUnit.
- Une classe de test étend `TestCase`, chaque méthode `testXxx()` est un test.
- Test rouge dès qu'on casse la méthode → détection immédiate des régressions.
