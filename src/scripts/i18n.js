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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("lang-toggle");
  const label = document.getElementById("lang-label");

  console.log("button:", button);

  if (!button) return;

  // idioma actual
  let current = localStorage.getItem("lang") || "es";

  // actualizar label
  if (label) {
    label.textContent = current.toUpperCase();
  }

  button.addEventListener("click", () => {
    const next = current === "es" ? "en" : "es";

    localStorage.setItem("lang", next);

    location.reload(); // 🔥 simple y funciona siempre
  });
});