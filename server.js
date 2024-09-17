const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dburl = require('./dbconfig/config');
const taskRoutes = require('./router/TaskRouter')


// Initialize the app
const app = express();


// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to the database
const server = dburl;
mongoose.connect(server).then(() => {
    console.log('Database Connected ! ! !');
}).catch((err) => {
    console.log(err);
});

// Define routes
// app.use('/user', users);
app.use("/", taskRoutes);

// Start the server
app.listen(1996, function () {
    console.log('Server Started ! ! !');
});
