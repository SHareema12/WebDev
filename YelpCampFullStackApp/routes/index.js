var express = require("express"),
    router  = express.Router();
    //using express.router 
var passport = require("passport"),
    User = require("../models/user");
    
var middleware = require("../middleware");
// will automatically require the index.js file automatically without specifying it

// ============
// AUTH ROUTES 
// ============

router.get("/", function(req, res){
   res.render("landing"); 
});


//show register form
router.get("/register", function(req,res){
   res.render("register"); 
});

//handle sign up logic
router.post("/register", function(req,res){
    console.log("got to post register route");
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err){
            req.flash("error", err.message);
            return res.redirect("register");
        }
            passport.authenticate("local")(req,res, function(){
            req.flash("succcess", "Welcome to YelpCamp" + req.body.username);
            res.redirect("/campgrounds");
        });
    });
});

// show login form
router.get("/login", function(req, res){
    res.render("login");
});

//handle login information
router.post("/login",passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
    //referred to as middleware. tries to log you in 
}), function(req,res){
    
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Logged you out!");
   res.redirect("/campgrounds");
});


module.exports = router;