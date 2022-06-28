require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./db/conn");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
   try {
      const relatedProds = await pool.query("SELECT * FROM related_products");
      res.json(relatedProds.rows);
   } catch (err) {
      res.send(err.message);
   }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Listening on PORT ${PORT}`);
});
