var express = require('express');
var globalConfig = require('./config');
var loader =  require("./loader");
var app = new express();

app.use(express.static("./page/"));
app.post("/login", loader.get("/login"));
app.post("/editEveryDay", loader.get("/editEveryDay"));
app.get("/queryEveryDay", loader.get("/queryEveryDay"));
app.post("/editBlog", loader.get("/editBlog"));

app.get("/queryBlogByPage", loader.get("/queryBlogByPage"));
app.get("/queryBlogCount", loader.get("/queryBlogCount"));
app.get("/queryBlogById" , loader.get("/queryBlogById"));

app.get("/addComment", loader.get("/addComment"));

app.get("/queryRandomCode" , loader.get("/queryRandomCode"));

app.get("/queryCommentsByBlogId" , loader.get("/queryCommentsByBlogId"));

app.get("/queryCommentCountByBlogId" , loader.get("/queryCommentCountByBlogId"));


app.get("/queryAllBlog" , loader.get("/queryAllBlog"));

app.get("/queryRandomTags" , loader.get("/queryRandomTags"));

app.get("/queryHotBlog" , loader.get("/queryHotBlog"));


app.get("/queryNewComments" , loader.get("/queryNewComments"));

app.get("/queryByTag" , loader.get("/queryByTag"));
app.get("/queryByTagCount" , loader.get("/queryByTagCount"));

app.get("/querySearch" , loader.get("/querySearch"));

app.get("/getData", loader.get("/getData"));

app.get("/register", loader.get("/register"));

app.get("/updatePassword", loader.get("/updatePassword"));


app.get("/deleteBlogById", loader.get("/deleteBlogById"));

app.get("/updateBlog", loader.get("/updateBlog"));

app.get("/personRecord", loader.get("/personRecord"));

app.get("/getpersonRecord", loader.get("/getpersonRecord"));

app.get("/queryUserInfo", loader.get("/queryUserInfo"));


app.get("/deteleuserinfo", loader.get("/deteleuserinfo"));


app.post("/updateuserinfo", loader.get("/updateuserinfo"));

app.get("/queryComments", loader.get("/queryComments"));

app.get("/deleteCommentByname", loader.get("/deleteCommentByname"));

app.post("/deleteCommentBynameAndContent", loader.get("/deleteCommentBynameAndContent"));



app.listen(globalConfig.port,function () {
    console.log("服务器已启动");
})