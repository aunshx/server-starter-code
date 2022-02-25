// Import the modules
const express = require("express");
const expressSanitizer = require("express-sanitizer");

require("dotenv").config();

// Initialize instance of express
const app = express();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount express-sanitizer middleware here
app.use(expressSanitizer());

app.post("/", function (req, res, next) {
  // replace an HTTP posted body property with the sanitized string
  const sanitizedString = req.sanitize(req.body.propertyToSanitize);
  // send the response -- res.body.sanitized = " world"
  res.send({ sanitized: sanitizedString });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
