import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  Index,
  AddProject,
  ContactMe,
  Testimonials,
  addNewProject,
  detailProject,
} from "./src/route/route-web.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/assets"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.get("/", Index);
app.get("/add-project", AddProject);
app.post("/add-project", addNewProject);
app.get("/contact-me", ContactMe);
app.get("/testimonials", Testimonials);
app.get("/detail-project/:id", detailProject)

app.listen(5000, () => {
  console.log("Server running on port 5000!");
});