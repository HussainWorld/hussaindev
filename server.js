import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const distPath = path.join(__dirname, "dist");

app.set("trust proxy", 1);

// Gzip responses
app.use(compression());

// Serve static files from Vite build
app.use(
  express.static(distPath, {
    // Good cache policy for Vite builds
    setHeaders: (res, file) => {
      // Correct MIME for web app manifest
      if (file.endsWith(".webmanifest")) {
        res.setHeader("Content-Type", "application/manifest+json");
      }
      // Long cache for hashed assets (e.g. /assets/index-ABC123.js)
      if (file.includes(`${path.sep}assets${path.sep}`)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      } else {
        // Shorter cache for root files like /index.html, /favicon.png, etc.
        res.setHeader("Cache-Control", "public, max-age=3600");
      }
    },
  })
);

// Health check (handy for Heroku)
app.get("/health", (_req, res) => res.status(200).send("ok"));

// SPA fallback: only for GETs that accept HTML
app.use((req, res, next) => {
  if (req.method !== "GET") return next();
  // If the client doesn't accept HTML, let 404 handler run
  if (!req.accepts("html")) return next();
  res.sendFile(path.join(distPath, "index.html"));
});

// 404 for non-HTML missing files
app.use((_req, res) => res.status(404).end());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});