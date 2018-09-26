#Show Page
*Review the RESTful routes we've seen so far 
-7 of them 

Name        url        verb               description
===========================================================
INDEX       /dogs       GET      display a list of all dogs
NEW        /dogs/new    GET      display a form to make a new dog
CREATE      /dogs       POST     add new dog to database 
SHOW       /dogs/:id    GET      shows info about ONE dog  
EDIT    /dogs/:id/edit  GET      show edit form for one dog
UPDATE    /dogs/:id     PUT      update a particular dog, then redirect somewhere
DESTROY  /dogs/:id      DELETE   delte a particular dog, then redirect somewhere

REST- a mapping between HTTP routes and CRUD. A convention

BLOGL

CREATE  
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id 

*Add description to our campground model

*Show db.collection.drop()

*Add a show route/template


-------------
##Refactor Mongoose Code 
* Create a models directory
* Use module.exports
* Require everything correctly!
* 

##Add the Comment model 
* make our errors go away
* display comments on campground show page