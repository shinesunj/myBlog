const app = new Vue({
    el:"#wrapper",
    data : {
        isUser:'',
        password:"",
        pwd:'',
        sPwd:''
    }
})

let timer;
$("#userName").on("input", function () {
    var userName = $("#userName").val()
    clearTimeout(timer);
    timer = setTimeout(function () {
        axios.get("/getData").then(function (res) {
            console.log(res)
            var useArr = res.data.data
            if(useArr.indexOf(userName) == -1) {
                app.isUser = true
            } else {
                app.isUser = false
            }
            // console.log(res.data)
        }).catch(function (err) {
            console.log(err)
        })
        // if (1) {
        //     app.isUser = true
        // }
    },600)

})

$("#password").on("input", function () {
    let password = $(this).val();
    // var sPassword = $(this).val()
    const path = /^[\w_-]{6,10}$/;
    clearTimeout(timer);
    timer = setTimeout(function () {
        let test = path.test(password);
        if(!password) {
            // console.log('aaa')
            $('#sPassword').val("");
            app.sPwd = '';
        }
        if (!test) {
            app.pwd = true
            app.password = "密码格式不符"
            if(!password) {
                app.pwd = ''
            }
        } else {
            app.pwd = false

        }
    },600)

})


$("#S-password").on("input", function () {

    var password = $("#password").val()
    var sPassword = $(this).val()
    clearTimeout(timer);
    timer = setTimeout(function () {
        if (password != sPassword) {
            app.sPwd = true;
            app.password = "密码不一致"
            if(!sPassword) {
                app.password = ''
            }
        } else {
            app.sPwd = false;
            if(!sPassword) {
                app.password = ''
            }
        }
    },600)
})

$(".i-btn").on("click", function () {
    if(app.isUser == false && app.pwd == false && app.sPwd == false) {
        var password = $("#password").val();
        var userName = $("#userName").val()
        var params = "password=" + password + "&userName=" + userName;
        axios.get("/updatePassword?" + params).then(function (res) {
            if(res.data.status == 'success') {
                alert("修改成功，即将进入登录页面");
                location.href = './login.html'
            }
        })
    }
})
