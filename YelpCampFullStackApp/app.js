var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    User       = require("./models/user"),
    seedDB     = require("./seeds"),
    flash      = require("connect-flash"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    mongoose   = require("mongoose");
    
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index")
    
mongoose.connect(process.env.DATABASEURL, {useNewUrlParser: true});
//mongoose.connect("mongodb://saf:gamergirl12@ds263832.mlab.com:63832/yelpcampsh", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
//serving everything in the public directory

app.use(methodOverride("_method"));

app.use(flash());

//seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "OW is the best game on the planet I think",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware that passes through current user to all routes wherever this is called 
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
    // next is really important!!
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
// the "/campgrounds" tells express that all campground routes start with /campground, 
// you can take this out in the campgrounds.js file as seen
app.use("/campgrounds/:id/comments", commentRoutes);
//tells our app to use these routes

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started");  
});