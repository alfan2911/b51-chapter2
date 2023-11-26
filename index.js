const express = require("express");
const path = require("path");
const HomeRouter = require("./src/router/HomeRouter.js");
const ProjectRouter = require("./src/router/ProjectRouter.js");
const ContactMeRouter = require("./src/router/ContactMeRouter.js");
const TestimonialRouter = require("./src/router/TestimonialRouter.js");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static("src/assets"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.use(HomeRouter);
app.use(ProjectRouter);
app.use(ContactMeRouter);
app.use(TestimonialRouter);

app.listen(port, () => {
  console.info(`Server Running on : http://localhost:${port}`);
});
