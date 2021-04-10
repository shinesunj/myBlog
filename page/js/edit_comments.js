
var wrapper = new Vue({
    el:'.wrapper',
    data:{
        list:[]
    },
    created:function () {
        axios.get("/queryComments").then(function (res) {
            // console.log(res)
            wrapper.list = res.data.data;
            wrapper.list = wrapper.list.filter(function (ele,index) {
                return ele.blog_id != -2;
            })
            wrapper.list = wrapper.list.sort(function (a,b) {
                return a.utime - b.utime
            });
            wrapper.list.forEach(function (ele,index) {
                ele.utime *= 1000;
                var d = new Date(ele.utime);
                ele.utime = d.toLocaleDateString()
            });
            wrapper.list = wrapper.list.reverse()
            // console.log(wrapper.list)
        })
    }
});

setTimeout(function () {
    $(".neirong li").each(function (index,ele) {
        $(ele).find("span.btn").on("click", function () {
            var name = $(this).parent().find("span.name input").val();
            var blog_id = $(this).attr("data");
            var params = "name=" + name + "&blog_id=" + blog_id;
            console.log(params)
            axios.get("deleteCommentByname?" + params).then(function (res) {
                console.log(res);
                if(res.data.status == 'success') {
                    alert("删除成功")
                }
            })
        })
    });
},500);

