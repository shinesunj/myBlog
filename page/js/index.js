Array.prototype.unique = function () {
    var arr = [];
    var temp = {}
    var len = this.length;
    for (i = 0; i < len; i++) {
        if (!temp[this[i]]) {
            temp[this[i]] = "abc";
            arr.push(this[i]);
        }

    }
    return arr;

} //数组去重


function parseCookie() {
    var Cookiestr = document.cookie;
    var arrCookie = Cookiestr.split("; ");
    var cookieObj = {};
    arrCookie.reduce(function (prveValue, curValue, index, self) {
        var curArr = curValue.split("=");
        cookieObj[curArr[0]] = curArr[1];
        return prveValue;
    }, cookieObj)
    return cookieObj
} //获取cookie
window.onload = function () {
    if (!parseCookie().userName) {
        window.alert("还未曾登录，正在跳转到登录页面")
        window.location = './login.html'
    }
};

var everyDay = new Vue({
    el: "#every_day",
    data: {
        content: ''
    },
    computed: {
        getContent: function () {
            return this.content;
        }
    },
    created: function () {
        //请求数据,给content赋值
        axios({
            method: 'get',
            url: '/queryEveryDay'
        }).then(function (resp) {
            console.log(resp)
            everyDay.content = resp.data.data[0].content;
            console.log(resp.data.data[0].content)
        }).catch(function (resp) {
            console.log('请求失败')
        })
    }
});

var articleList = new Vue({
    el: '#article_list',
    data: {
        page: 1,
        pageSize: 5,
        count: 100,
        pageNumList: [],
        articleList: [{}]
    },
    computed: {
        jumpTo: function () {
            return function (page) {
                this.getPage(page, this.pageSize);
            }
        },
        getPage: function () {
            return function (page, pageSize) {
                var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";
                var tag = "";
                for (var i = 0; i < searchUrlParams.length; i++) {
                    if (searchUrlParams[i].split("=")[0] == 'tag') {
                        try {
                            tag = searchUrlParams[i].split("=")[1];
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
                if (tag == "") { //不是查询情况
                    axios({
                        method: 'get',
                        url: '/queryBlogByPage?page=' + (page - 1) + "&pageSize=" + pageSize
                    }).then(function (resp) {
                        // console.log(resp)
                        var result = resp.data.data;
                        var list = [];
                        for (var i = 0; i < result.length; i++) {
                            var temp = {};
                            temp.title = result[i].title;
                            temp.content = result[i].content;
                            temp.date = result[i].ctime;
                            temp.views = result[i].views;
                            temp.tags = result[i].tags;
                            temp.id = result[i].id;
                            temp.link = '/blog_detail.html?bid=' + result[i].id;
                            list.push(temp)
                        }
                        articleList.articleList = list;
                        articleList.page = page;
                    }).catch(function (resp) {
                        console.log('请求错误');
                    });
                    axios({
                        method: 'get',
                        url: '/queryBlogCount'
                    }).then(function (resp) {
                        articleList.count = resp.data.data[0].count;
                        articleList.generatePageTool;
                    });
                } else {
                    axios({
                        method: 'get',
                        url: '/queryByTag?page=' + (page - 1) + "&pageSize=" + pageSize + "&tag=" + tag
                    }).then(function (resp) {
                        var result = resp.data.data;
                        var list = [];
                        for (var i = 0; i < result.length; i++) {
                            var temp = {};
                            temp.title = result[i].title;
                            temp.content = result[i].content;
                            temp.date = result[i].ctime;
                            temp.views = result[i].views;
                            temp.tags = result[i].tags;
                            temp.id = result[i].id;
                            temp.link = '/blog_detail.html?bid=' + result[i].id;
                            list.push(temp)
                        }
                        articleList.articleList = list;
                        articleList.page = page;
                    }).catch(function (resp) {
                        console.log('请求错误');
                    });

                    axios({
                        method: 'get',
                        url: '/queryByTagCount?tag=' + tag
                    }).then(function (resp) {
                        articleList.count = resp.data.data[0].count;
                        articleList.generatePageTool;
                    });

                    axios({
                        method: 'get',
                        url: '/queryBlogCount'
                    }).then(function (resp) {
                        articleList.count = resp.data.data[0].count;
                        articleList.generatePageTool;
                    });
                }
            }
        },
        generatePageTool: function () {
            var nowPage = this.page;
            var pageSize = this.pageSize;
            var totalCount = this.count;
            var result = [];
            result.push({
                text: "<<",
                page: 1
            });
            if (nowPage > 2) {
                result.push({
                    text: nowPage - 2,
                    page: nowPage - 2
                })

            }
            if (nowPage > 1) {
                result.push({
                    text: nowPage - 1,
                    page: nowPage - 1
                })

            }
            result.push({
                text: nowPage,
                page: nowPage
            });

            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({
                    text: nowPage + 1,
                    page: nowPage + 1
                });
            }
            if (nowPage + 2 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({
                    text: nowPage + 2,
                    page: nowPage + 2
                });
            }
            result.push({
                text: ">>",
                page: parseInt((totalCount + pageSize - 1) / pageSize)
            });
            this.pageNumList = result;
            return result;
        },
    },
    created: function () {
        this.getPage(this.page, this.pageSize)
    },
});


var container = new Vue({
    el: "#container",
    data: {
        userName: '',
        idArr: []
    },
    created: function () {
        this.$data.userName = parseCookie().userName;
        var userName = parseCookie(document.cookie).userName;
        var params = 'userName=' + userName;
        axios.get('/personRecord?' + params).then(function (res) {
            // console.log(res.data.data)
            res.data.data.forEach(function (ele) {
                container.idArr.push(ele.blog_id);
                // container.idArr.pop();
            })
            var arr = container.idArr.unique();
            var newArr = arr.filter(function (ele) {
                // console.log(ele)
                return ele > 0;
            })
            container.idArr = newArr;
        })
    },
    methods: {
        out() {
            location.href = "./login.html"
        },
        pRecord() {
            var params;
            console.log(container.idArr);
            var list = [];
            container.idArr.forEach(function (ele, index) {
                // console.log(ele)
                params = 'id=' + ele;
                axios.get('/getpersonRecord?' + params).then(function (res) {
                    // console.log(res)
                    var temp = {};
                    temp.title = res.data.data[0].title;
                    temp.content = res.data.data[0].content;
                    temp.date = res.data.data[0].ctime;
                    temp.views = res.data.data[0].views;
                    temp.tags = res.data.data[0].tags;
                    temp.id = res.data.data[0].id;
                    temp.link = '/blog_detail.html?bid=' + res.data.data[0].id;
                    list.push(temp)
                })

            });

            articleList.articleList = list;
            // console.log(articleList.articleList)


        }
    },
    computed: {
        flag() {
            var userName = parseCookie().userName;
            if (userName) {
                return false
            } else {
                return true
            }
        },
    }
})