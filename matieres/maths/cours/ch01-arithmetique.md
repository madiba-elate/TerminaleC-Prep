# 📐 Maths — Chapitre 1 : Arithmétique dans ℤ (cours intégral)

> **Source :** Lise Jean-Claude, *Cours d'arithmétique — Terminale S* (16 p., transcription fidèle + optimisation).
> **Position :** S1 · **Date de numérisation :** 2026-09-19.

---

## 🎯 L'essentiel en 5 lignes

1. **a divise b** (a∣b) : ∃q ∈ ℤ, b = aq · Règles : transitivité, combinaisons linéaires αb+βc, a∣b ⇒ |a∣≤∣b∣.
2. **Division euclidienne** : a = bq + r, 0 ≤ r < b (unique) — dans ℕ puis dans ℤ (0 ≤ r < ∣b∣).
3. **Congruences** : a ≡ b [n] ⟺ n∣(a−b) — compatibles avec +, −, ×, puissances.
4. **PGCD** (Euclide : dernier reste non nul) → **Bézout** (au+bv = d) → **Gauss** (a∣bc, a∧b=1 ⇒ a∣c) → **diophantiennes** ax+by=c.
5. **PPCM** : pgcd×ppcm = ab · **Premiers** : test p ≤ √n, infinité, décomposition unique.

## 📖 Cours optimisé

### 0. Introduction — pourquoi l'arithmétique ?
Le numérique repose sur l'arithmétique : toute information se code en **binaire**
(suites de 0 et 1). ℕ = entiers naturels, ℤ = entiers relatifs.

### 1. Trois axiomes de ℕ
- Toute partie non vide de ℕ admet un **plus petit élément** (faux dans ℤ).
- Toute partie non vide **majorée** de ℕ admet un **plus grand élément**.
- Toute suite d'entiers naturels **strictement décroissante est finie** (faux dans ℤ)
  → garantit la fin de l'algorithme d'Euclide.

### 2. Divisibilité dans ℤ
- **Déf** : a∣b ⟺ ∃q ∈ ℤ, b = aq (« b divisible par a », « a diviseur », « b multiple »).
- **5 théorèmes** : (1) a∣b ⇒ a∣bc · (2) transitivité · (3) a∣b et a∣c ⇒ a∣(αb+βc)
  · (4) b≠0 ⇒ ∣a∣≤∣b∣ (diviseurs en nombre fini) · (5) a∣b et b∣a ⇒ a = ±b.

### 3. Nombres premiers
- **Déf** : entier ≠ 1 dont les seuls diviseurs positifs sont 1 et lui-même.
  **1 et 0 ne sont PAS premiers.**
- Remarque : si n = p×q avec p ≤ q alors **p ≤ √n** (base du test de primalité).

### 4. Division euclidienne
- **Archimède** : ∀a ∈ ℕ, b ∈ ℕ*, ∃n, nb ≥ a → tout a est entre 2 multiples consécutifs : bq ≤ a < b(q+1).
- **Théorème (ℕ)** : ∃! couple (q,r), **a = bq + r, 0 ≤ r < b**.
  Unicité (exigible) : r₁−r₂ multiple de b entre −b et b ⇒ = 0, puis q₁ = q₂.
- **Dans ℤ** : a = bq + r, **0 ≤ r < ∣b∣** (reste toujours positif).
- Vocabulaire : dividende a, diviseur b, quotient q, reste r.

### 5. Congruences
- **Déf** : a et b ont **même reste** mod n ⟺ on note **a ≡ b [n]**.
- **Théorème** : a ≡ b [n] ⟺ **n∣(a−b)**.
- **Compatibilité** : si a≡a′ et b≡b′ alors a+b≡a′+b′, a−b≡a′−b′, **ab≡a′b′**, aᵏ≡a′ᵏ.

### 6. Critères de divisibilité (via 10 ≡ 1 [3], [9])
- **2** : dernier chiffre pair · **5** : se termine par 0/5 · **3 et 9** : **somme des chiffres**
  divisible · **11** : somme alternée des chiffres divisible.
  Ex : 456 = 4+5+6 = 15 → divisible par 3 (démontré dans le cours).

### 7. PGCD et Euclide
- **Déf** : D(a)∩D(b) non vide, majorée → plus grand élément = **pgcd(a,b)** (noté a∧b).
  Diviseurs communs = diviseurs du PGCD.
- **Euclide** : a = bq₀+r₀ → (b,r₀) → … → **dernier reste non nul** = PGCD.
  Ex : 64 = 48×1+16 ; 48 = 16×3+0 → **pgcd = 16**.
- Propriétés : pgcd(a,1)=1, pgcd(a,0)=a, a∣b ⟺ pgcd=a, pgcd(ka,kb)=k·pgcd.

### 8. Premiers entre eux — Bézout — Gauss
- **Déf** : pgcd = 1.
- **Bézout** : pgcd = d ⟺ ∃u,v, **au+bv = d** (cas =1 : au+bv=1).
  Ex : 44 = (−2)×25872 + 107×484 (remontée d'Euclide).
- **Gauss** : **a∣bc et a∧b=1 ⇒ a∣c**. Conséquences : a,b∣c premiers entre eux ⇒ ab∣c ;
  p premier, p∣ab ⇒ p∣a ou p∣b.

### 9. Équations diophantiennes ax+by=c
- **Méthode** : (i) d=pgcd(a,b) divise c ? sinon ∅ ; (ii) simplifier par d ;
  (iii) Bézout → solution particulière (x₀,y₀) ; (iv) Gauss → **solutions générales**.
- **Exemple** 9x+6y=15 : d=3∣15 → 3x+2y=5 → (15,−20) → **x = 15+2k, y = −20−3k**.

### 10. PPCM
- **Déf** : plus petit multiple commun > 0. **Théorème : pgcd(a,b)×ppcm(a,b) = ab**.
  Ex : ppcm(12,15) = 60 (12×15/3).

### 11. Primalité, infinité, décomposition
- **Test** : n>1 premier si aucun premier **≤ √n** ne le divise. Ex : 409 (√≈20,2 ;
  testé 2,3,5,7,11,13,17,19) → **premier**.
- **Infinité** (Euclide, absurde) : p₁…pₙ+1 a un diviseur premier hors liste.
- **Décomposition unique** (admise) : n = p₁^α¹…pⱼ^αʲ. Usages : diviseurs, carrés,
  PGCD, PPCM. Ex : 60 = 2²·3·5.
- **Ératosthène** : rayer les multiples de 2, 3, 5… jusqu'à p² > N.

### 12. Numération en base b
- Tout a s'écrit **uniquement** a = aₙbⁿ+…+a₀ (0 ≤ aᵢ < b).
- **Binaire** (machines) : 1001₂ se lit chiffre à chiffre, pas « mille un ».
- Ex : 8345 = 8×10³+3×10²+4×10+5.

## 📐 Repères clés

| Élément | Contenu |
|---|---|
| a∣b | ∃q, b = aq · transitivité · combinaisons linéaires |
| Euclide | a = bq+r, 0≤r<b · unicité exigée |
| Congruences | a≡b ⟺ n∣(a−b) · +,−,×,^ compatibles |
| Bézout/Gauss | au+bv=d · a∣bc, a∧b=1 ⇒ a∣c |
| Diophantienne | d∣c ? → simplifier → Bézout → Gauss |
| pgcd×ppcm | = ab |
| Primalité | test ≤ √n · infinité · décomposition unique |

## ⭐ Tombe souvent aux devoirs

- Démontrer l'unicité de la division euclidienne ; Bézout ; Gauss.
- Euclide + remontée (identité de Bézout) + diophantienne complète.
- Critères (3, 9, 11) appliqués ; test de primalité (√n).
- Congruences : restes de puissances (ex : 10ᵏ mod 3/9).
- Décomposition → PGCD/PPCM/diviseurs.

## ❓ Questions d'auto-test

1. Énonce + démontre l'unicité de (q,r).
2. 456 divisible par 3 ? Pourquoi (preuve en 2 lignes) ?
3. pgcd(48,64) par Euclide + identité de Bézout simple.
4. Résous 9x+6y=15 dans ℤ (méthode en 4 étapes).
5. 409 premier ? Détaille le test.
