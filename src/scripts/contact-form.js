import { supabase } from "/src/lib/supabase";

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
    button.classList.add("opacity-70");

    if (text) text.textContent = "Enviando…";
    if (loader) loader.classList.remove("hidden");

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      // 💾 guardar en supabase
      const { error } = await supabase
        .from("contact_messages")
        .insert([data]);

      if (error) throw error;

      form.reset();

      if (text) text.textContent = "Enviado ✓";

      setTimeout(() => {
        window.location.href = "/gracias?type=contact";
      }, 700);

    } catch (err) {
      console.error(err);

      if (text) text.textContent = "Error";
      button.disabled = false;
      button.classList.remove("opacity-70");
      loader?.classList.add("hidden");
    }
  });
});