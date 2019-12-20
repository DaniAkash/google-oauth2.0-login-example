const express = require("express");
const path = require("path");
const expressHbs = require("express-handlebars");

const app = express();

const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.use('/js', express.static(path.join(__dirname, './public/js')));

const server = app.listen(process.env.PORT, () => {
  console.log("Server running in port - ", server.address().port);
});