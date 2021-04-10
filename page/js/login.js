function init() {
    $(".oInput").on("focus", function () {
        $(this).addClass("active")
    })
    $(".oInput").on("blur", function () {
        $(this).removeClass("active")
    })
    $()
}
function login() {

    const userName = document.getElementById("user").value;
    const pwd = document.getElementById("password").value;
    const params = "userName=" + userName + "&" + "password=" + pwd;
    axios.post("/login",{userName:userName,password:pwd}).then(function (res) {
        if (res.data == "OK") {
            alert("成功")
            document.cookie = "userName=" + userName
            location.href = "./index.html"
        } else {
            // alert("失败");
            $(".waring").css('display',"block")
        }
    }).catch(function (err) {
        console.log(err)
    })
}
init()


