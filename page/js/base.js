var randomTags = new Vue({
    el:'#random_tags',
    data:{
        tags:[]
    },
    computed:{
        randomColor:function () {
            return function () {
                var red = Math.random() * 255 + 50;
                var green =  Math.random() * 255 + 50;
                var blue =  Math.random() * 255 + 50;
                return "rgb(" + red + "," + green + "," + blue + ")";
            }
        },
        randomSize:function () {
            return function () {
                var size = (Math.random() * 20 + 12) + 'px';
                return size;
            }
        }
    },
    created:function () {
        axios({
            method:'get',
            url:'/queryRandomTags'
        }).then(function (resp) {
            var result = [];
            for (var i = 0; i < resp.data.data.length; i++) {
                result.push({text:resp.data.data[i].tag,link:"/?tag=" + resp.data.data[i].tag});
            }
            randomTags.tags = result;
        })
    }
})

var newHot = new Vue({
    el:'#new_hot',
    data: {
        titleList: []
    },
    created:function () {
        axios({
            method: 'get',
            url:'/queryHotBlog'
        }).then(function (resp) {
            var result = [];
            for(var i = 0; i < resp.data.data.length; i++) {
                var temp = {};
                temp.title = resp.data.data[i].title;
                temp.link = "/blog_detail.html?bid=" + resp.data.data[i].id;
                result.push(temp);
            }
            newHot.titleList = result;
        })
    }
})

var newComment = new Vue({
    el:'#new_comments',
    data: {
        commentList:[]
},
    created:function () {
        axios({
            method: 'get',
            url:'/queryNewComments'
        }).then(function (resp) {
            var result = [];
            for(var i = 0; i < resp.data.data.length; i++) {
                var temp = {};
                temp.name = resp.data.data[i].user_name;
                temp.data = resp.data.data[i].ctime;
                temp.comment = resp.data.data[i].comments;
                result.push(temp);
            }
            newComment.commentList = result;
        })
    }
})

var search = new Vue({
    el:'.search_bar',
    data:{
    },
    methods:{
        search() {
            console.log(111)
            var tag = document.getElementById("searchValue").value + "";
            var alltag = [];
            var url = window.location.href.split("?")[0];
            axios({
                method:'get',
                url:'/querySearch'
            }).then(function (resp) {
                console.log(resp)
                for (var i = 0; i < resp.data.data.length; i++) {
                    alltag.push(resp.data.data[i].tag)
                }
            })

            setTimeout(function () {
                if(alltag.indexOf(tag) != -1) {
                    window.location.href = url + '?tag=' + tag
                } else {
                    alert("查询不到有关该标签内容")
                }
},100)

        }
    }

});
$("#search").on("click", function () {
    console.log(111)
    var tag = document.getElementById("searchValue").value + "";
    var alltag = [];
    var url = window.location.href.split("?")[0];
    axios({
        method:'get',
        url:'/querySearch'
    }).then(function (resp) {
        console.log(resp)
        for (var i = 0; i < resp.data.data.length; i++) {
            alltag.push(resp.data.data[i].tag)
        }
    })

    setTimeout(function () {
        if(alltag.indexOf(tag) != -1) {
            window.location.href = url + '?tag=' + tag
        } else {
            alert("查询不到有关该标签内容")
        }
    },100)
})
