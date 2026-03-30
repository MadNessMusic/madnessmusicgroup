document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const button = form.querySelector("button");
  const text = button?.querySelector(".btn-text");
  const loader = button?.querySelector(".btn-loader");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (button.disabled) return;

    button.disabled = true;

    if (text) text.textContent = "Enviando…";
    if (loader) loader.classList.remove("hidden");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        window.location.href = "/gracias";
      } else {
        throw new Error("Error en envío");
      }

    } catch (err) {
      console.error(err);

      if (text) text.textContent = "Error";
      button.disabled = false;
    }
  });
});