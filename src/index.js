const express = require("express");
const route = require("./routes/route");
const mongoose = require("mongoose");
const app = express();
const ErrorHandler = require("./errorHandler/errorHandler");
const port = 3000;
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://HelperImmerse:merichidaku@mycluster.73hcini.mongodb.net/test",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, (req, res) => {
  console.log(`Express is Running on ${port}`);
});
app.use(ErrorHandler);
