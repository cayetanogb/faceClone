'user strict';
var sql = require('./db.js');

//Post object constructor
var Post = function(post){
    this.message = post.message;
    this.id_user = 1;
    this.name = 'Cayetano';
    this.created_at = new Date();
};

// Post Methods

// creates a Post
Post.createPost = function(newPost, result) {    
        
        sql.query("INSERT INTO post set ?", newPost, function (err, res) {    
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });  
                
};

// Get a Post by id
Post.getPostById = function(PostId, result) {
        
        sql.query("Select Post from post where id = ? ", PostId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
            
            }
        });

};


// Get all Posts
Post.getAllPost = function(result) {


        sql.query("Select * from post", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                  console.log('post : ', res);  
                  result(null, res);
                }

        });

};

// Updates a Post
Post.updateById = function(id, Post, result){
  
    sql.query("UPDATE post SET Post = ? WHERE id = ?", [Post.Post, id], function (err, res) {
        
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else{   
            result(null, res);
        }

    });

};


Post.remove = function(id, result){

     sql.query("DELETE FROM post WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    
    }); 

};


// exports the Post Model
module.exports= Post;