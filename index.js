const express = require("express");
const app = express();
const cookies = require("cookie-parser");
const path = require("path");
const cors = require("cors");
// routes
const homeRouter = require("./routes/homeRouter");
const rewardsRouter = require("./routes/rewardsRouter");

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookies("cookiesSecretxljnjanmsnxzjij298", {}));
app.use(cors());

// routes
app.use("/", homeRouter);
app.use("/rewards", rewardsRouter);

// start server
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
