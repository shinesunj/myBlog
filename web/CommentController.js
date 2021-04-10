var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
var commentDao = require("../dao/CommentDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/RespUtil");
var  captcha = require("svg-captcha");

var url = require("url");


var path = new Map();
function addComment(request,response) {
    var params = url.parse(request.url,true).query;

    commentDao.insertComment(parseInt(params.bid),parseInt(params.parent),params.parentName,params.userName,params.email,params.content,timeUtil.getNow(),timeUtil.getNow(),function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","评论成功",result));
        response.end();
        }
    )
}

path.set("/addComment",addComment);



function queryRandomCode(request,response) {
    var img = captcha.create({fontSize:50,width:100,height:34});
    // console.log(img);
    response.writeHead(200,);
    response.write(respUtil.writeResult("success","评论成功",img));
    response.end();
}
path.set("/queryRandomCode",queryRandomCode);




function queryCommentsByBlogId(request,response) {
    var params = url.parse(request.url,true).query;
    commentDao.queryCommentsByBlogId(parseInt(params.bid), function (result) {
        response.writeHead(200,);
        response.write(respUtil.writeResult("success","评论成功",result));
        response.end();
    })
}

path.set("/queryCommentsByBlogId",queryCommentsByBlogId);


function queryCommentCountByBlogId(request,response) {
    var params = url.parse(request.url,true).query;
    commentDao.queryCommentCountByBlogId(parseInt(params.bid),function (result) {
        response.writeHead(200,);
        response.write(respUtil.writeResult("success","评论成功",result));
        response.end();
    })
}

path.set("/queryCommentCountByBlogId",queryCommentCountByBlogId);

function queryNewComments(request,response) {
    var params = url.parse(request.url,true).query;
    commentDao.queryNewComments(5,function (result) {
        response.writeHead(200,);
        response.write(respUtil.writeResult("success","评论成功",result));
        response.end();
    })
}
path.set("/queryNewComments",queryNewComments);


function queryComments(request,response) {
    commentDao.queryComments(function (result) {
        response.writeHead(200,);
        response.write(respUtil.writeResult("success","评论成功",result));
        response.end();
    })
}

path.set("/queryComments",queryComments)



function deleteCommentByname(request,response) {
    var params = url.parse(request.url,true).query;
    commentDao.deleteCommentByname(params.name,params.blog_id,function (result) {
        response.writeHead(200,);
        response.write(respUtil.writeResult("success","评论成功",result));
        response.end();
    })
}
path.set("/deleteCommentByname",deleteCommentByname);


function deleteCommentBynameAndContent(request,response) {
    request.on("data", function (data) {
        console.log(data);
        var name = JSON.parse(data.toString()).name.toString();
        var blog_id = JSON.parse(data.toString()).blog_id;
        var comment = JSON.parse(data.toString()).comment;
        commentDao.deleteCommentBynameAndContent(name, blog_id,comment, function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "获取成功", result));
            response.end();
        })
    })
}
path.set("/deleteCommentBynameAndContent",deleteCommentBynameAndContent);

module.exports.path = path;