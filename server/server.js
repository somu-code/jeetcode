const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const port = 3000;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const corsMiddleware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type",
    "Authorization"
  );
  next();
};

const app = express();
app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 8);

    await client.connect();
    const collection = client.db("jeetcode").collection("users");

    // Create a new user
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    // Insert the new user document into the collection
    await collection.insertOne(newUser);

    res.send("Signup successful");
  } catch (error) {
    console.error("Error:", error);
    res.status(400).send("Error occurred");
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    await client.connect();
    const db = client.db("jeetcode");
    const collection = db.collection("users");

    const user = await collection.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, TOKEN_SECRET, {
      expiresIn: JWT_EXPRIATION_TIME,
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
