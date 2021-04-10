//文章管理
var article = new Vue({
    el:'#article',
    data:{
        articleList:''
    },
    created:function () {
        axios.get("/queryAllBlog").then(function (res) {
            article.articleList = res.data.data;
            // console.log(article.articleList)
        })
    },
    methods:{
        revise(index,id) {
            var day2 = new Date();
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
var time = 0;
//文章发表
$(".addArticle ul").on("click", function () {
    time++;
    if(time % 2 != 0) {
        $(this).css("animation","moveto 1s linear forwards").end();
        $(".addArticle #title").css("display","none");
        $(".addArticle #tags").css("display","none");
        function everyAndArticlesubmit() {
            alert('提交');
            var content = $('#editor').html();
            $.ajax({
                url:"/editEveryDay",
                method:"post",
                data:content,
                success:function (resp) {
                    var result = JSON.parse(resp);
                    alert(result.msg);
                    $('#editor').html("");
                },
                error:function (resp) {
                    console.log(resp)
                }
            });
        }
    } else {
        $(this).css("animation","moveout 1s linear forwards").end();
        $(".addArticle #title").css("display","block");
        $(".addArticle #tags").css("display","block");
    }
});

$(".addArticle .submitBtn").on("click", function () {
    var flag = $("#tags").css("display");
    console.log(flag == 'block')
    if(flag == 'block') {

            alert('提交');
            var content = $('#editor').html();
            var title = $('#title').val();
            var tags = $('#tags').val();
            console.log(content);
            console.log(title);
            console.log(tags);

            $.ajax({
                url:"/editBlog?title=" + title + "&tags=" + tags,
                method:"post",
                data:content,
                success:function (resp) {
                    var result = JSON.parse(resp);
                    alert(result.msg);
                    $('#editor').html("");
                },
                error:function (resp) {
                    console.log(resp)
                }
            });


    } else {
            alert('提交');
            var content = $('#editor').html();
            $.ajax({
                url:"/editEveryDay",
                method:"post",
                data:content,
                success:function (resp) {
                    var result = JSON.parse(resp);
                    alert(result.msg);
                    $('#editor').html("");
                },
                error:function (resp) {
                    console.log(resp)
                }
            });
        }

});

$(function(){
    function initToolbarBootstrapBindings() {
        var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
                'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
                'Times New Roman', 'Verdana'],
            fontTarget = $('[title=Font]').siblings('.dropdown-menu');
        $.each(fonts, function (idx, fontName) {
            fontTarget.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '</a></li>'));
        });
        $('a[title]').tooltip({container:'body'});
        $('.dropdown-menu input').click(function() {return false;})
            .change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
            .keydown('esc', function () {this.value='';$(this).change();});

        $('[data-role=magic-overlay]').each(function () {
            var overlay = $(this), target = $(overlay.data('target'));
            overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
        });
        if ("onwebkitspeechchange"  in document.createElement("input")) {
            var editorOffset = $('#editor').offset();
            $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
        } else {
            $('#voiceBtn').hide();
        }
    };
    function showErrorAlert (reason, detail) {
        var msg='';
        if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
        else {
            console.log("error uploading file", reason, detail);
        }
        $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+
            '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
    };
    initToolbarBootstrapBindings();
    $('#editor').wysiwyg({ fileUploadError: showErrorAlert} );
    window.prettyPrint && prettyPrint();
});
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "http://connect.facebook.net/en_GB/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");



//用户管理
var userInfo = new Vue({
    el:'.userInfo',
    data:{
        userList:[]
    },
    created:function () {
        axios.get("/queryUserInfo").then(function (res) {
            userInfo.userList = res.data.data;
        })
    }
});
setTimeout(function () {
    $(".userInfo .up li").each(function (index,ele) {
        // console.log($(ele).find("button.delete"))
        $(ele).find("button.xiugai").on("click", function () {

            console.log($(this).parent().parent().find("input").css("pointer-events","all"))
        });
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
$(".userInfo .submit").on("click", function () {
    $(".userInfo .up li").each(function (index,ele) {
        // console.log($(ele).find(".delete").attr("data"));
        var id = $(ele).find(".delete").attr("data");
        var userName = $(ele).find("span").eq(0).find("input").val();
        var password = $(ele).find("span").eq(1).find("input").val();
        axios.post("/updateuserinfo?",{
            userName:userName,
            password:password,
            id:id,
        }).then(function (res) {
            flagArr.push(res.status);
        })
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
});




//评论排名


var comment = new Vue({
    el:'.comment',
    data:{
        list:[]
    },
    created:function () {
        axios.get("/queryComments").then(function (res) {
            // console.log(res)
            comment.list = res.data.data;
            comment.list = comment.list.filter(function (ele,index) {
                return ele.blog_id != -2;
            })
            comment.list = comment.list.sort(function (a,b) {
                return a.utime - b.utime
            });
            comment.list.forEach(function (ele,index) {
                ele.utime *= 1000;
                var d = new Date(ele.utime);
                ele.utime = d.toLocaleDateString()
            });
            comment.list = comment.list.reverse()
            // console.log(wrapper.list)
        })
    }
});
setTimeout(function () {
    $(".comment .neirong").each(function (index,ele) {
        $(ele).find(".comment-btn").on("click", function () {
            var name = $(this).parent().find(".userName").html();
            var blog_id = $(this).parent().find(".comment-id").html();
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



//留言

var wrapper = new Vue({
    el:'.message',
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
    $(".message .neirong").each(function (index,ele) {

        $(ele).find(".message-btn").on("click", function () {
            console.log($(this))
            var name = $(this).parent().find(".userName").html();
            var content = $(this).parent().find(".message-comment").html();
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



var active;
function removeActive() {
    $(".list-group a").each(function (index,ele) {
        $(ele).removeClass('active')
    });
}

function allNone() {
    $(".right-content").children().each(function (index,ele) {
        if(index > 0) {
            $(ele).css("display","none");
        }

    })
}



//用户信息点击
$(".a-UserInfo").on("click", function () {
    removeActive();
    allNone();
    $(this).addClass('active');
    $('.userInfo').css("display","block")
});

//添加文章/每日一句
$(".a-addArticle").on("click", function () {
    removeActive();
    allNone();
    $(this).addClass('active');
    $('.addArticle').css("display","block")
});

//文章修改
$(".a-article").on("click", function () {
    removeActive();
    allNone();
    $(this).addClass('active');
    $('#article').css("display","block")
});

//评论排名及修改
$(".a-comment").on("click", function () {
    removeActive();
    allNone();
    $(this).addClass('active');
    $('.comment').css("display","block")
});

//留言管理
$(".a-message").on("click", function () {
    removeActive();
    allNone();
    $(this).addClass('active');
    $('.message').css("display","block")
});






