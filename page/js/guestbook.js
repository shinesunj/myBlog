function parseCookie(str){
    var arrCookie = str.split("; ");
    var cookieObj = {};
    arrCookie.reduce(function(prveValue,curValue,index,self){
        var curArr = curValue.split("=");
        cookieObj[curArr[0]] = curArr[1];
        return prveValue;
    },cookieObj)
    return cookieObj
}//获取cookie
var blogComments= new Vue({
    el:'#blog_comments',
    data:{
        total:0,
        comments:[]
    },
    computed:{
        reply:function () {
            return function (commentId,userName) {
                document.getElementById("comment_reply").value = commentId;
                document.getElementById("comment_reply_name").value = userName;
                location.href = "#send_comment";
            }
        }
    },
    created:function () {
        var bid = -2;
        axios({
            method:'get',
            url:'/queryCommentsByBlogId?bid=' + bid,
        }).then(function (resp) {
            blogComments.comments = resp.data.data;

            for(var i = 0 ; i < blogComments.comments.length ; i ++) {
                if(blogComments.comments[i].parent > -1) {
                    blogComments.comments[i].options = "回复@" + blogComments.comments[i].parent_name;
                }
            }
        });
        axios({
            method:'get',
            url:'/queryCommentCountByBlogId?bid=' +bid
        }).then(function (resp) {
            blogComments.total = resp.data.data[0].count;
        }).catch(function (rresp) {
            console.log('请求错误');
        })
    }
})


var sendComment = new Vue({
    el:'#send_comment',
    data:{
        vcode:'',
        rightCode:''
    },
    computed:{
        changeCode:function () {
            return function () {
                axios({
                    method:'get' ,
                    url:'/queryRandomCode'
                }).then(function (resp) {
                    // console.log(resp)
                    sendComment.vcode = resp.data.data.data;
                    sendComment.rightCode = resp.data.data.text;
                })
            }
        },
        sendComment:function () {
            return function () {
                var code = document.getElementById('comment_code').value;
                if(code != sendComment.rightCode) {
                    alert('验证码有误');
                    return;
                }
                var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";
                var bid = -2;
                for( var i = 0; i < searchUrlParams.length; i++) {
                    if(searchUrlParams[i].split("=")[0] == 'bid') {
                        try{
                            bid = parseInt(searchUrlParams[i].split("=")[1]);
                        }catch (e) {
                            console.log(e);
                        }
                    }
                }
                var reply = document.getElementById('comment_reply').value;
                var replyName = document.getElementById('comment_reply_name').value;
                var name = parseCookie(document.cookie).userName;
                var email = document.getElementById('comment_email').value;
                var content = document.getElementById('comment_content').value;
                axios({
                    method: 'get',
                    url: '/addComment?bid=' + bid + '&parent=' + reply + '&userName=' + name + '&email=' + email + '&content=' + content + "&parentName=" + replyName,
                }).then(function (resp) {
                    // console.log(resp)
                    alert(resp.data.msg);
                })

            }
        }
    },
    created:function () {
        this.changeCode();
    }
})