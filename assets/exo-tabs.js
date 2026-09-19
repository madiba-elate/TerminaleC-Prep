/* Moteur des onglets standard des fiches d'exercices — TerminaleC-Prep
   Fonctionne en file:// (aucun fetch). Piloté par window.EXO_CONFIG posé avant ce script :
   {
     theme: "incertitudes" | ["mecanique","electricite"],  // clé(s) de window.METHODOS
     sectionSel: ".exo",      // sections à découper (défaut ".exo")
     titleSel: "h2",          // titre de section (défaut "h2")
     scope: ".container",     // conteneur des sections (défaut ".container")
     toTab1: ".enonce",       // sélecteur(s) allant à l'onglet 1 (défaut ".enonce")
     toTab3: ".rappel",       // sélecteur(s) allant à l'onglet 3 (défaut ".rappel")
     globalTab3: ".tip",      // sélecteur(s) hors sections allant à l'onglet 3 (optionnel)
     splitQA: ".q",           // blocs Question→Réponse à scinder T1/T2 (optionnel)
     panels: {tab1:".schema", tab2:".paper"},  // mode direct (hors sections)
     labels: {t1:"…", t2:"…", t3:"…"}          // renommer les onglets (optionnel)
   }
   Reste du contenu des sections → onglet 2 (Résolution). */
(function () {
  var cfg = window.EXO_CONFIG || {};
  var M = window.METHODOS || {};
  var themes = [];
  if (cfg.theme) themes = Array.isArray(cfg.theme) ? cfg.theme : [cfg.theme];
  if (cfg.themes) themes = themes.concat(cfg.themes);

  var L = cfg.labels || {};
  var T1 = L.t1 || "\uD83D\uDCDD \u00C9nonc\u00E9";
  var T2 = L.t2 || "\u2705 R\u00E9solution";
  var T3 = L.t3 || "\uD83E\uDDED M\u00E9thode & R\u00E9daction";

  function el(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }

  var bar = el("div", "xt-bar");
  var b1 = el("button", "xt-btn xt-active", T1);
  var b2 = el("button", "xt-btn", T2);
  var b3 = el("button", "xt-btn", T3);
  b1.type = b2.type = b3.type = "button";
  bar.appendChild(b1); bar.appendChild(b2); bar.appendChild(b3);

  var p1 = el("div", "xt-panel xt-show");
  var p2 = el("div", "xt-panel");
  var p3 = el("div", "xt-panel");

  function secTitle(t) { return el("div", "xt-sec", t); }
  function empty(txt) { return el("div", "xt-empty", txt); }

  /* ---------- MODE DIRECT : sélecteurs explicites ---------- */
  if (cfg.panels) {
    var n1 = document.querySelector(cfg.panels.tab1);
    var n2 = cfg.panels.tab2 ? document.querySelector(cfg.panels.tab2) : null;
    if (n1) {
      /* pleine largeur si le parent est une grille (ex : formal_letter) */
      var ref = n1.parentNode, anchorHost = ref, anchor = n1;
      try {
        if (window.getComputedStyle && window.getComputedStyle(ref).display === "grid") {
          anchorHost = ref.parentNode; anchor = ref;
        }
      } catch (e) {}
      anchorHost.insertBefore(bar, anchor);
      bar.parentNode.insertBefore(p1, bar.nextSibling);
      bar.parentNode.insertBefore(p2, p1.nextSibling);
      bar.parentNode.insertBefore(p3, p2.nextSibling);
      p1.appendChild(n1);
      if (n2) p2.appendChild(n2);
    }
  } else {
    /* ---------- MODE SECTIONS ---------- */
    var scope = document.querySelector(cfg.scope || ".container") || document.body;
    scope.parentNode.insertBefore(bar, scope);
    /* blocs à garder visibles avant les onglets (ex : sommaire) */
    if (cfg.preTabs) {
      Array.prototype.forEach.call(scope.querySelectorAll(cfg.preTabs), function (n) {
        bar.parentNode.insertBefore(n, bar);
      });
    }
    bar.parentNode.insertBefore(p1, bar.nextSibling);
    bar.parentNode.insertBefore(p2, p1.nextSibling);
    bar.parentNode.insertBefore(p3, p2.nextSibling);

    var sectionSel = cfg.sectionSel || ".exo";
    var titleSel = cfg.titleSel || "h2";
    var toTab1 = cfg.toTab1 || ".enonce";
    var toTab3 = cfg.toTab3 || ".rappel";

    var sections = scope.querySelectorAll(sectionSel);
    if (!sections.length) sections = [scope];
    var lastT1 = "", lastT3 = "";

    Array.prototype.forEach.call(sections, function (sec) {
      var t = sec.querySelector(titleSel);
      var title = t ? t.textContent.replace(/\s+/g, " ").trim() : "";

      /* scission Question -> Réponse (ex : .q de l'exo 12) */
      if (cfg.splitQA) {
        Array.prototype.forEach.call(sec.querySelectorAll(cfg.splitQA), function (q) {
          var html = q.innerHTML;
          var i = html.indexOf("→");
          if (i > -1) {
            var qp = el("div", q.className + " xt-qq", html.slice(0, i));
            if (title && title !== lastT1) { p1.appendChild(secTitle(title)); lastT1 = title; }
            p1.appendChild(qp);
            var j = html.indexOf("</b>", i);
            var tail = j > -1 ? html.slice(j + 4) : html.slice(i + 1);
            q.innerHTML = "<b>→</b>" + tail;
          }
        });
      }

      /* énoncés -> onglet 1 */
      var ones = sec.querySelectorAll(toTab1);
      if (ones.length) {
        if (title && title !== lastT1) { p1.appendChild(secTitle(title)); lastT1 = title; }
        Array.prototype.forEach.call(ones, function (n) { p1.appendChild(n); });
      }

      /* rappels -> onglet 3 */
      var threes = sec.querySelectorAll(toTab3);
      if (threes.length) {
        if (title && title !== lastT3) { p3.appendChild(secTitle(title)); lastT3 = title; }
        Array.prototype.forEach.call(threes, function (n) { p3.appendChild(n); });
      }

      /* reste (titre + étapes + résultats) -> onglet 2 */
      p2.appendChild(sec);
    });

    /* blocs hors sections -> onglet 3 (ex : .tip des tenses) */
    if (cfg.globalTab3) {
      Array.prototype.forEach.call(document.querySelectorAll(cfg.globalTab3), function (n) {
        if (n.parentNode !== p3) p3.appendChild(n);
      });
    }
  }

  /* ---------- filets de sécurité ---------- */
  if (!p1.children.length) p1.appendChild(empty("Aucun \u00E9nonc\u00E9 s\u00E9par\u00E9 — l'\u00E9nonc\u00E9 est int\u00E9gr\u00E9 \u00E0 la r\u00E9solution."));
  if (!p2.children.length) p2.appendChild(empty("Pas de contenu de r\u00E9solution."));

  /* ---------- onglet 3 : rappels + méthodologies ---------- */
  if (p3.children.length) {
    var h = el("h4", "xt-h4", "\uD83D\uDCA1 L'essentiel \u00E0 comprendre");
    p3.insertBefore(h, p3.firstChild);
  }
  themes.forEach(function (th) {
    var m = M[th];
    if (!m) return;
    p3.appendChild(el("h4", "xt-h4", "\uD83E\uDDED M\u00E9thodologie — " + m.title));
    p3.appendChild(el("div", "xt-mblock", m.method));
    p3.appendChild(el("h4", "xt-h4", "\u270D\uFE0F R\u00E9daction type (copie BAC)"));
    p3.appendChild(el("div", "xt-mblock", m.redac));
  });

  /* ---------- navigation ---------- */
  function show(btn, panel) {
    b1.className = "xt-btn"; b2.className = "xt-btn"; b3.className = "xt-btn";
    btn.className = "xt-btn xt-active";
    p1.className = "xt-panel"; p2.className = "xt-panel"; p3.className = "xt-panel";
    panel.className = "xt-panel xt-show";
  }
  function go(n) {
    if (n === 2) show(b2, p2);
    else if (n === 3) show(b3, p3);
    else show(b1, p1);
  }
  b1.addEventListener("click", function () { go(1); });
  b2.addEventListener("click", function () { go(2); });
  b3.addEventListener("click", function () { go(3); });
  /* lien direct : #t1 / #t2 / #t3 */
  var h = (location.hash || "").toLowerCase();
  if (h === "#t2" || h === "#resolution") go(2);
  else if (h === "#t3" || h === "#methode") go(3);
})();
