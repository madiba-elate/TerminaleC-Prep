# ✍️ Exercice — UA 0 / UE 1 : Apprentissage automatique

> **Matière :** Informatique · S1 · Sans calculatrice. Rédige avec les définitions exactes du cours.

## Énoncé

**1)** Propose un **exemple personnel** d'application qui pourrait utiliser l'apprentissage
automatique dans ton futur métier : précise le domaine / métier visé **et** le type
d'apprentissage (supervisé ou non supervisé), en justifiant.

**2)** À partir d'une application réelle d'apprentissage **supervisé**, identifie les étapes
d'**entraînement**, de **test** et de **prédiction**.

---

## ✅ Corrigé type (80 % = 2 réponses justes et justifiées)

### Question 1 — Exemple personnel (modèle de réponse complète)

> **Domaine / futur métier :** services financiers numériques (ex : application de paiement
> type Mobile Money / Orange Money).
> **Application :** détection automatique des transactions frauduleuses.
> **Type : apprentissage supervisé**, car chaque exemple d'entraînement est accompagné de
> la bonne réponse : l'historique contient des transactions déjà classées « frauduleuse »
> ou « légitime » (signalements vérifiés). Le programme apprend à associer un profil de
> transaction à un verdict, puis prédit le verdict des nouvelles transactions.

Barème indicatif : domaine précis (1 pt) + type correct (1 pt) + **justification par les
étiquettes** (2 pts). Tout autre exemple cohérent et justifié est accepté
(ex : recommandation de filières selon le profil scolaire → supervisé ;
regroupement de clients sans catégories → non supervisé).

### Question 2 — Les 3 étapes sur l'exemple de la fraude Mobile Money

- **Entraînement :** le programme analyse des **milliers de transactions passées étiquetées**
  (frauduleuse / légitime) et construit son **modèle** (quels indices annoncent une fraude :
  montant inhabituel, heure, fréquence…).
- **Test :** on mesure le **taux de bonnes détections** sur des transactions **récentes que
  le modèle n'a jamais vues** — sans les réutiliser pour apprendre.
- **Prédiction :** chaque **nouvelle transaction** est classée en temps réel
  (frauduleuse / légitime) → alerte ou blocage automatique.

Barème indicatif : 3 étapes nommées dans l'ordre (1,5 pt) + chacune illustrée sur
l'exemple **avec les mots clés** (étiquetées / non vues / temps réel) (2,5 pts).

> ⭐ Phrase qui rapporte : « C'est supervisé **car les exemples sont étiquetés** » /
> « le test se fait sur des données **non utilisées pour apprendre** ».
