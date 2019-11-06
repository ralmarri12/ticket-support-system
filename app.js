require("dotenv").config();
const express = require("express");

const routes = require("./routes/main.route");

const app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://tss-frontend.herokuapp.com/"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  return res.send("#diagnostic: TSS automated deploy works!");
});

app.use(express.json());

app.use((req, res, next) => {
  res.sendSuccess = function(data) {
    this.json({
      message: "success",
      data
    });
  };

  res.sendError = function(error) {
    this.json({
      message: "Failure",
      error: error.message
    });
  };

  next();
});

app.use(routes);

app.listen(port, () => {
  console.log(`Working at port: ${port}`);
});
