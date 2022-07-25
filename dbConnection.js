const db = require("./models");
 
async function createConnection(dbName) {
  await db.mongoose
  .connect(`mongodb://localhost:27017`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
  });
  return {
    db
  };
}

 
module.exports = createConnection;
