const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");


// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// Connect to the Mongo DB { useNewUrlParser: true }
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hyperlocal");

// Use apiRoutes
app.use(routes);

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })
}

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//start server
app.listen(PORT, (req, res) => {
  console.log( `server listening on port: ${PORT}`);
})