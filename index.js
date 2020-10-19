const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config({ path: "./config.env" });
const app = express();
const schema = require("./schema/schema");

mongoose
  .connect(process.env.DB_CON_STR, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection established successfully!");
  });

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3030, () => {
  console.log("App running on PORT -> 3030!");
});
