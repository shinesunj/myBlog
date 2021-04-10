var dbutil = require("./DBUtil");
function getData(success) {
    var insertSql = "select * from user";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql,function (error,result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error)
        }
    });
    connection.end();
}

module.exports.getData = getData;

function addUser(userName,password,success) {
    const insertSql = "insert into user (`userName`, `password`) values (?, ?)" ;
    var params = [userName,password]
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql,params, function (error,result) {
        if (error == null) {
            // console.log(result)
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end()
}
 module.exports.addUser = addUser;

function queryUserByName(userName,success) {
    const querySql = "select * from user where userName = ?" ;
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,userName, function (error,result) {
        if (error == null) {
            // console.log(result);
            success(result)
        } else {
            console.log(error)
        }
    });
    connection.end()
}
module.exports.queryUserByName = queryUserByName;


function updatePassword(password,userName,success) {
    const updateSql = "update `user` set `password` = ? where `userName` = ? ";
    var params = [password,userName];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(updateSql,params, function (error,result) {
        if (error == null) {
            // console.log(result)
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end()
}
module.exports.updatePassword = updatePassword;



function deteleuserinfo(id,success) {
    const deleteSql = "delete from user where id = ?";
    var params = [id];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(deleteSql,params, function (error,result) {
        if (error == null) {
            // console.log(result)
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end()
}

module.exports.deteleuserinfo = deteleuserinfo;


function updateuserinfo(userName,password,id,success) {
    const  updateSql = "update user set userName=" + "\""+userName+"\"" + ",password =" + "\""+password+"\"" + "where id = " + id;
    var params = [userName,password,id];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(updateSql,params, function (error,result) {
        if (error == null) {
            // console.log(result)
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end()
}

module.exports.updateuserinfo = updateuserinfo;