/* Bibliothèque de méthodologies par thème — TerminaleC-Prep
   Utilisée par assets/exo-tabs.js pour remplir l'onglet 3 (Méthode & Rédaction).
   Thèmes : incertitudes, mecanique, electricite, optique, moderne, info, grammaire, expression. */
window.METHODOS = {

incertitudes: {
title: "Mesures & Incertitudes",
method: "<ol>"
+ "<li><b>Identifier l'opération :</b> somme/différence → on additionne les <b>incertitudes absolues Δ</b> ; produit/quotient/puissance → on additionne les <b>incertitudes relatives IR = ΔX/X</b> (puissance n → n × IR).</li>"
+ "<li><b>Calculer la valeur</b> avec les valeurs centrales, sans arrondir entre les étapes.</li>"
+ "<li><b>Calculer l'incertitude</b> (Δ ou IR), puis l'absolue : Δ = IR × valeur.</li>"
+ "<li><b>Arrondir l'incertitude à 1 chiffre significatif</b> (2 si commence par 1), puis arrondir la valeur <b>au même rang</b>.</li>"
+ "<li><b>Présenter :</b> X = (valeur ± Δ) unité, avec IR en %.</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>« D'après la règle de propagation, pour une somme on additionne les incertitudes absolues : ΔR = … »</li>"
+ "<li>« Pour un produit, on additionne les incertitudes relatives : IR = … soit Δ = … »</li>"
+ "<li>Toujours <b>encadrer le résultat final</b> avec unité + incertitude + IR %.</li>"
+ "<li>Un coefficient estimé (60 %, comptage exact) <b>n'ajoute pas</b> d'incertitude — le signaler.</li>"
+ "</ul>"
},

mecanique: {
title: "Mécanique",
method: "<ol>"
+ "<li><b>Système + référentiel</b> (supposé galiléen) + <b>bilan des forces</b> (schéma).</li>"
+ "<li><b>Appliquer la loi adaptée :</b> 2e loi de Newton (ΣF = ma), gravitation (F = GmM/r²), 3e loi de Kepler (T²/a³ = cte).</li>"
+ "<li><b>Vérifier l'homogénéité</b> de la formule avant l'application numérique.</li>"
+ "<li><b>Application numérique</b> en unités SI, résultat avec unité + ordre de grandeur vraisemblable.</li>"
+ "<li>Pendule/oscillations : T = 2π√(l/g) → g = 4π²l/T² ; mesurer sur <b>plusieurs périodes</b> pour réduire l'erreur.</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>« Système étudié : {…} ; référentiel terrestre supposé galiléen. »</li>"
+ "<li>« Bilan des forces : … D'après la 2e loi de Newton : … »</li>"
+ "<li>« D'après la 3e loi de Kepler : T²/a³ = 4π²/GM, d'où M = … »</li>"
+ "<li>Encadrer chaque résultat littéral <b>puis</b> numérique, avec unités.</li>"
+ "</ul>"
},

electricite: {
title: "Électricité",
method: "<ol>"
+ "<li><b>Schéma du circuit</b> avec sens du courant et flèches de tension.</li>"
+ "<li><b>Résistances :</b> série R = R₁ + R₂ ; parallèle 1/R = 1/R₁ + 1/R₂ (ou R = R₁R₂/(R₁+R₂)).</li>"
+ "<li><b>Lois :</b> Ohm (U = RI), nœuds, mailles ; <b>énergie Joule E = RI²t</b> (ou P = UI).</li>"
+ "<li><b>Condensateur :</b> q = Cu, τ = RC ; angle de perte : modèle R-C série/parallèle.</li>"
+ "<li><b>Unités :</b> Ω, A, V, J, W, F — convertir (mA → A, kΩ → Ω) <b>avant</b> de calculer.</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>« D'après la loi d'Ohm : U = RI, soit I = … »</li>"
+ "<li>« Les résistances étant en parallèle : 1/R = … » / « en série : R = … »</li>"
+ "<li>« L'énergie dissipée par effet Joule vaut E = RI²t = … J »</li>"
+ "<li>Schéma + formules littérales d'abord, <b>puis</b> application numérique encadrée.</li>"
+ "</ul>"
},

optique: {
title: "Optique (interférences)",
method: "<ol>"
+ "<li><b>Schéma du dispositif</b> (fentes d'Young : distance a entre fentes, écran à D).</li>"
+ "<li><b>Condition d'interférences :</b> sources cohérentes, synchrones, même longueur d'onde.</li>"
+ "<li><b>Interfrange :</b> i = λD/a — vérifier l'homogénéité (m·m/m = m).</li>"
+ "<li>Mesurer <b>plusieurs interfranges</b> (ex : 10i) pour diviser l'erreur de lecture.</li>"
+ "<li>En déduire λ = ia/D avec incertitude (produit/quotient → somme des IR).</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>« Les deux fentes éclairées par la même source sont cohérentes : il y a interférences. »</li>"
+ "<li>« L'interfrange vaut i = λD/a, d'où λ = ia/D = … m »</li>"
+ "<li>Préciser : « mesure effectuée sur n = … interfranges pour réduire l'incertitude ».</li>"
+ "</ul>"
},

moderne: {
title: "Physique moderne (analyse dimensionnelle)",
method: "<ol>"
+ "<li><b>Lister les constantes</b> disponibles et leurs dimensions (ex : [h] = ML²T⁻¹, [G] = M⁻¹L³T⁻², [c] = LT⁻¹).</li>"
+ "<li><b>Poser la combinaison</b> : X = h^α · G^β · c^γ (exposants inconnus).</li>"
+ "<li><b>Écrire l'équation aux dimensions</b> et identifier les exposants de M, L, T membre à membre.</li>"
+ "<li><b>Résoudre le système</b> 3 équations / 3 inconnues.</li>"
+ "<li><b>Vérifier</b> en réinjectant les exposants dans les dimensions.</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>« Cherchons X sous la forme X = h^α G^β c^γ. »</li>"
+ "<li>« Par identification des exposants de M, L et T : système …, soit α = …, β = …, γ = … »</li>"
+ "<li>« D'où : X = … (à un facteur sans dimension près). »</li>"
+ "</ul>"
},

info: {
title: "Programmation & Algorithmique",
method: "<ol>"
+ "<li><b>Définitions :</b> mot-clé → phrase courte + exemple (tableau = notes d'une classe, classeur = fichier tableur…).</li>"
+ "<li><b>Programme C :</b> #include, constantes (<b>const</b>, pas #define), scanf pour lire, printf avec <b>%.2f</b>, formule avec <b>4.0/3.0</b> (jamais 4/3 entier).</li>"
+ "<li><b>Algorithme :</b> Variables → Lire N → Tableau Notes[1..N] → boucle POUR de lecture → boucle de somme → Moyenne = Somme/N → Écrire.</li>"
+ "<li><b>Structure de données :</b> nommer le tableau et son usage (Notes[i] = note du i-ème élève).</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>Définitions : <b>terme + catégorie + exemple</b> en une phrase.</li>"
+ "<li>Programme C : recopier <b>exactement</b> (points-virgules, &R dans scanf, \\n final), tester mentalement avec R = 1.</li>"
+ "<li>Algorithme : indentation + mots-clés (Début, POUR…FIN POUR, Fin), flèche ← pour l'affectation.</li>"
+ "</ul>"
},

grammaire: {
title: "Grammaire anglaise (tenses)",
method: "<ol>"
+ "<li><b>Repérer les marqueurs</b> (signal words) : yesterday/last → past ; always/every → present simple ; tomorrow/next → future.</li>"
+ "<li><b>Choisir le temps</b> d'après le sens : habitude, action terminée datée, projet, prédiction…</li>"
+ "<li><b>Construire les 3 formes :</b> affirmative (+) / négative (-) avec do-does-did / interrogative (?) avec inversion.</li>"
+ "<li><b>Pièges BAC :</b> he/she/it + s au présent ; did + base verbale (jamais -ed) ; will vs be going to.</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>Justifier le temps : « yesterday → finished past action → past simple ».</li>"
+ "<li>En texte formel : <b>no contractions</b> (do not, is not) et ponctuation soignée.</li>"
+ "<li>Relire en vérifiant sujet-verbe et la terminaison de chaque verbe.</li>"
+ "</ul>"
},

expression: {
title: "Expression écrite (lettres)",
method: "<ol>"
+ "<li><b>Plan en 9 blocs :</b> adresse expéditeur → date → destinataire → objet → salutation → introduction → corps (2-3 §) → conclusion → formule + signature.</li>"
+ "<li><b>Introduction :</b> qui je suis + pourquoi j'écris + référence (annonce, site…).</li>"
+ "<li><b>Corps :</b> arguments concrets et chiffrés (classe, moyenne, compétences, dates de disponibilité).</li>"
+ "<li><b>Conclusion :</b> demande d'entretien + disponibilités + remerciements.</li>"
+ "<li><b>Formule :</b> Dear Sir/Madam → Yours faithfully ; Dear Mr/Ms + nom → Yours sincerely.</li>"
+ "</ol>",
redac: "<ul>"
+ "<li>Ton <b>formel et poli</b>, phrases complètes, <b>aucune contraction</b> (I am, not I'm).</li>"
+ "<li>Paragraphes courts et aérés, un argument par paragraphe.</li>"
+ "<li>Nom en bas uniquement (jamais en haut avec l'adresse), pièces jointes listées (Enclosures).</li>"
+ "</ul>"
}

};
