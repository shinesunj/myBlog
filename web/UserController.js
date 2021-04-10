var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
var userDao = require("../dao/UserDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/RespUtil");
var url = require("url");

var path = new Map();

function getData(request,response) {
    userDao.getData(function (result) {
        console.log(result)
        var resArr = [];
        for(var i = 0; i < result.length; i++) {
            resArr.push(result[i].userName)
        }
        response.writeHead(200);
        response.write(respUtil.writeResult("success","查询成功",resArr));
        response.end();
    })

}

path.set("/getData",getData);


function queryUserInfo(request,response) {
    userDao.getData(function (result) {
        console.log(result)
        response.writeHead(200);
        response.write(respUtil.writeResult("success","查询成功",result));
        response.end();
    })
}
path.set("/queryUserInfo",queryUserInfo);



function register(request,response) {
    var params = url.parse(request["url"],true).query;
    console.log(params)
    userDao.addUser(params.userName,params.password, function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "注册成功", null));
        response.end();
    })
}

path.set("/register",register);


function login(request,response) {

    // var params = url.parse(request["url"],true).query;
    request.on("data", function (data) {
        var userName = JSON.parse(data.toString()).userName;
        var pwd = JSON.parse(data.toString()).password;
        console.log(userName,pwd);
        userDao.queryUserByName(userName,function (result) {
            var res = "";
            if(result == null || result.length == 0) {
                res = "Fail"
            } else {
                if(result[0].password == pwd) {
                    res = "OK";
                } else {
                    res = "Fail"
                }
            }

            response.write(res);
            response.end()
        })
    })

}
path.set("/login",login)


function updatePassword(request,response) {
    var params = url.parse(request["url"],true).query;
    // console.log(params)
    userDao.updatePassword(params.password,params.userName, function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "修改成功", null));
        response.end();
    })
}
path.set("/updatePassword",updatePassword);



function deteleuserinfo(request,response) {
    var params = url.parse(request["url"],true).query;
    // console.log(params)
    userDao.deteleuserinfo(params.id,function (result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "修改成功", null));
        response.end();
    })
}
path.set("/deteleuserinfo",deteleuserinfo);

function updateuserinfo(request,response) {
    request.on("data", function (data) {
        console.log(data);
        var userName = JSON.parse(data.toString()).userName.toString();
        var password = JSON.parse(data.toString()).password;
        var id = JSON.parse(data.toString()).id;
        userDao.updateuserinfo(userName, password, id, function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "获取成功", result));
            response.end();
        })
    })
}
path.set("/updateuserinfo",updateuserinfo);






module.exports.path = path;
