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
| 🎙️ Voix (dictée) | Tu parles, l'appareil écrit, tu me colles le texte (voir §8) | ✅ Idéal pour les gros cours |

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
Les cours apparaissent dans l'onglet ③ « Cours » du dashboard via le tableau
`COURS` en bas de `matieres/<matiere>/index.html` : 1 cours = 1 objet
`{t:"…", d:"…", seq:"S1", page:"pages/….html"}`.

## 5. Convention de nommage (je m'en charge, info seulement)

- `lecon-01-titre-court.md` — cours (01, 02, … dans l'ordre du programme)
- `td-01-titre.md`, `tp-01-titre.md`, `dossier-01-titre.md`
- `exo-01-titre.md` — exercices et devoirs
- Toujours en minuscules, sans accents, `-` comme séparateur.

## 6. Suivi

Voir `SUIVI.md` à la racine : tableau matière par matière
(programme reçu ? cours reçus ? pages ? flashcards ? quiz ?).
Je le mets à jour à chaque push.

## 7. Ajouter un exercice au Hub Exercices (`hub-exercices.html`)

1. Copier la fiche dans `matieres/<matiere>/exercices/` (nom : `exo-XX-titre-court.html`,
   minuscules, sans accents ; l'original brut reste dans `matieres/<matiere>/sources/`).
   Chaque fiche **doit afficher 3 onglets** (📝 Énoncé · ✅ Résolution · 🧭 Méthode & Rédaction) :
   ajouter avant `</head>` → `<link rel="stylesheet" href="../../../assets/exo-tabs.css">`,
   et avant `</body>` → la config + les 2 scripts partagés :
   `<script>window.EXO_CONFIG = {theme:"…"}</script>` puis
   `<script src="../../../assets/methodos.js"></script>` puis
   `<script src="../../../assets/exo-tabs.js"></script>`.
   Cas standards : sections `.exo` + blocs `.enonce` (onglet 1) et `.rappel` (onglet 3) —
   le moteur découpe seul. Cas spéciaux : voir les configs de `formal_letter.html`
   (panneaux directs), `english_tenses.html` (sections `.card`) et `exo_12` (`splitQA`).
   Thèmes dispo dans `assets/methodos.js` : incertitudes, mecanique, electricite,
   optique, moderne, info, grammaire, expression (plusieurs possibles en tableau).
   Lien direct vers un onglet : `…/exo-XX.html#t2` (résolution) ou `#t3` (méthode).
2. Ajouter **une ligne** au `REGISTRE` dans `hub-exercices.html` :
   `{mat:"…", theme:"…", titre:"…", desc:"…", file:"matieres/<matiere>/exercices/<fichier>"}`
   — le compteur, les vues matière/thème et la recherche se mettent à jour seuls.
3. Thèmes existants à réutiliser en priorité : Physique (Mesures & Incertitudes,
   Mécanique, Électricité, Optique, Physique moderne), Info (Programmation & Algo),
   Anglais (Grammaire, Expression écrite), Français (Expression écrite).
   Nouveau thème possible si le programme l'exige (le mettre aussi dans le README
   de la matière).
4. Mettre à jour `SUIVI.md` (colonne Exercices) et le badge du lien sidebar dans `index.html`.

## 8. Dicter un cours à la voix (sans rien taper)

> ⚠️ Je ne peux pas écouter de fichiers audio (mp3, vocaux…) : la transcription
> doit se faire **sur ton appareil**, puis tu me colles le texte obtenu.

**Option A — PC Windows (recommandé) : Win+H**
1. Clique dans n'importe quel champ de texte (ce chat, Bloc-notes, Word).
2. Appuie sur **Win+H** → la barre micro apparaît, parle en français.
3. Dicte la ponctuation : « point », « virgule », « nouvelle ligne ».
4. Relis vite fait (noms propres, sigles), copie-colle ici avec juste
   « [Matière], Leçon X : … » en première ligne.

**Option B — Téléphone**
- Android : micro du clavier Gboard dans n'importe quelle appli, puis colle ici.
- iPhone : touche micro du clavier (Réglages → Général → Clavier → Activer Dictée).

**Option C — Word (gros cours)**
- Word (PC ou office.com gratuit) → Accueil → **Dicter** → français → parle
  une leçon entière → m'envoie le texte (+ photos des schémas/formules).

**Conseils pour une bonne dictée**
- 1 session = 1 leçon ; commence par « Matière, Leçon X, titre ».
- Épelle les sigles (« C-E-M-A-C ») et surveille les noms propres (COPAX, OIF…).
- Ne dicte PAS les formules au caractère près : **photographie-les**,
  écris juste « voir photo 1 » à l'endroit concerné (pareil pour les schémas).
- Un gros cours = 2-3 messages, c'est parfait.
