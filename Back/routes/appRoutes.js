
'use strict';

module.exports = function(app) {

    let postList = require('../controller/todoListController');

    // todoList Routes
    app.route('/api/posts')
        .get(  postList.list_all_posts )
        .post( postList.create_a_post  );

    app.route('/api/posts/:postId')
        .get( postList.read_a_post      )
        .put( postList.update_a_post    )
        .delete( postList.delete_a_post );

};

