var express = require("express");
var app = express();  
app.get("/", function(req, res) {
     res.send("Hello Node.js, Express and Windows Azure Web Site.");
});
  
app.get("/Echo/:value", function(req, res) {
    var value = req.params.value;
    res.json({
        "Value" : value,
        "Time" : new Date()
    });
});
 
console.log("Web application opened.");
app.listen(process.env.PORT);
