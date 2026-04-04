import { supabase } from "/src/lib/supabase";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("submitForm");
  if (!form) return;

  const button = form.querySelector("button");
  const text = button?.querySelector(".btn-text");
  const loader = button?.querySelector(".btn-loader");

  // 🔥 checkbox legal
  const termsCheckbox = form.querySelector('input[type="checkbox"]');

  form.addEventListener("submit", async (e) => {
    console.log("SUBMIT DETECTADO 🔥");
    e.preventDefault();

    // 🔒 VALIDACIÓN EXTRA (seguridad)
    if (!termsCheckbox?.checked) {
      alert("Debes aceptar los términos y el aviso de privacidad");
      return;
    }

    if (button.disabled) return;

    // loading state
    button.disabled = true;
    button.classList.add("opacity-70");

    if (text) text.textContent = "Enviando…";
    if (loader) loader.classList.remove("hidden");

    const data = {
      artist: form.artist.value,
      email: form.email.value,
      spotify: form.spotify.value,
      genre: document.getElementById("genreInput")?.value || null,
      message: form.message.value,
      location: form.location.value,
      instagram: form.instagram.value,

      // 🔥 opcional pro (te recomiendo)
      accepted_terms: true,
      submitted_at: new Date().toISOString(),
    };

    console.log("DATA:", data);

    try {
      const { error } = await supabase
        .from("submissions")
        .insert([data]);

      if (error) throw error;

      form.reset();

      if (text) text.textContent = "Enviado ✓";

      setTimeout(() => {
        window.location.href = "/gracias?type=submit";
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