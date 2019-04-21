var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");



// router.get("/", function(req,res){
//   res.redirect("burgers");
// });

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log( hbsObject);
    res.render("index", hbsObject);

  });
});

router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"],
    [
    req.body.burger_name], function(data) {
    console.log(data);
    res.redirect("/");

  });
});

router.put("/burgers/:id", function(req, res) {
 var condition = "id= " +res.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data){
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
