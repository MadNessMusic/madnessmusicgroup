console.log("CONTACT JS CARGADO 🚀");

import { supabase } from "/src/lib/supabase";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const button = form.querySelector("button");
  const text = button?.querySelector(".btn-text");
  const loader = button?.querySelector(".btn-loader");

  // 🔒 deshabilitado al inicio
  button.disabled = true;
  button.classList.add("opacity-50", "cursor-not-allowed");

  const inputs = form.querySelectorAll(
    'input[name="name"], input[name="email"], textarea[name="message"]'
  );

  function validateForm() {
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) valid = false;
    });

    if (valid) {
      button.disabled = false;
      button.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
      button.disabled = true;
      button.classList.add("opacity-50", "cursor-not-allowed");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("input", validateForm);
  });

  // 🚀 SUBMIT (igual que submit.js)
  form.addEventListener("submit", async (e) => {
    console.log("CONTACT SUBMIT 🔥");
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

    console.log("DATA:", data);

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert([data]);

      if (error) throw error;

      form.reset();

      if (text) text.textContent = "Enviado ✓";

      setTimeout(() => {
        window.location.href = "/gracias?type=contact";
      }, 700);

    } catch (error) {
      console.error("SUPABASE ERROR:", error);

      if (text) text.textContent = "Error";
      alert(error.message || "Error al enviar");

      button.disabled = false;
      button.classList.remove("opacity-70");
      loader?.classList.add("hidden");
    }
  });
});