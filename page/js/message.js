
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
                return ele.blog_id == -2;
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
    $(".neirong").each(function (index,ele) {

        $(ele).find(".btn").on("click", function () {
            console.log($(this))
            var name = $(this).parent().find(".userName").html();
            var content = $(this).parent().find(".comment").html();
            var params = "name=" + name + "&blog_id= -2" + "&comment=" + content;
            console.log(params)
            axios.post("deleteCommentBynameAndContent?",{
                name:name,
                blog_id:-2,
                comment:content
            }).then(function (res) {
                console.log(res);
                if(res.data.status == 'success') {
                    alert("删除成功")
                }
            })
        })
    });
},500);

