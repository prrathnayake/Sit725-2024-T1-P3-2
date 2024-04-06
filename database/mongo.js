const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ransrath:Pasan.213580@deakin.7mcipan.mongodb.net/?retryWrites=true&w=majority&appName=Deakin";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
  } finally {
    console.log("You successfully connected to MongoDB!");
  }
}

async function disconnectToDatabase() {
  try {
    await client.close();
  } finally {
    console.log("You successfully disconnected from MongoDB!");
  }
}

async function addCards(fn, ln, e, p) {
  await client.connect();
  const myDB = client.db("Deakin");
  const myColl = myDB.collection("FormDetails");

  const result = await myColl.insertOne({
    firstName: fn,
    lastName: ln,
    email: e,
    password: p,
  });

  console.log(`A document was inserted with the _id: ${result.insertedId}`);

  await client.close();
}

module.exports = { connectToDatabase, disconnectToDatabase, addCards };
