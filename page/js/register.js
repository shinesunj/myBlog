
const app = new Vue({
    el:'#wrapper',
    data:{
        regFlag:'',
        regTest:'',
        repeatFlag:'',
        repestTest:'',
        regPwdFalg:"",
        pwdTest:'',
        Spassword:''
    },
    created() {},
    methods:{}

})

let timer;
$("#userName").on("input", function () {
    var userName = $("#userName").val()
    var path = /^[a-zA-Z0-9_-]{4,16}$/
    clearTimeout(timer);
    timer = setTimeout(function () {
        let test = path.test(userName)
        if (!test) {
            app.regFlag = true
            app.regTest = "用户名格式不符"
            console.log($("div.waring"))
            $("div.U .regFlag").css("color","crimson")
            if(!userName) {
                app.regTest = ''
            }
        } else {
            axios.get("/getData").then(function (res) {
                var userArr = res.data.data;
                console.log(res.data.data)
                // let userArr = res.data.data.split(",");
                console.log(userArr)
                if(res.data.data.indexOf(userName) == -1) {
                    console.log(userArr.indexOf(userName))
                    app.regFlag = true;
                    // console.log( $(".waring span"))
                    $(".username .regFlag").css("color","#00FF00")
                    app.regTest = "success"
                } else {
                    app.regFlag = true;
                    $("div.U .regFlag").css("color","crimson")
                    app.regTest = "用户名重复"
                }
            })

        }
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
            $('#S-password').val("");
            app.Spassword = '';
        }
        if (!test) {
            app.regPwdFalg = true
            $("div.P .regPwdFalg").css("color","crimson")
            app.pwdTest = "密码格式不符"
            console.log(app)
            if(!password) {
                app.pwdTest = ''
            }
        } else {
            app.regPwdFalg = true
            $(".password .regPwdFalg").css("color","#00FF00","display","inline-block")
            app.pwdTest = "success";
        }
    },600)

})


$("#S-password").on("input", function () {
    var password = $("#password").val()
    var sPassword = $(this).val()
    clearTimeout(timer);
    timer = setTimeout(function () {
        if (password != sPassword) {
            app.Spassword = true;
            $("div.R .Spassword").css("color","crimson","display","inline-block");
            app.Spassword = "密码不一致"
            if(!sPassword) {
                app.Spassword = ''
            }
        } else {
            app.Spassword = true;
            $(".repeat .Spassword").css("color","#00FF00","display","inline-block");
            app.Spassword = "success"
            if(!sPassword) {
                app.Spassword = ''
            }
        }
    },600)
})

$(".bigBtn").on("click", function () {
    if(app.regTest == "success" &&  app.pwdTest == "success"  &&  app.Spassword == "success") {
        let userName = $("#userName").val();
        let pwd = $("#password").val();
        let params = "userName=" + userName + "&password=" + pwd;
        console.log(params)
        axios.get("/register?" + params,).then(function (res) {
            if(res.data.status == 'success') {
                alert("恭喜注册成功");
                location.href = "./login.html";
            }
        }).catch(function (err) {
            console.log(err)
        })
    } else {
        alert("填写有误，请重新填写")
    }
});