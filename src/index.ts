import express from "express";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contacts";

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/contacts", contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
