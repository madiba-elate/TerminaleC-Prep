# 📥 Comment envoyer tes cours — Mode d'emploi

Tu m'envoies tes programmes et cours, je m'occupe de tout :
**numérisation → correction → pages web de révision → flashcards → quiz → exercices interactifs → push sur GitHub.**

---

## 1. Ce que tu peux envoyer (tous formats acceptés)

| Format | Exemples | Ça marche ? |
|---|---|---|
| ✍️ Texte direct | Copier-coller dans le chat | ✅ Idéal |
| 📸 Photos | Cahier, fiche, tableau, polycopié photographié | ✅ Je retranscris |
| 📄 PDF / Word | Cours scanné, polycopié | ✅ J'extrais le contenu |
| 🎙️ Audio / vocal | Explication orale | ✅ Je retranscris |

> Pas besoin de tout retaper proprement. Envoie **tel quel**, même en vrac —
> la mise en forme, c'est mon travail.

## 2. Ordre d'envoi recommandé (par matière)

Pour chaque matière, envoie **dans cet ordre** :

1. **Le programme annuel** (la liste : Leçons + TD/TP + Dossiers, comme tu as fait pour ECM et Géographie)
2. **Les cours, dans l'ordre du programme** (Leçon 1, puis 2, puis 3…)
3. **Les TD / TP / Dossiers** rattachés à leurs leçons
4. **Les devoirs / évaluations / sujets** (énoncés + corrigés si tu les as)

> Une matière à la fois. Quand une matière est finie, on passe à la suivante.
> Ordre suggéré : Maths → Physique → Chimie → SVT → Philo → Anglais → Français/Littérature → Info → ECM → Géographie → EPS → TM.

## 3. Pour chaque cours, précise si possible

- La matière + le numéro/titre de la leçon (ex : « Physique, Leçon 4 : … »)
- S'il y a un schéma indispensable (photo du schéma = parfait)
- Ce qui tombe souvent aux devoirs selon ton prof (je le mets en ⭐ priorité)

## 4. Ce que je génère pour chaque cours reçu

| Livrable | Où il va | Format |
|---|---|---|
| Cours numérisé + corrigé | `matieres/<matiere>/cours/lecon-XX-titre.md` | Markdown |
| Page web de révision | `matieres/<matiere>/pages/lecon-XX-titre.html` | HTML (imprimable) |
| Flashcards | `matieres/<matiere>/flashcards/lecon-XX.json` | JSON |
| Quiz (80 % pour valider) | `matieres/<matiere>/quiz/lecon-XX.json` | JSON |
| Exercices + corrigés | `matieres/<matiere>/exercices/exo-XX-titre.md` | Markdown |
| Intégration dashboard | `matieres/<matiere>/index.html` (onglets ② ③ ④ ⑤) | HTML |

Les fichiers bruts que tu m'envoies (photos, PDF) sont archivés dans
`matieres/<matiere>/sources/` pour ne jamais rien perdre.

## 5. Convention de nommage (je m'en charge, info seulement)

- `lecon-01-titre-court.md` — cours (01, 02, … dans l'ordre du programme)
- `td-01-titre.md`, `tp-01-titre.md`, `dossier-01-titre.md`
- `exo-01-titre.md` — exercices et devoirs
- Toujours en minuscules, sans accents, `-` comme séparateur.

## 6. Suivi

Voir `SUIVI.md` à la racine : tableau matière par matière
(programme reçu ? cours reçus ? pages ? flashcards ? quiz ?).
Je le mets à jour à chaque push.
