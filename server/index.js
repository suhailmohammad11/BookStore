require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

//connection
require("../server/db/connections");

//Port
const port = process.env.PORT || 4000;
//Middlewares
app.use(express.json());

//cors
app.use(cors());

//importing routing
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");

//routing
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Your app is listening at ${port}`);
});
