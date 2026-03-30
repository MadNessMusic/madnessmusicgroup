document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#contact form');
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const text = button?.querySelector(".btn-text");
  const loader = button?.querySelector(".btn-loader");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // evitar doble submit
    if (button.disabled) return;

    // UI feedback
    button.disabled = true;
    button.classList.add("opacity-70");

    if (text) text.textContent = "Enviando…";
    if (loader) loader.classList.remove("hidden");

    const data = new FormData(form);

    try {
      await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      // limpiar inputs
      form.reset();

      // redirigir
      window.location.href = "/gracias";

    } catch (error) {
      console.error(error);

      if (text) text.textContent = "Error, intenta de nuevo";
      button.disabled = false;
    }
  });
});