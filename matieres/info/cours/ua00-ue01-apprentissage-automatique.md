# 💻 Info — UA 0 / UE 1 : Principes des modèles d'apprentissage automatique

> **Matière :** Informatique · **Module 1** : Exploitation d'un environnement numérique
> **Position programme :** S1 · **Date de numérisation :** 2026-09-19 · Envoi vocal retranscrit et corrigé.

---

## 🎯 L'essentiel en 5 lignes

1. **Apprentissage supervisé** = le programme s'entraîne sur des exemples **accompagnés de la bonne réponse** pour prédire des cas nouveaux.
2. **Modèle** = le résultat construit à l'issue de l'entraînement, utilisé pour produire les réponses.
3. **Prédiction** = la réponse donnée sur un **nouveau cas** grâce au modèle.
4. **Non supervisé** = aucune réponse fournie : le programme **regroupe lui-même** les données similaires.
5. Tout système IA suit 3 étapes : **entraînement → test → prédiction**.

## 📖 Cours optimisé

### 1. Définitions des mots clés

- **Apprentissage supervisé** : méthode d'apprentissage automatique où le programme s'entraîne à partir d'exemples déjà associés à la bonne réponse, afin d'apprendre à prédire cette réponse pour de nouveaux cas.
- **Modèle** : résultat construit par le programme à l'issue de son entraînement, et qu'il utilise pour produire ses réponses.
- **Prédiction** : réponse que le programme donne lorsqu'il analyse un nouveau cas grâce à son modèle.

### 2. Apprentissage supervisé vs non supervisé

| | Supervisé | Non supervisé |
|---|---|---|
| Données d'entraînement | Chaque exemple est **accompagné de la bonne réponse** | **Aucune réponse** donnée à l'avance |
| Rôle du programme | Associer un profil à une réponse connue | Observer et **regrouper lui-même** les données similaires |
| Exemple type | Dossiers d'anciens élèves **étiquetés** par filière de réussite → prédire la filière d'un nouvel élève | Regrouper des élèves aux profils similaires **sans savoir** à l'avance ce qui les rapproche |

### 3. Notions d'entraînement, de test et de prédiction

1. **L'entraînement** : le programme analyse et apprend à partir d'un grand nombre d'exemples passés.
2. **Le test** : on vérifie les performances du modèle sur des données **qu'il n'a pas utilisées pour apprendre**.
3. **La prédiction** : une fois validé, le modèle est utilisé pour répondre à de **nouveaux cas**.

### 4. Exemples d'applications concrètes

- **Ex. 1 (supervisé)** : détection des transactions frauduleuses sur une application de Mobile Money, à partir de transactions déjà classées « frauduleuse / non ».
- **Ex. 2 (non supervisé)** : regroupement des clients d'une entreprise selon leurs habitudes d'achat, sans catégories prédéfinies.
- **Ex. 3 (supervisé)** : maintenance prédictive des machines industrielles à partir de l'historique des pannes.
- **Ex. 4 (supervisé)** : recommandation de filières ou de métiers selon un profil scolaire.

## 📐 Repères clés

| Élément | Contenu |
|---|---|
| Sigle à épeler | IA = Intelligence artificielle |
| Triplet gagnant | Entraînement → Test → Prédiction (dans cet ordre) |
| Indice « supervisé » | exemples **étiquetés** / bonne réponse fournie |
| Indice « non supervisé » | **regroupement** sans catégories prédéfinies |

## ⭐ Tombe souvent aux devoirs

- Définir les 3 mots clés (formulations exactes ci-dessus).
- Distinguer supervisé / non supervisé **avec justification** (étiquettes ou non).
- Restituer les 3 étapes dans l'ordre + les illustrer sur un exemple.
- Exemple personnel : domaine + type d'apprentissage **justifié**.

## ❓ Questions d'auto-test

1. Un programme apprend sur des transactions déjà classées « frauduleuse / non » : quel type d'apprentissage ? Pourquoi ?
2. À quoi sert l'étape de test ? Sur quelles données ?
3. Regrouper des clients sans catégories prédéfinies : supervisé ou non ? Justifie.
4. Donne l'ordre des 3 étapes de construction d'un système IA.
