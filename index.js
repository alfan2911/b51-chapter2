import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import homeRouter from "./src/router/homeRouter.js";
import projectRouter from "./src/router/projectRouter.js";
import contactMeRouter from "./src/router/contactMeRouter.js";
import testimonialRouter from "./src/router/testimonialRouter.js";


const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/assets"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.use(homeRouter);
app.use(projectRouter);
app.use(contactMeRouter);
app.use(testimonialRouter);

app.listen(port, () => {
  console.log("Server running on port 5000!");
}); 