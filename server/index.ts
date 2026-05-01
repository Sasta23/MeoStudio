import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from 'resend';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware til at læse JSON fra kontaktformularen
  app.use(express.json());

  // Initialisér Resend med din API-nøgle
  const resend = new Resend('re_E9DwzQUz_8Cn5YYZzh1ercPSRecxoBKxg');

  // Definer stien til de statiske filer (frontend)
  const distPath = path.resolve(__dirname, "..", "dist", "public");

  // POST ROUTE: Denne modtager data fra din formular
  app.post("/api/contact", async (req, res) => {
    const { email, subject, message } = req.body;

    console.log("Modtaget anmodning om at sende mail fra:", email);

    try {
      await resend.emails.send({
        from: 'Meo Studio <onboarding@resend.dev>',
        to: 'sanderman2003@gmail.com',
        subject: `Ny besked fra portfolio: ${subject}`,
        html: `
          <h3>Ny besked modtaget via din hjemmeside</h3>
          <p><strong>Afsender:</strong> ${email}</p>
          <p><strong>Emne:</strong> ${subject}</p>
          <p><strong>Besked:</strong></p>
          <p>${message}</p>
        `
      });

      console.log("Mail er sendt succesfuldt via Resend!");
      res.status(200).json({ success: true, message: "Mail sendt korrekt!" });
    } catch (error) {
      console.error("Fejl ved afsendelse af mail hos Resend:", error);
      res.status(500).json({ success: false, error: "Kunne ikke sende mail" });
    }
  });

  // Håndtering af statiske filer og routing
  if (fs.existsSync(distPath)) {
    // Hvis projektet er bygget (production), serveres de rigtige filer
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    // Hvis man kører i dev-mode (uden dist mappe), undgår vi crash
    app.get("/", (_req, res) => {
      res.send("Backend kører! Brug din frontend på http://localhost:5173");
    });
    
    // Fallback for alle andre sider i dev
    app.get("*", (req, res) => {
      if (req.url.startsWith('/api/')) {
        res.status(404).json({ error: "API route findes ikke" });
      } else {
        res.status(404).send("Siden findes ikke. Husk at køre din frontend (pnpm dev) i en separat terminal.");
      }
    });
  }

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`-----------------------------------------------`);
    console.log(`SERVER KØRER: http://localhost:${port}/`);
    console.log(`Husk at køre frontenden separat på port 5173`);
    console.log(`-----------------------------------------------`);
  });
}

startServer().catch(console.error);