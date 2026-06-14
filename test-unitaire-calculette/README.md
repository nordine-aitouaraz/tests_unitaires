**Lancer :**

```bash
vendor\bin\phpunit
```

![Tests PHP réussis](image/php-tests-reussis.png)

## Tests JS (Jest)

**Cas testés :**

- addition `2+3 = 5`
- soustraction `5-2 = 3`
- multiplication `4*3 = 12`
- division `10/2 = 5`
- priorités `2+3*4 = 14`
- parenthèses `(2+3)*4 = 20`
- expression invalide `2+bad` → erreur `Expression invalide`
- **bonus** : chaîne vide `''` → erreur `Expression invalide`

**Lancer :**

```bash
npm test
```

![Tests JS réussis](image/js-tests-reussis.png)

## Bilan

- PHPUnit : `assertEquals` pour les calculs, `expectException` pour la division par zéro.
- Jest : `toBe` pour les calculs, `toThrow` pour les erreurs.
- Tous les tests passent → la logique métier des deux calculettes est validée.
