import { translations } from "../i18n/translations";

function applyTranslations() {
  const lang = localStorage.getItem("lang") || "es";

  // 🔥 TEXTOS
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const template = translations[key]?.[lang];

    if (!template) return;

    // ⚠️ SOLO reemplaza si está vacío o es placeholder
    if (!el.innerHTML.trim() || el.innerHTML === key) {
      el.innerHTML = template;
    } else {
      el.innerHTML = template; // forzar reemplazo
    }
  });

  // 🔥 PLACEHOLDERS
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const template = translations[key]?.[lang];
    if (!template) return;
    el.placeholder = template;
  });

  // 🔥 BOTÓN LABEL
  const label = document.getElementById("lang-label");
  if (label) {
    label.textContent = lang.toUpperCase();
  }
}

// 🚀 INIT
document.addEventListener("DOMContentLoaded", () => {
  console.log("I18N RUNNING");

  applyTranslations();

  const button = document.getElementById("lang-toggle");

  if (button) {
    button.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || "es";
      const next = current === "es" ? "en" : "es";

      localStorage.setItem("lang", next);

      location.reload();
    });
  }
});