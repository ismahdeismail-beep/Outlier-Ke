import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/payments/create", async (req, res) => {
    const { plan, amount, userId } = req.body;
    
    // Call Lipana.dev API here
    // const lipanaResponse = await fetch("...", { ... });
    
    // Placeholder response
    res.json({ paymentUrl: "https://pay.lipana.dev/mock-url" });
  });

  // Webhook endpoint for Lipana.dev to confirm payments
  app.post("/api/payments/webhook", (req, res) => {
    const webhookData = req.body;

    // TODO: SECURITY VERIFICATION
    // You MUST verify the request authenticity using the signature 
    // provided in the headers (Lipana.dev should provide a way to verify this).
    
    console.log("Webhook received:", webhookData);

    // Process payment success (update database, etc.)
    // ...

    // Always respond with 200 OK quickly to prevent timeouts
    res.status(200).send("Webhook received");
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
