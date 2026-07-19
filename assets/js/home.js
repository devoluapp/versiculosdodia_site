// Mini-app da home: versículo do dia dinâmico + seletor "como você está se sentindo hoje?"
(function () {
  var PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=blog.robertotavares.cemversiculos";

  function dayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date - start;
    return Math.floor(diff / 86400000);
  }

  function renderDailyVerse() {
    var textEl = document.getElementById("daily-verse-text");
    var refEl = document.getElementById("daily-verse-ref");
    var dateEl = document.getElementById("daily-verse-date");
    if (!textEl || !refEl) return;

    var today = new Date();
    var idx = dayOfYear(today) % VERSICULO_GERAL.length;
    var verse = VERSICULO_GERAL[idx];

    textEl.textContent = "“" + verse.text + "”";
    refEl.textContent = verse.ref;
    if (dateEl) {
      dateEl.textContent = today.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
    }

    var shareBtn = document.getElementById("daily-verse-share");
    if (shareBtn) {
      shareBtn.addEventListener("click", function () {
        shareVerse(verse.text, verse.ref);
      });
    }
  }

  function shareVerse(text, ref) {
    var message = "“" + text + "” (" + ref + ")\n\nVersículo do Dia — baixe o app grátis: " + PLAY_STORE_URL;
    if (navigator.share) {
      navigator.share({ text: message }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(message);
      var btn = document.getElementById("daily-verse-share");
      if (btn) {
        var original = btn.textContent;
        btn.textContent = "Copiado!";
        setTimeout(function () { btn.textContent = original; }, 1800);
      }
    }
  }

  function renderMoodPicker() {
    var wrap = document.getElementById("mood-picker");
    if (!wrap) return;

    SENTIMENTOS.forEach(function (s) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mood-chip";
      btn.setAttribute("data-key", s.key);
      btn.innerHTML = '<span class="mood-emoji">' + s.emoji + "</span>" + s.label;
      btn.addEventListener("click", function () { handleMoodPick(s.key); });
      wrap.appendChild(btn);
    });
  }

  function handleMoodPick(key) {
    var result = document.getElementById("mood-result");
    var chips = document.querySelectorAll(".mood-chip");
    if (!result) return;

    chips.forEach(function (c) {
      c.classList.toggle("active", c.getAttribute("data-key") === key);
    });

    result.hidden = false;
    result.innerHTML =
      '<div class="mood-loading">' +
      '<div class="mood-spinner" aria-hidden="true"></div>' +
      '<p>Buscando o versículo certo para você…</p>' +
      "</div>";
    result.scrollIntoView({ behavior: "smooth", block: "center" });

    var delay = 1600 + Math.floor(Math.random() * 500);
    setTimeout(function () { renderMoodVerse(key, result); }, delay);
  }

  function renderMoodVerse(key, result) {
    var cat = VERSICULOS_CATEGORIA[key];
    var sentimento = SENTIMENTOS.filter(function (s) { return s.key === key; })[0];
    if (!cat || !sentimento) return;

    var verse = cat.verses[Math.floor(Math.random() * cat.verses.length)];

    result.innerHTML =
      '<div class="mood-verse-card">' +
      '<span class="eyebrow">' + cat.emoji + " Para " + escapeHtml(sentimento.label.toLowerCase()) + "</span>" +
      '<blockquote class="verse">“' + escapeHtml(verse.text) + "”</blockquote>" +
      '<div class="verse-ref">' + escapeHtml(verse.ref) + "</div>" +
      '<div class="mood-verse-actions">' +
      '<a class="btn btn-primary" href="' + PLAY_STORE_URL + '">▶ Receber mais como este no app</a>' +
      '<a class="btn btn-outline" href="' + cat.href + '">Ver os 10 versículos de ' + escapeHtml(sentimento.label) + " →</a>" +
      "</div>" +
      "</div>";
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderDailyVerse();
    renderMoodPicker();
  });
})();
