var wrapper = new Vue({
    el:'.wrapper',
    data:{
        userList:[]
    },
    created:function () {
        axios.get("/queryUserInfo").then(function (res) {
            console.log(res)
            wrapper.userList = res.data.data;
            console.log(wrapper.userList)
        })
    }
});


setTimeout(function () {
    $(".up li").each(function (index,ele) {
        // console.log($(ele).find("button.delete"))
        $(ele).find("button.xiugai").on("click", function () {

            console.log($(this).parent().parent().find("input").css("pointer-events","all"))
        })
        $(ele).find("button.delete").on("click", function () {
            $(ele).css("display","none");
            var id = $(ele).find("button.delete").attr("data");
            var params ='&id=' + id;
            console.log(params)
            axios.get("/deteleuserinfo?" + params).then(function (res) {
                console.log(res.data)
                if(res.data.status == 'success') {
                    alert("删除成功")
                }
            })
        })
    })

},500);



var flagArr = [];
var flag;

$(".submit").on("click", function () {
    $(".up li").each(function (index,ele) {
        // console.log($(ele).find(".delete").attr("data"));
        var id = $(ele).find(".delete").attr("data");
        var userName = $(ele).find("span").eq(0).find("input").val();
        var password = $(ele).find("span").eq(1).find("input").val();
        // var params = "key=" + key + "&bookName=" + bookName + "&bookPrice=" + bookPrice + "&bookAuthor=" + bookAuthor + "&bookImg=" + bookImg + "&press=" + press + "&pressTime=" + pressTime + "&introduction=" + introduction + "&bookNum=" + bookNum + "&id=" + id;
        axios.post("/updateuserinfo?",{
            userName:userName,
            password:password,
            id:id,
        }).then(function (res) {

            flagArr.push(res.status);

        })

        // console.log(bookName,bookPrice,bookAuthor,bookImg,press,pressTime,introduction,bookNum)
    })
    setTimeout(function () {
        console.log(flagArr)
        flagArr.forEach(function (ele,index) {
            if(ele == 200) {
                flag = true;
            }
        })
        if(flag) {
            alert("修改成功");
            flagArr = []
        }
    },500)
})