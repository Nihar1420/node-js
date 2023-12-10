// Here we will see what express is all about and how it enables us to make important API's which help in making our websites more functional.

const express = require("express");

// After importing express we can make an express app as follows -
const app = express();
const PORT = 5001;

// We can also define the routes for respective pages as-

app.get("/home", (req, res) => {
  res.send("This is the home page");
});

// We can also return HTML content on the respective routes as follows -

app.get("/contacts", (req, res) => {
  res.send(`
       <h2>This is the contacts page for ${
         req.query.name ? req.query.name : "Nihar"
       }</h2>
    `);
});

// It can be seen above we can send data from client side to use it in the backend using the query params

// We can make the app listen to the port which we want
app.listen(PORT, () => {
  console.log(`The app is up and running on PORT ${PORT}`);
});
