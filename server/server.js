const expres = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 5000;
const port = chalk.blue(PORT);
const { readdirSync } = require("fs");
const connectDB = require("./config/db");

const app = expres();

//connect database
connectDB();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

app.listen(PORT, () => {
  console.log(`server Running on port ${port}`);
});
