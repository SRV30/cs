const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

const errorMiddleware = require("./middleware/error");

require("dotenv").config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const user = require("./routes/userRoute");
const contactRoutes = require("./routes/contactRoutes");
const imagesRoutes = require("./routes/imageRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const service = require("./routes/serviceRoutes");
const home = require("./routes/homeRoute");
const homeAbout = require("./routes/homeAboutRoutes");
const homeContact = require("./routes/homeContactRoute");

app.use("/api/as", user);
app.use("/api/as", contactRoutes);
app.use("/api/as", imagesRoutes);
app.use("/api/as", aboutRoutes);
app.use("/api/as", service);
app.use("/api/as", home);
app.use("/api/as", homeAbout);
app.use("/api/as", homeContact);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware);

module.exports = app;
