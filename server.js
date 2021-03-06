//Install express server
const express = require('express');
const path = require('path');

const app = express();


// Serve only the static files form the dist directory
app.use(express.static(__dirname+'/dist/ProductManagement'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/ProductManagement/index.html'));
});

console.log("PAtekata:",__dirname, path.dirname("./"));

// Start the app by listening on the default Heroku port
