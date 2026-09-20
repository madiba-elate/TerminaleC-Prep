# 📐 Maths — Chapitre 1 : Arithmétique dans ℤ (VERSION INTÉGRALE)

> **Source :** Lise Jean-Claude, *Cours d'arithmétique — Terminale S* (16 p., transcription intégrale fidèle).
> **Position :** S1 · **Version détaillée du :** 2026-09-19.
> Tout ce qui suit est exigible sauf mention « admis » ou « culture ».

---

## 🎯 L'essentiel en 5 lignes

1. **a divise b** (a∣b) : ∃q ∈ ℤ, b = aq · Règles : transitivité, combinaisons linéaires αb+βc, a∣b ⇒ |a∣≤∣b∣.
2. **Division euclidienne** : a = bq + r, 0 ≤ r < b (existence + unicité démontrées) — dans ℤ : 0 ≤ r < ∣b∣.
3. **Congruences** : a ≡ b [n] ⟺ n∣(a−b) — compatibles avec +, −, ×, puissances (preuves incluses).
4. **PGCD** (Euclide : dernier reste non nul, preuve par double inclusion) → **Bézout** (preuve complète) → **Gauss** (preuve complète) → **diophantiennes** (méthode + exemple 9x+6y=15).
5. **PPCM** : pgcd×ppcm = ab (preuve complète) · **Premiers** : test p ≤ √n, infinité (absurde), décomposition unique (existence prouvée, unicité admise), Ératosthène, bases.

## 📖 Cours intégral

### 0. Introduction — le numérique repose sur l'arithmétique
Le développement de l'informatique et du « numérique » est étroitement lié à
l'arithmétique : pour traiter informations et documents multimédias (textes, sons,
images) sur des machines, il faut les **coder**. Toute information peut être codée
avec des suites des deux symboles **0 et 1** : c'est la **représentation binaire**.
ℕ = entiers naturels, ℤ = entiers relatifs.

### 1. Trois axiomes de ℕ
- Toute partie non vide de ℕ admet un **plus petit élément** (faux dans ℤ).
- Toute partie non vide **majorée** de ℕ admet un **plus grand élément**.
- Toute suite d'entiers naturels **strictement décroissante est finie** (faux dans ℤ).
  C'est ce 3e axiome qui garantit que l'algorithme d'Euclide **termine**.

### 2. Divisibilité dans ℤ — définitions, 5 théorèmes ET démonstrations
- **Déf** : a∣b ⟺ ∃q ∈ ℤ, b = aq. On écrit a∣b (« b divisible par a », « a diviseur », « b multiple »).
- **Th.1** : a∣b ⇒ a∣bc. *Preuve.* b = aq donc bc = (aq)c = a(qc). ∎
- **Th.2 (transitivité)** : a∣b, b∣c ⇒ a∣c. *Preuve.* b = aq, c = br donc c = (aq)r = a(qr). ∎
- **Th.3 (combinaisons linéaires)** : a∣b, a∣c ⇒ a∣(αb+βc). *Preuve.* b = aq, c = ar
  donc αb+βc = α(aq)+β(ar) = a(αq+βr). ∎
- **Th.4** : a∣b, b≠0 ⇒ ∣a∣≤∣b∣ (car b = aq, q≠0, ∣q∣≥1). Tout entier non nul a un
  nombre **fini** de diviseurs.
- **Th.5** : a∣b et b∣a ⇒ ∣a∣=∣b∣, soit **a = ±b**.

### 3. Nombres premiers — disposition pratique
- Tout n≠1 a au moins 2 diviseurs : 1 et n. **Disposition pratique** (diviseurs de
  150, 12, 7) : 150 = 1,2,3,5,6,10,15,25,30,50,75,150 · 12 = 1,2,3,4,6,12 · 7 = 1,7.
- **Remarque** : si n = p×q avec p ≤ q alors **p ≤ √n** (sinon pq > n, absurde).
- **Déf** : entier ≠ 1 dont les seuls diviseurs positifs sont 1 et lui-même.
  **1 et 0 ne sont PAS premiers.** Ex : 2, 3, 5, 7, 11, 13, …, 37, …, 41, …

### 4. Division euclidienne — TOUTE la démonstration
- **Archimède** : ∀a ∈ ℕ, b ∈ ℕ*, ∃n, nb ≥ a. *Preuve.* Si a=0, n=1 ; sinon n=a
  (b≥1 ⇒ ab≥a). **Conséquence** : ∃q, **bq ≤ a < b(q+1)** — a est entre deux
  multiples consécutifs (les intervalles [bq;b(q+1)[ « recouvrent » ℕ).
- **Existence** : de bq ≤ a < b(q+1), pose r = a−bq : **a = bq+r, 0 ≤ r < b**.
  (Preuve fine : E = {n : nb > a} non vide par Archimède → plus petit élément p →
  (p−1)b ≤ a < pb, q = p−1.)
- **Unicité (exigible)** : deux couples (q₁,r₁),(q₂,r₂) → −b < r₁−r₂ < b et
  r₁−r₂ = b(q₁−q₂) multiple de b → **= 0** → r₁=r₂ puis q₁=q₂.
- **Dans ℤ** : a = bq+r avec **0 ≤ r < ∣b∣** (reste toujours positif ;
  existence et unicité en exercices).
- Vocabulaire : **dividende** a, **diviseur** b, **quotient** q, **reste** r.

### 5. Congruences — définitions ET preuves
- **Déf** : a et b ont **même reste** mod n (n ∈ ℕ*) ⟺ **a ≡ b [n]**.
- **Théorème** : même reste ⟺ **n∣(a−b)**. *Preuve.* a = nq+r, b = nq′+r′,
  a−b = n(q−q′)+(r−r′), −n < r−r′ < n : si r=r′ alors n∣(a−b) ; si n∣(a−b)
  alors r−r′ multiple de n entre −n et n → = 0. ∎
- **Compatibilité** : mêmes restes pour (a,a′),(b,b′) ⇒ mêmes restes pour
  **a+b, a−b, ab, aᵏ**. *Preuve.* a−a′=nq, b−b′=nq′ : a+b = n(q+q′)+(a′+b′) ;
  ab = n(nqq′+⋯)+a′b′ ; puissances par **récurrence**. En congruences :
  a+b≡a′+b′, ab≡a′b′, aᵏ≡a′ᵏ [n].

### 6. Critères de divisibilité — exemple 456 + cas général
- **Exemple détaillé** : 456 = 4×10²+5×10+6 ; 10 = 3×3+1, 10² = 3×33+1 ;
  456 = 4+5+6 + 3×(4×33+5×3) = 15 + multiple de 3 → **divisible par 3** (et réciproquement).
- **Cas général** : 10 ≡ 1 [3] donc 10ᵏ ≡ 1 [3] → n ≡ somme de ses chiffres [3].
  **n divisible par 3 ⟺ somme des chiffres divisible par 3.**
- À démontrer : **par 5** (dernier chiffre) · **par 9** (somme) · **par 11**
  (somme alternée Σ(−1)ᵏaₖ). Exo : conjecturer 13, 17, 19, 25. Critère **par 2** en exercice.

### 7. PGCD et Euclide — preuve par double inclusion
- **Déf** : D(a) = diviseurs positifs. D(a)∩D(b) non vide (∋1), majorée → plus
  grand élément = **PGCD** (a∧b). **Diviseurs communs = diviseurs du PGCD.**
  Si relatifs : pgcd(a,b) = pgcd(∣a∣,∣b∣). Ex : D(48)∩D(64) = {1,2,4,8,16} → 16.
- **Euclide** : a = bq₀+r₀ → D(a)∩D(b) = D(b)∩D(r₀) → (b,r₀) → … restes
  strictement décroissants → **fini** → premier reste nul rₙ=0 → PGCD = **rₙ₋₁**.
  *Preuve étape 1 (double inclusion)* : c∣a,c∣b ⇒ c∣a−bq₀ = r₀ ; réciproque :
  c∣b,c∣r₀ ⇒ c∣bq₀+r₀ = a. *Étape 3* : D(0) = ℕ.
  Ex : 64 = 48×1+**16** ; 48 = 16×3+**0** → **16**.
- Propriétés : pgcd(a,1)=1, pgcd(a,a)=a, pgcd(a,0)=a, symétrie, a∣b ⟺ pgcd=a,
  pgcd(ka,kb)=k·pgcd, simplifications par k.

### 8. Premiers entre eux — Bézout (preuve complète) — Gauss (preuve complète)
- **Déf** : pgcd = 1. Ex : premier p ∤ b ⇒ pgcd = 1.
- **Bézout** : pgcd = d ⟺ ∃u,v ∈ ℤ, **au+bv = d**. *Preuve.* E = {na+mb} ;
  E∩ℕ* non vide (∋a) → plus petit élément d = au+bv ; tout x ∈ E∩ℕ* :
  x = dq+r (0≤r<d), r ∈ E ⇒ r=0 → E∩ℕ* = multiples de d ; d′=pgcd divise d
  et d divise d′ → **d = d′**. Corollaire : a∧b=1 ⟺ ∃u,v, **au+bv=1**
  (u,v non uniques : 3·1+2·(−1) = 3·(−5)+2·8 = 1).
  Ex du cours : 44 = (−2)×25872 + 107×484 (remontée).
- **Gauss** : **a∣bc et a∧b=1 ⇒ a∣c**. *Preuve.* bc = ka ; au+bv=1 → ×c :
  auc+bcv = c → c = auc+kav = a(uc+kv). ∎
- Conséquences : a,b∣c premiers entre eux ⇒ **ab∣c** ; p premier, p∣ab ⇒ **p∣a ou p∣b**.

### 9. Équations diophantiennes — méthode + exemple intégral
- **Méthode** : ax+by=c, d=pgcd. Si d∤c → **∅**. Sinon simplifier par d
  (a′,b′ premiers entre eux), Bézout → **particulière** (x₀,y₀), Gauss → **générales**.
- **Exemple 9x+6y=15** : d=3∣15 → 3x+2y=5 ; Bézout 3·3+2·(−4)=1 → ×5 :
  **(15,−20)** ; 3(x−15)=2(−20−y), 2∧3=1 → 2∣(x−15) → **x = 15+2k, y = −20−3k**.

### 10. PPCM — définition, lien, preuve
- **Déf** : plus petit multiple commun > 0 (l'ensemble contient ab).
  Propriétés : symétrie, ppcm(a,a)=a, ppcm(a,1)=a, a∣b ⇒ ppcm=b.
- **Théorème : pgcd(a,b)×ppcm(a,b) = ab.** *Preuve.* m=ppcm, d=pgcd,
  a=da′, b=db′ (a′,b′ premiers entre eux) : da′b′ multiple commun → m ≤ da′b′ ;
  m=pa=qb → pa′=qb′ → b′∣p (Gauss) → p=kb′ → m=k(da′b′) ≥ da′b′ → **m=da′b′**,
  ×d : md = ab. ∎ Ex : ppcm(12,15) = 60.

### 11. Primalité : test, infinité, décomposition
- **Théorème 1** : n>1 admet un diviseur premier ; si non premier, un **p ≤ √n**.
  *Preuve.* E = diviseurs >1 ∋ n → plus petit élément p, premier (tout diviseur
  q de p divise n, q=p) ; n=pk → p²≤n. **Test** : aucun premier ≤ √n ne divise n.
  Ex : 409, √≈20,2, testés 2,3,5,7,11,13,17,19 → **premier**.
- **Infinité (absurde)** : p₁…pₙ+1 ≥ 2 a un diviseur premier q ; q = un pᵢ ⇒
  q∣1 → q=1, impossible. Donc **premiers infinis**.
- **Décomposition** : tout n>1 = produit de premiers (**existence prouvée** par
  suites (pᵢ),(aᵢ) décroissantes ; **unicité admise**). Ex : 60 = 2²·3·5,
  4896 = 17·3²·2⁵ (méthode manuelle en colonnes). Usages : diviseurs, carrés,
  PGCD, PPCM, somme des diviseurs.
- **Curiosités (culture)** : Mersenne 2ᵖ−1, Fermat Fₙ=2^(2ⁿ)+1 (faux dès n=5,
  Euler) — records 1998 du document (dépassés depuis).
- **Ératosthène** : grille 1..N, rayer 1, multiples de 2 (dès 2²), 3 (dès 3²),
  5… jusqu'à **p² > N** ; les non rayés sont premiers.

### 12. Numération en base b
- Cardinal (compter, bijections : bergers, cailloux → « calcul ») vs ordinal
  (numéroter) — on peut les confondre sans danger.
- **Principe positionnel** : regroupements par paquets de b ; chiffre 0 marque
  l'absence ; une unité vaut b de l'ordre précédent.
- **Théorème** : tout a s'écrit **uniquement** a = aₙbⁿ+…+a₀ (0≤aᵢ<b).
- **Binaire** (machines à 2 états) : 1001₂ se lit chiffre à chiffre, jamais « mille un ».
- Base 12 : symboles 0-9, α, β. Ex : 8345 = 8×10³+3×10²+4×10+5.
- **Exercice corrigé (points en base 3)** : a) 17 points = 1×9+2×3+2 = **122₃** ;
  b) 20 points = 2×9+0×3+2 = **202₃**.

## 📐 Repères clés

| Élément | Contenu |
|---|---|
| a∣b | ∃q, b = aq · transitivité · combinaisons linéaires |
| Euclide | a = bq+r, 0≤r<b · existence (Archimède+E) · unicité (−b<r₁−r₂<b) |
| Congruences | a≡b ⟺ n∣(a−b) · +,−,×,^ (récurrence) · 10≡1[3] |
| Bézout/Gauss | E∩ℕ* = multiples de d · a∣bc, a∧b=1 ⇒ a∣c |
| Diophantienne | d∣c ? → simplifier → Bézout → Gauss |
| pgcd×ppcm | = ab (double inégalité, Gauss) |
| Premiers | test ≤ √n · infinité (absurde) · décomposition unique |
| Bases | écriture unique · binaire · 1001₂ ≠ mille un |

## ⭐ Tombe souvent aux devoirs

- Démontrer : unicité euclidienne, compatibilités, Bézout, Gauss, infinité.
- Euclide + remontée + diophantienne complète (4 étapes).
- Critères (3, 9, 11) + test √n + restes de puissances.
- Décomposition → PGCD/PPCM/diviseurs ; changements de base.

## ❓ Questions d'auto-test

1. Prouve l'unicité de (q,r) en 3 lignes.
2. Prouve : a≡b[n] ⟺ n∣(a−b).
3. 456 divisible par 3 : preuve complète via 10≡1[3].
4. Résous 9x+6y=15 (4 étapes nommées).
5. Prouve qu'il y a une infinité de premiers (absurde).
