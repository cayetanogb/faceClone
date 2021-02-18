'use strict';

var Post = require('../model/appModel.js');

// get all Posts
exports.list_all_posts = function(req, res) {


  Post.getAllPost(function(err, post) {

    // console.log('controller');
    if (err) {
        res.send(err);
    }
      
    // console.log('res', Post);
    res.status(200).send({ ok: true , data: post });

  });

};


// creates a Post
exports.create_a_post = function(req, res) {
  
  var new_post = new Post(req.body);

  //handles null error 
   if(!new_post){

        res.status(400).send({ ok: false, msg: 'Please provide Post/status' });

    } else{
    
        Post.createPost(new_post, function(err, PostCreated) {
            
            if (err) {
                res.send(err);
            }
            
            // returns all Posts
            Post.getAllPost(function(err, Posts) {

                // console.log('controller');
                if (err) {
                    res.send(err);
                }
                    
                // console.log('res', Post);
                res.status(200).send({ ok: true , msg: 'Post created' , data: Posts });
        
            });

        });
    }

};



//  gets a Post 
exports.read_a_post = function(req, res) {

  var id = req.params.postId;

  Post.getPostById( id, function(err, Post) {
    if (err) {
        res.send(err);
    }
      
    res.status(200).send({ ok: true , msg: 'Post Updated successfully', data: Post });
  
  });

};

// updates a Post
exports.update_a_post = function(req, res) {

  var id = req.params.postId;
  var PostToUpdate = new Post(req.body);

  Post.updateById(id, postToUpdate , function(err, Post) {
    
    if (err) {
        res.send(err);
    }
      
    // returns all Posts
    Post.getAllPost(function(err, Posts) {

        // console.log('controller');
        if (err) {
            res.send(err);
        }
            
        // console.log('res', Post);
        res.status(200).send({ ok: true , msg: 'Post Updated' , data: Posts });

    });

  });

};

// delete a Post
exports.delete_a_post = function(req, res) {

  var id = req.params.postId;
  console.log(id);

  Post.remove( id , function(err, Post) {
    if (err) {
        res.send(err);
    }
      
    // returns all Posts
    Post.getAllPost(function(err, Posts) {

        // console.log('controller');
        if (err) {
            res.send(err);
        }
            
        // console.log('res', Post);
        res.status(200).send({ ok: true , msg: 'Posts successfully deleted', data: Posts });

    });

  });
  
};