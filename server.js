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

app.get("/*", (req, res) => {
  if (req.method !== "GET" || !req.accepts("html")) {
    return res.status(404).end();
  }
  res.sendFile(path.join(distPath, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));