document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="contact"]');
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const text = button.querySelector(".btn-text");
  const loader = button.querySelector(".btn-loader");

  button.addEventListener("click", () => {
    // Animación
    button.disabled = true;
    button.classList.add("opacity-70");

    if (text) text.textContent = "Enviando…";
    if (loader) loader.classList.remove("hidden");

    // Limpiar campos
    form.querySelectorAll("input, textarea").forEach((field) => {
      if (field.type !== "hidden") {
        field.value = "";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const button = form.querySelector("button");
  const text = button.querySelector(".btn-text");
  const loader = button.querySelector(".btn-loader");

  form.addEventListener("submit", () => {
    button.disabled = true;
    button.classList.add("opacity-70");

    if (text) text.textContent = "Enviando…";
    if (loader) loader.classList.remove("hidden");
  });
});

