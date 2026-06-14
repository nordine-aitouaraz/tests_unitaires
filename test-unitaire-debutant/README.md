## Lancer

```bash
npm test
```

### 1. Test réussi

![Test réussi](image/test-reussi.png)

### 2. Test raté (j'ai mis `a - b` à la place de `a + b`)

![Test raté](image/test-rate.png)

→ Jest détecte l'erreur : `Expected: 5`, `Received: -1`.

### 3. Test corrigé

![Test corrigé](image/test-corrige.png)

## Bilan

- `test()` + `expect().toBe()` = base de Jest.
- Le test échoue dès que la fonction change → utile pour détecter les régressions.
