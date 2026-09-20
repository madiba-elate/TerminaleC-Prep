# 📐 Maths — Chapitre 1 : Arithmétique dans ℤ (VERSION 6 ÉTAPES)

> **Sources fusionnées :** ① Lise Jean-Claude, *Cours d'arithmétique Terminale S* (16 p.)
> ② F. Gaudon, *Arithmétique Terminale maths expertes* (14 p., 2024).
> **Structure : ta progression de classe en 6 étapes** · S1 · 2026-09-19.

---

## 🎯 L'essentiel en 5 lignes

1. **Euclide** : a = bq+r, 0≤r<b (unique) — ex types : 121 = 19×6+7 ; parmi a consécutifs, un multiple de a.
2. **Bases** : écriture unique, binaire (1001₂ se lit chiffre à chiffre).
3. **Divisibilité + congruences** : a≡b[n] ⟺ n∣(a−b), compatibles +,−,×,puissances — applis : 3n+2np=9, n+1∣2n+5.
4. **Premiers** : 2 seul pair ; test ≤√n (101 premier) ; infinité ; décomposition → 17640 a 72 diviseurs.
5. **PGCD/PPCM** (Euclide : 1554∧136=2 ; pgcd×ppcm=ab) → **Bézout** (remontée 47u+39v=1) → **Gauss** (47x=28y) → **diophantiennes**.

## 📖 Cours — les 6 étapes

### Leçon 1 — Division euclidienne dans ℕ
**Objectifs :** connaître quelques propriétés des parties de ℕ (axiomes) ; traduire la division d'un naturel a par un naturel b par l'égalité a = bq + r avec 0 ≤ r < b.
- **Théorème** : ∃! (q,r), **a = bq+r, 0 ≤ r < b**. Dividende, diviseur, quotient, reste.
- **Ex** : 121 = 19×6+7 (q=6, r=7). ⚠️ 121 = 6×20+1 (pas 6×…+7 : 7 > 6 !).
- Dans ℤ : a = bq+r, **0 ≤ r < ∣b∣**.
- **Propriété** : tout entier s'écrit bq, bq+1, …, bq+b−1 (forme unique).
- **Théorème** : parmi **a entiers consécutifs, l'un est multiple de a**.
  *Preuve.* n = aq+r (0≤r<a) → a(q+1) figure dans la série. Ex : parmi n,n+1,n+2, un multiple de 3.

### Leçon 2 — Numérations binaire et décimale
**Objectifs (proposés) :** écrire un entier en base b (unicité) ; convertir décimal ↔ binaire ; lire correctement 1001₂.
- Principe positionnel, écriture **unique** a = aₙbⁿ+…+a₀.
- **Binaire** (machines) : 1001₂ chiffre à chiffre. Décimal : 8345 = 8×10³+3×10²+4×10+5.
- Exo corrigé : 17 points = **122₃**, 20 points = **202₃**.

### Leçon 3 — Divisibilité dans ℤ et congruences
**Objectifs (proposés) :** caractériser a∣b ; utiliser transitivité et combinaisons linéaires ; traduire a≡b[n] par n∣(a−b) ; appliquer les compatibilités ; résoudre les applications types.
- **Déf** : b∣a ⟺ ∃k, a = kb. Diviseurs de 8 : {±1,±2,±4,±8}.
  Signes : b∣a ⟺ (−b)∣a ⟺ b∣(−a). Diviseurs positifs en nombre **fini**.
- **Propriétés + preuves** : combinaisons linéaires ma+nb ; **transitivité**.
- **Applications** (Gaudon) : ① 3n+2np=9 ⟺ n(3+2p)=9, n∣9 ∈{1,3,9} →
  **(1,3),(3,0)** (p=−1 rejeté). ② n+1∣2n+5 : 2n+5−2(n+1)=3 → n+1∣3 →
  **n = 0 ou 2** (vérifiés : 1∣7, 3∣9).
- **Congruences** : a≡b[m] ⟺ **m∣(b−a)** ⟺ même reste (preuve : r₁−r₂ entre −m et m).
  Propriétés : réflexivité, **transitivité**, +, ×, puissances (bⁿ−aⁿ factorisé),
  a∣m ⟺ a≡0[m] (preuves complètes).

### Leçon 4 — Nombres premiers
**Objectifs (proposés) :** reconnaître un nombre premier (définition, test √n) ; démontrer l'infinité ; décomposer et exploiter (diviseurs, PGCD, PPCM).
- **Déf** : exactement 2 diviseurs (1 et lui-même). **2 = seul premier pair.**
  0 et 1 non premiers. ⚠️ Premier ≠ premiers entre eux (10 et 27 : pgcd 1, non premiers).
- **Théorème** : tout non premier admet un **diviseur premier** (descente infinie impossible).
- **Test** : aucun diviseur ≤ **√n** ⇒ premier (preuve : n=ab, a≤b ⇒ a≤√n).
  Ex : **101** (√≈10 ; ni 2,3,5,7 ne divisent) → **premier**.
- **Infinité** (absurde) : M = p₁…pₙ+1 a un diviseur premier hors liste (sinon il diviserait 1).
- **Décomposition unique** (admise) : n = p₁^n¹…pₖ^nᵏ → diviseurs : **(n₁+1)…(nₖ+1)**.
  Ex : **17640 = 2³·3²·5·7² → 4×3×2×3 = 72 diviseurs**.
  Diviseurs positifs = p₁^r¹…pₖ^rᵏ (rᵢ ≤ nᵢ).
- Bonus : crible d'Ératosthène (rayer jusqu'à p²>N), 409 premier, curiosités Mersenne/Fermat.

### Leçon 5 — PGCD et PPCM
**Objectifs (proposés) :** calculer un PGCD par Euclide ; utiliser pgcd×ppcm = ab ; simplifier par d (a = da′, b = db′).
- **Déf** : plus grand diviseur commun (ex : diviseurs de 12 et 78 → **pgcd = 6**).
- **Propriétés + preuves** : b∣a ⇒ pgcd=b ; **pgcd(a,b) = pgcd(a−kb,b)** (mêmes diviseurs) ;
  **pgcd(a,b) = pgcd(b,r)** (reste euclidien).
- **Euclide** (fini) : 1554 = 136×11+58 → 136 = 58×2+20 → 58 = 20×2+18 →
  20 = 18×1+2 → 18 = 2×9+0 → **pgcd = 2** (dernier reste non nul).
- Diviseurs communs = diviseurs du PGCD. pgcd(ka,kb) = k·pgcd. a = da′, b = db′,
  a′∧b′=1 (preuve).
- **PPCM** : pgcd×ppcm = ab (preuve complète). Ex : ppcm(12,15) = 60.

### Leçon 6 — Bézout, Gauss, équations diophantiennes
**Objectifs (proposés) :** déterminer u, v de Bézout (remontée) ; appliquer Gauss ; résoudre ax+by = c en 4 étapes.
- **Bézout-Bachet** : a∧b=1 ⟺ ∃u,v, **au+bv=1**. Corollaire : pgcd=d ⇒ au+bv=d.
- **Remontée d'Euclide (47u+39v=1)** : 47=39+8 ; 39=8×4+7 ; 8=7+1 →
  1 = 8−7 = 8×5−39 = (47−39)×5−39 → **u=5, v=−6** ✓ (47×5−39×6=1).
- **Gauss** : a∣bc et a∧b=1 ⇒ a∣c (preuve : ×c). Corollaires : ab∣c ; p∣ab ⇒ p∣a ou p∣b.
- **Exemple 47x=28y** : 47∧28=1 → 47∣y → y=47k → x=28k → **S = {(28k,47k)}**.
- **Diophantienne** : d∣c ? → simplifier → Bézout → Gauss.
  Ex : 9x+6y=15 → **x=15+2k, y=−20−3k**.

### 🐍 Bonus Python (pour toi qui codes)
- **Primalité** : teste k=2..√n (n%k==0 → non premier).
- **PGCD** : boucle r=a%b, a,b=b,r → retourne b.
- **Bézout** : Euclide étendu (remontée automatique u,v).

## 📐 Repères clés

| Élément | Contenu |
|---|---|
| Euclide | a=bq+r · 121=19×6+7 · a consécutifs → multiple de a |
| Bases | écriture unique · 1001₂ · 122₃, 202₃ |
| Applications | n(3+2p)=9 → (1,3),(3,0) · n+1∣2n+5 → 0,2 |
| Test premier | ≤ √n (101 ✓) · infinité (absurde) · 17640 → 72 diviseurs |
| PGCD | 12∧78=6 · Euclide 1554∧136=2 · mêmes diviseurs |
| Bézout/Gauss | remontée 47/39 → (5,−6) · 47x=28y → (28k,47k) |
| Diophantienne | d∣c → Bézout → Gauss (9x+6y=15) |

## ⭐ Tombe souvent aux devoirs

- Euclide + remontée + diophantienne complète.
- Test √n ; décomposition → diviseurs/PGCD/PPCM.
- Applications divisibilité (factoriser n, combiner linéairement).
- Gauss sur équations (ax=by) ; congruences (restes de puissances).

## ❓ Questions d'auto-test

1. 121 par 19 : q et r ? Et 121 par 6 ?
2. Résous 3n+2np=9 en naturels (3 étapes).
3. Montre que 101 est premier (méthode √n).
4. Remonte Euclide : 47u+39v=1.
5. Résous 47x=28y (Gauss en 3 lignes).
