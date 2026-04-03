import { createClient } from "@supabase/supabase-js";

// 🔐 variables desde Astro (Vercel env)
const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("submitForm");
  if (!form) return;

  const button = form.querySelector("button");
  const text = button?.querySelector(".btn-text");
  const loader = button?.querySelector(".btn-loader");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (button.disabled) return;

    // 🔄 estado loading
    button.disabled = true;
    button.classList.add("opacity-70");

    if (text) text.textContent = "Enviando…";
    if (loader) loader.classList.remove("hidden");

    // 📦 data
    const data = {
      artist: form.artist.value,
      email: form.email.value,
      spotify: form.spotify.value,
      genre: document.getElementById("genreInput")?.value || null,
      message: form.message.value,
      location: form.location.value,
      instagram: form.instagram.value,
    };

    console.log("DATA:", data);

    try {
      const { error } = await supabase
        .from("submissions")
        .insert([data]);

      if (error) throw error;

      // ✅ success
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