import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const distPath = path.join(__dirname, "dist");

// Serve static assets
app.use(express.static(distPath, {
  maxAge: "1h",
  etag: true,
}));

app.use((req, res, next) => {
  if (req.method !== "GET" || !req.accepts("html")) {
    return next();
  }
  res.sendFile(path.join(distPath, "index.html"));
});

app.use((req, res) => res.status(404).end());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
