var mangoose = require("mongoose");
var Campground = require("./models/campground"); 
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f7c07ba4efbdbc_340.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare gravida urna at lacinia. Vivamus lorem erat, gravida vitae velit ut, pulvinar fermentum leo. Integer aliquam tristique nulla iaculis dictum. Donec ut tempor ipsum. Sed odio enim, aliquam eget consequat et, rhoncus vitae odio. Aliquam nunc lorem, ultrices eget pretium ac, finibus quis augue. Cras lobortis ipsum ut metus tristique semper. Aliquam libero orci, sollicitudin sit amet luctus sit amet, tincidunt vitae enim. Nulla ultricies, orci at vulputate ornare, elit mauris pulvinar mi, in facilisis massa leo in ex. "
        },
        {
            name: "Chill Zone",
            image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144292f1c37aa5e5b1_340.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare gravida urna at lacinia. Vivamus lorem erat, gravida vitae velit ut, pulvinar fermentum leo. Integer aliquam tristique nulla iaculis dictum. Donec ut tempor ipsum. Sed odio enim, aliquam eget consequat et, rhoncus vitae odio. Aliquam nunc lorem, ultrices eget pretium ac, finibus quis augue. Cras lobortis ipsum ut metus tristique semper. Aliquam libero orci, sollicitudin sit amet luctus sit amet, tincidunt vitae enim. Nulla ultricies, orci at vulputate ornare, elit mauris pulvinar mi, in facilisis massa leo in ex. "
        },
        {
            name: "Mountain Creek",
            image: "https://pixabay.com/get/e83db7072ef6053ed1584d05fb1d4e97e07ee3d21cac104496f7c07ba4efbdbc_340.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare gravida urna at lacinia. Vivamus lorem erat, gravida vitae velit ut, pulvinar fermentum leo. Integer aliquam tristique nulla iaculis dictum. Donec ut tempor ipsum. Sed odio enim, aliquam eget consequat et, rhoncus vitae odio. Aliquam nunc lorem, ultrices eget pretium ac, finibus quis augue. Cras lobortis ipsum ut metus tristique semper. Aliquam libero orci, sollicitudin sit amet luctus sit amet, tincidunt vitae enim. Nulla ultricies, orci at vulputate ornare, elit mauris pulvinar mi, in facilisis massa leo in ex. "
        }
    
    ]


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if (err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
        }
    });
    
    //add a few campgrounds
    data.forEach(function(seed){
         Campground.create(seed, function(err, campground){
             if (err){
                 console.log(err);
             } else {
                console.log("added a campground");
                //create a comment 
                Comment.create({text: "This place is great, but i wish there was internet",
                                author: "Homer"
                    }, function(err,comment){
                        if (err){
                            console.log("WAAHHH COMMENT ADDING DIDN'T WORK!!");
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created a new comment");
                        }
                    });
             }
         });
    });
}

module.exports = seedDB;