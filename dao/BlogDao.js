 var dbutil = require("./DBUtil");

function insertBlog(title,content,tags,views,ctime,utime,success) {
    var insertSql = "insert into blog (`title`,`content`,`tags`,`views`,`ctime`,`utime`) values (?,?,?,?,?,?)";
    var params = [title,content,tags,views,ctime,utime];
    console.log(insertSql)
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
    });
    connection.end();
}



 function queryBlogByPage(page,pageSize,success) {
     var insertSql = "select * from blog order by id desc limit ?,?";
     var params = [page * pageSize,pageSize];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(insertSql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }


 function queryBlogById(id,success) {
     var querySql = "select * from blog where id = ?";
     var params = [id];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(querySql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }




 function queryBlogCount(success) {
     var querySql = "select count(1) as count from blog ";
     var params = [];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(querySql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }

 function queryAllBlog(success) {
     var querySql = "select * from blog ";
     var params = [];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(querySql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }


 function addViews(id,success) {
     var querySql = "update blog set views = views + 1 where id = ? ";
     var params = [id];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(querySql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }


 function queryHotBlog(size,success) {
     var querySql = "select * from blog order by views desc limit ? ";
     var params = [size];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(querySql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }





 function deleteBlogById(id,success) {
     var deleteSql = "delete from blog where id = ? ";
     var params = [id];
     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(deleteSql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }

 function updateBlog(title,content,tags,ctime,id,success) {
    var updateSql = "update blog set title = ?,content = ?,tags = ?, ctime = ? where id = ?;";
    var params = [title,content,tags,ctime,id];
     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(updateSql,params,function (error,result) {
         if (error == null) {
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }


 function personRecord(userName,success) {
    var querySql = "select comments.blog_id from comments where user_name = ?;"
     var params = [userName];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(querySql,params,function (error,result) {
         console.log(params)
         if (error == null) {
             console.log(result)
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }


 function getpersonRecord(id,success) {
     var querySql = "select * from blog where id = ?;";
     var params = [id];

     var connection = dbutil.createConnection();
     connection.connect();
     connection.query(querySql,params,function (error,result) {
         console.log(params)
         if (error == null) {
             console.log(result)
             success(result);
         } else {
             console.log(error)
         }
     });
     connection.end();
 }




module.exports.insertBlog = insertBlog;
 module.exports.queryBlogByPage = queryBlogByPage;
 module.exports.queryBlogCount = queryBlogCount;
 module.exports.queryBlogById = queryBlogById;
 module.exports.queryAllBlog = queryAllBlog;
 module.exports.addViews = addViews;
 module.exports.queryHotBlog = queryHotBlog;
 module.exports.deleteBlogById = deleteBlogById;
 module.exports.updateBlog  = updateBlog;
 module.exports.personRecord = personRecord;
 module.exports.getpersonRecord = getpersonRecord;

