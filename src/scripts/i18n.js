import { translations } from "../i18n/translations";

function applyTranslations() {
  const lang = localStorage.getItem("lang") || "es";

  // TEXTOS normales
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const template = translations[key]?.[lang];
    if (!template) return;
    el.textContent = template;
  });

  // PLACEHOLDERS 🔥
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const template = translations[key]?.[lang];
    if (!template) return;
    el.placeholder = template;
  });

  // LABEL botón idioma
  const label = document.getElementById("lang-label");
  if (label) label.textContent = lang.toUpperCase();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("I18N OK");

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