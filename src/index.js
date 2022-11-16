const express = require("express");
const morgan = require(`morgan`);
const cors = require("cors");

require("./access/database");

const corsOrigin = "http://localhost:3000";
const app = express();

//settings
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 2);
app.use(
  cors({
    origin: corsOrigin,
  })
);

//Middlewares
app.use(morgan("dev")); //combined
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/user", require("./routes/UsuarioRouter"));
app.use("/api/prod", require("./routes/ProductoRouter"));

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
