# ✍️ Exercices — Ch.1 Arithmétique (types BAC + corrigés)

> **Matière :** Maths · S1 · Rédaction exigée (définitions citées, étapes nommées).

## Énoncé

**Ex. 1 — Diviseurs (3 pts) :** donne tous les diviseurs positifs de 12, de 150 et de 7.
Que remarques-tu pour 7 ?

**Ex. 2 — Critères (4 pts) :** 456 est-il divisible par 3 ? (preuve en 2 lignes avec 10≡1[3]).
12345 est-il divisible par 3 ? par 9 ? par 5 ?

**Ex. 3 — Euclide + Bézout (5 pts) :** par l'algorithme d'Euclide, calcule pgcd(48,64).
Écris 16 comme combinaison linéaire de 48 et 64 (identité de Bézout simple).

**Ex. 4 — Diophantienne (6 pts) :** résous dans ℤ : 9x+6y=15 (méthode complète en 4 étapes).

**Ex. 5 — Primalité + PPCM (4 pts) :** 409 est-il premier ? (détaille le test).
Calcule ppcm(12,15) via le PGCD.

---

## ✅ Corrigés

### Ex. 1
- D(12) = {1,2,3,4,6,12} · D(150) = {1,2,3,5,6,10,15,25,30,50,75,150} ·
  D(7) = {1,7} → **7 est premier** (déf : seuls diviseurs 1 et lui-même).

### Ex. 2
- 456 = 4·10²+5·10+6, or 10≡1[3] donc 456 ≡ 4+5+6 = 15 ≡ 0[3] → **oui**.
- 12345 : somme = 15 → **divisible par 3, pas par 9** (15 non multiple de 9) ;
  ne finit ni par 0 ni 5 → **pas par 5**.

### Ex. 3
- 64 = 48×1+16 ; 48 = 16×3+0 → **pgcd = 16** (dernier reste non nul).
- 16 = 64−48×1, soit **16 = 1×64 + (−1)×48** (Bézout, u=1, v=−1).

### Ex. 4
1. d = pgcd(9,6) = 3, et 3∣15 ✓ (sinon ∅). 2. Simplifie : **3x+2y=5** (premiers entre eux).
3. Bézout : 3·3+2·(−4) = 1 → particulière **(15,−20)** (×5).
4. Gauss : 3(x−15) = 2(−20−y) → 2∣(x−15) → **x = 15+2k, y = −20−3k**, k ∈ ℤ.

### Ex. 5
- √409 ≈ 20,2 : teste 2,3,5,7,11,13,17,19 — aucune division exacte
  (ex : 409 = 7×58+3, = 11×37+2, = 17×24+1) → **409 premier**.
- pgcd(12,15) = 3 → ppcm = 12×15/3 = **60**.

### Ex. 6 — Applications du 2e cours + Python (6 pts)

a) Résous en naturels : 3n+2np=9. b) Trouve n ∈ ℕ tel que n+1∣2n+5.
c) Résous dans ℤ : 47x=28y. d) 101 premier ? (test √n).

**Corrigé.** a) n(3+2p)=9, n∣9 → n∈{1,3,9} : **(1,3),(3,0)** (p=−1 rejeté).
b) Différence 3 → n+1∣3 → **n=0 ou 2** (1∣7 ✓, 3∣9 ✓).
c) 47∧28=1 → 47∣y → **(28k,47k)**.
d) √101≈10 : 2,3,5,7 ∤ 101 → **premier**.

### 🐍 Bonus Python (teste les algos)

```python
def estPremier(n):
    k = 2
    while k*k <= n:
        if n % k == 0:
            return False
        k += 1
    return True

def pgcd(a, b):
    r = a % b
    while r != 0:
        a, b = b, r
        r = a % b
    return b
```
Versions nettoyées du 2e cours (Bézout étendu = remontée automatique).

> ⭐ Phrases qui rapportent : « **dernier reste non nul** » / « 10≡1[3] donc… » /
> « √n ≈ … : je teste les premiers jusqu'à… » / « d∣c donc je simplifie ».
