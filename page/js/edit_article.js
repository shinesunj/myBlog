var article = new Vue({
    el:'#wrapper',
    data:{
        articleList:''
    },
    created:function () {
        axios.get("/queryAllBlog").then(function (res) {
            article.articleList = res.data.data;
            console.log(article.articleList)
        })
    },
    methods:{
        revise(index,id) {
            var day2 = new Date();

            // console.log($(".foot li")[index])
            $($(".foot li")[index]).find('input').css("cursor","default");
           $($(".foot li")[index]).find('input').each(function (index,ele) {
               $(ele).blur(function () {
                   console.log($($(this)[0].parentElement)[0].childNodes);
                   day2.setTime(day2.getTime());
                   var s2 = day2.getFullYear()+"-" + (day2.getMonth()+1) + "-" + day2.getDate();
                   var hour = day2.getHours();//得到小时
                   var minu = day2.getMinutes();//得到分钟
                   var sec = day2.getSeconds();//得到秒
                   var ctime = s2 + ' ' + hour + ":" + minu;
                   var title = $($(this)[0].parentElement)[0].childNodes[0].value;
                   var content = $($(this)[0].parentElement)[0].childNodes[2].value;
                   var tag = $($(this)[0].parentElement)[0].childNodes[4].value;
                   console.log('tag=' + tag)
                   var params = 'title=' + title + '&content=' + content + '&tags=' + tag + '&ctime=' + ctime + '&id=' + id;
                   console.log(params)
                   axios.get("/updateBlog?" + params).then(function (res) {
                       if(res.data.status == 'success') {
                           alert("修改成功")
                       }
                   })
               })
           })
            

        },
        remove(id,index) {
            // console.log(id)
            var flag = window.confirm("是否确定要删除？");
            if(flag) {
                $($(".foot li")[index]).css("display","none");
                var params = 'id=' + id;
                axios.get("/deleteBlogById?" + params).then(function (res) {
                    if(res.data.status == 'success') {
                        alert("删除成功")
                    }else {
                        alert("删除失败")
                    }
                })
            }
        }
    }

});

//文章发表
