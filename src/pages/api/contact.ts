import type { APIRoute } from "astro";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // 💾 guardar en DB
    await supabase.from("contact_messages").insert([
      { name, email, message }
    ]);

    // 📩 enviar email
    await resend.emails.send({
      from: "MadNess <onboarding@resend.dev>",
      to: "contact@madnessmusicgroup.com",
      subject: "Nuevo mensaje de contacto",
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error" }), { status: 500 });
  }
};