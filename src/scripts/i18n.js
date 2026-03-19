import { translations } from "../i18n/translations";

const lang = localStorage.getItem("lang") || "es";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const template = translations[key]?.[lang];

    if (!template) return;

    let text = template;

    text = text
      .replace("{shown}", el.dataset.shown ?? "")
      .replace("{total}", el.dataset.total ?? "");

    el.textContent = text;
  });
}

document.addEventListener("DOMContentLoaded", applyTranslations);