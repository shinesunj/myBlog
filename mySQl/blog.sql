CREATE DATABASE  IF NOT EXISTS `my_blog` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `my_blog`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: my_blog
-- ------------------------------------------------------
-- Server version	5.7.27-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `content` text NOT NULL,
  `views` int(11) NOT NULL,
  `tags` varchar(256) NOT NULL,
  `ctime` int(11) NOT NULL,
  `utime` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_ctime` (`ctime`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (9,'测试标题2','\n      巴拉巴拉',0,'qwe.adsf',1579162981,1579162981),(10,'测试标题3','啦啦啦啦啦啦',2,'jia',1579163214,1579163214),(11,'测试标题4','呃呃呃呃呃呃呃呃呃',0,'jia',1579163259,1579163259),(12,'测试标题5','fsdfsdfsdfsd<div>fsdfsdfsdfdsfds</div><div><img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCABkAGQDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAezAIaIQoAAAAAAAAABSFIAUgAAIUpAAAAAAAAAAUgAKQhQQoIUhQAAAAAAQoAABSAAAhQAAAAAAAAAAAAAAAAAAAAACAFIUpAQFIQ//xAAYEAACAwAAAAAAAAAAAAAAAAAQQQEgcP/aAAgBAQABBQLHIKCt/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwEp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwEp/8QAFBABAAAAAAAAAAAAAAAAAAAAcP/aAAgBAQAGPwIp/8QAJBAAAQMEAgICAwAAAAAAAAAAAAEQESAhMUFRgWFxMJGx4fD/2gAIAQEAAT8hFFJg7FbL4o2bovJgluTQr+zTpZly0knbdsjYOjdN/wCWrVqEbLZbVqPPLRtsFiJ2tOMmz7FbTxJcwWf23dNuG3pvV/g0b/dEtF6NGWVF0iC+mzcgwLi9F27PrunyfgmmBVFS3BI2bg5GMC5gmxtTnwSf/9oADAMBAAIAAwAAABAAQSQASSQSACSAAQQACAASCAAQSCACSCQAQASSQAQAQCCSCCAQQASSSQSQSACQCQQAQSACASCQSQQASQCCQQSf/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPxAp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPxAp/8QAIxABAAMAAgIBBQEBAAAAAAAAAQARITFBUWFxgZGhsfDRwf/aAAgBAQABPxCvI1X3mBKq+WUQOyNttmcRvgFuyhjW+Zlum9soFtPiUvPPiC6VzBbAFvUz4DIcaH1SFG3S7xLUPNvU35ca/wB7ipq3nB4jhZdzh7+blIco8yqVtP0nCrAO4Xd9uXFpB35liHu+okauvrMw6PE5vq9PUe+QdRrtsCvHZsfzz8ThBb7AiptnqYtTVSufNdzoOmVTOT49Szt/epdC015l0Oubd0lWDyeCYq1fT1NpQrdqFU8NSswJXJ3GnVl9cwrQ0viWIJdPr9SqSrviuaia0bxx/e5fRKi7RHeYOJ2YEOVs92Rco3xTUAA/E3korxKd5V+0HS14viaG3fcRV9vRKQOazIeTid79ZS8fkYAEr3vU4Ox9TmipPMa6rx8yxoR9wNpq9lvo+EKo4xljldc2wBS/NO/3uCW5ac9yxmV0xstL4v8AyA47sfNld1+ZnZ9YadcZKcUM0CN4Fj6IVVd53Cqqb3I5eEdea7ripsrY90xaK746Sd2n5riABa6u4gDxt2sA8GV9YA34f3+xateOo+9eiDjjniZXo9cyqM3rJ7x3ipoNOSwa48ozGnCPKFUZT/eoXaCORp4+sq3G9lFe0amhWfqNIZnqZe3X7g4Iu9eYoA7uLSKvfWDe9/mUd6HHohyt+OLmj8cwtetfPEssqnqPJQ/Pdy0LujxLBaa3qUNNdeOZwKx4L5gpzbUS6D549Slcl44lBgfJKejzFX3XPzK1Z7w5lFWzuuoDdXXiByds7UysqOKD7QcvON/vvGvhmhzAfC86uNBRVt7ASgCv+zq6QDxAqlefEzR2fFsqlvV94YAzo2VXO7AxBgIZe+eI9lbwXObqvuIP7iIeM6i8Hga+8VxboP6ho0KCn02GICsuPiyl/X+zr7ShdNfxBC6VDmpXZ/XFRI10i/BP/9k=\"><br></div><div>weqwe</div><div>qweqweqwewq</div>',0,'ddd',1579165336,1579165336),(13,'测试标题6','安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\\Passport\\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\\Passport\\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCABkAGQDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAezAIaIQoAAAAAAAAABSFIAUgAAIUpAAAAAAAAAAUgAKQhQQoIUhQAAAAAAQoAABSAAAhQAAAAAAAAAAAAAAAAAAAAACAFIUpAQFIQ//xAAYEAACAwAAAAAAAAAAAAAAAAAQQQEgcP/aAAgBAQABBQLHIKCt/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwEp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwEp/8QAFBABAAAAAAAAAAAAAAAAAAAAcP/aAAgBAQAGPwIp/8QAJBAAAQMEAgICAwAAAAAAAAAAAAEQESAhMUFRgWFxMJGx4fD/2gAIAQEAAT8hFFJg7FbL4o2bovJgluTQr+zTpZly0knbdsjYOjdN/wCWrVqEbLZbVqPPLRtsFiJ2tOMmz7FbTxJcwWf23dNuG3pvV/g0b/dEtF6NGWVF0iC+mzcgwLi9F27PrunyfgmmBVFS3BI2bg5GMC5gmxtTnwSf/9oADAMBAAIAAwAAABAAQSQASSQSACSAAQQACAASCAAQSCACSCQAQASSQAQAQCCSCCAQQASSSQSQSACQCQQAQSACASCQSQQASQCCQQSf/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPxAp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPxAp/8QAIxABAAMAAgIBBQEBAAAAAAAAAQARITFBUWFxgZGhsfDRwf/aAAgBAQABPxCvI1X3mBKq+WUQOyNttmcRvgFuyhjW+Zlum9soFtPiUvPPiC6VzBbAFvUz4DIcaH1SFG3S7xLUPNvU35ca/wB7ipq3nB4jhZdzh7+blIco8yqVtP0nCrAO4Xd9uXFpB35liHu+okauvrMw6PE5vq9PUe+QdRrtsCvHZsfzz8ThBb7AiptnqYtTVSufNdzoOmVTOT49Szt/epdC015l0Oubd0lWDyeCYq1fT1NpQrdqFU8NSswJXJ3GnVl9cwrQ0viWIJdPr9SqSrviuaia0bxx/e5fRKi7RHeYOJ2YEOVs92Rco3xTUAA/E3korxKd5V+0HS14viaG3fcRV9vRKQOazIeTid79ZS8fkYAEr3vU4Ox9TmipPMa6rx8yxoR9wNpq9lvo+EKo4xljldc2wBS/NO/3uCW5ac9yxmV0xstL4v8AyA47sfNld1+ZnZ9YadcZKcUM0CN4Fj6IVVd53Cqqb3I5eEdea7ripsrY90xaK746Sd2n5riABa6u4gDxt2sA8GV9YA34f3+xateOo+9eiDjjniZXo9cyqM3rJ7x3ipoNOSwa48ozGnCPKFUZT/eoXaCORp4+sq3G9lFe0amhWfqNIZnqZe3X7g4Iu9eYoA7uLSKvfWDe9/mUd6HHohyt+OLmj8cwtetfPEssqnqPJQ/Pdy0LujxLBaa3qUNNdeOZwKx4L5gpzbUS6D549Slcl44lBgfJKejzFX3XPzK1Z7w5lFWzuuoDdXXiByds7UysqOKD7QcvON/vvGvhmhzAfC86uNBRVt7ASgCv+zq6QDxAqlefEzR2fFsqlvV94YAzo2VXO7AxBgIZe+eI9lbwXObqvuIP7iIeM6i8Hga+8VxboP6ho0KCn02GICsuPiyl/X+zr7ShdNfxBC6VDmpXZ/XFRI10i/BP/9k=\"><div>安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\\Passport\\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\\Passport\\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...<br></div>',0,'666',1579165602,1579165602),(14,'测试标题7','安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\\Passport\\PassportServiceProvider::class。执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。...',0,'666',1579165634,1579165634),(15,'Vue history模式编译后nginx无法访问的问题','Vue的项目，使用history路由模式相比hash模式来说，url会比较美观。但新手在把项目编译后并使用nginx配置访问时，点击其它页时会空白，F12查看请求，返回304，并且提示“We’re sorry but xxxxxx doesn’t work properly without JavaScript enabled. Please enable it to continue。我解决的方法是首先在nginx里要正确配置好了urlrewrite：location / {&nbsp; &nbsp; &nbsp; &nbsp; tr...',0,'666',1579165651,1579165651),(16,'测试标题','fsfsdfsdfsdfds',0,'3432',1579165888,1579165888),(17,'文章1','fsdfsdafsafaf',7,'dssf',1579508239,1579508239),(18,'高山流水','<blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><div style=\"text-align: left;\"><ul><li><b style=\"font-family: Arial; font-size: medium;\"><i><img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCABkAGQDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAezAIaIQoAAAAAAAAABSFIAUgAAIUpAAAAAAAAAAUgAKQhQQoIUhQAAAAAAQoAABSAAAhQAAAAAAAAAAAAAAAAAAAAACAFIUpAQFIQ//xAAYEAACAwAAAAAAAAAAAAAAAAAQQQEgcP/aAAgBAQABBQLHIKCt/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPwEp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPwEp/8QAFBABAAAAAAAAAAAAAAAAAAAAcP/aAAgBAQAGPwIp/8QAJBAAAQMEAgICAwAAAAAAAAAAAAEQESAhMUFRgWFxMJGx4fD/2gAIAQEAAT8hFFJg7FbL4o2bovJgluTQr+zTpZly0knbdsjYOjdN/wCWrVqEbLZbVqPPLRtsFiJ2tOMmz7FbTxJcwWf23dNuG3pvV/g0b/dEtF6NGWVF0iC+mzcgwLi9F27PrunyfgmmBVFS3BI2bg5GMC5gmxtTnwSf/9oADAMBAAIAAwAAABAAQSQASSQSACSAAQQACAASCAAQSCACSCQAQASSQAQAQCCSCCAQQASSSQSQSACQCQQAQSACASCQSQQASQCCQQSf/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAwEBPxAp/8QAFBEBAAAAAAAAAAAAAAAAAAAAcP/aAAgBAgEBPxAp/8QAIxABAAMAAgIBBQEBAAAAAAAAAQARITFBUWFxgZGhsfDRwf/aAAgBAQABPxCvI1X3mBKq+WUQOyNttmcRvgFuyhjW+Zlum9soFtPiUvPPiC6VzBbAFvUz4DIcaH1SFG3S7xLUPNvU35ca/wB7ipq3nB4jhZdzh7+blIco8yqVtP0nCrAO4Xd9uXFpB35liHu+okauvrMw6PE5vq9PUe+QdRrtsCvHZsfzz8ThBb7AiptnqYtTVSufNdzoOmVTOT49Szt/epdC015l0Oubd0lWDyeCYq1fT1NpQrdqFU8NSswJXJ3GnVl9cwrQ0viWIJdPr9SqSrviuaia0bxx/e5fRKi7RHeYOJ2YEOVs92Rco3xTUAA/E3korxKd5V+0HS14viaG3fcRV9vRKQOazIeTid79ZS8fkYAEr3vU4Ox9TmipPMa6rx8yxoR9wNpq9lvo+EKo4xljldc2wBS/NO/3uCW5ac9yxmV0xstL4v8AyA47sfNld1+ZnZ9YadcZKcUM0CN4Fj6IVVd53Cqqb3I5eEdea7ripsrY90xaK746Sd2n5riABa6u4gDxt2sA8GV9YA34f3+xateOo+9eiDjjniZXo9cyqM3rJ7x3ipoNOSwa48ozGnCPKFUZT/eoXaCORp4+sq3G9lFe0amhWfqNIZnqZe3X7g4Iu9eYoA7uLSKvfWDe9/mUd6HHohyt+OLmj8cwtetfPEssqnqPJQ/Pdy0LujxLBaa3qUNNdeOZwKx4L5gpzbUS6D549Slcl44lBgfJKejzFX3XPzK1Z7w5lFWzuuoDdXXiByds7UysqOKD7QcvON/vvGvhmhzAfC86uNBRVt7ASgCv+zq6QDxAqlefEzR2fFsqlvV94YAzo2VXO7AxBgIZe+eI9lbwXObqvuIP7iIeM6i8Hga+8VxboP6ho0KCn02GICsuPiyl/X+zr7ShdNfxBC6VDmpXZ/XFRI10i/BP/9k=\">就好了可好看好看了计划开了花开了会考虑好了客户看就看就好了客户可厉害快乐就好快乐就好</i></b></li></ul></div></blockquote>',3,'高山',1581428323,1581428323),(19,'Laravel5.4安装passport时遇到的一些问题','\n      Go ahead…<ol style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\"><li style=\"box-sizing: border-box;\">安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0</li><li style=\"box-sizing: border-box;\">安装后执行迁移时nothing to migrate，需要手动注册Provider， 在config/app.php中providers中添加Laravel\\Passport\\PassportServiceProvider::class。</li><li style=\"box-sizing: border-box;\">执行php artisan passport:install时提示“There are no commands defined in the “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。</li><li style=\"box-sizing: border-box;\">其他待更新</li></ol>',0,'建站经验',1582343437,1582343437),(20,'使用Nginx反向代理部署laravel和history模式的Vue项目[更新]','<p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">[2019.12.2 更新] nginx.conf里要加上对laravel的静态文件目录的转发(这里假设我的静态文件在public/static下)、修改vue的nginx配置。</p><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。</p><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行开发，所以想使用zh30.com/admin 来访问后台管理，接口交互想使用zh30.com/api/xxx。</p><span id=\"more-2803\" style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\"></span><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">第一步，本地解析hosts，zh30.com指向到127.0.0.1 。。。。</p><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">第二步，配置nginx的主server，它用来接受我们zh30.com的所有请求，并进行代理转发。</p><pre class=\"wp-block-code\" style=\"box-sizing: border-box; overflow: auto; font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; line-height: 1.42857; border-color: rgb(204, 204, 204);\"><div class=\"codecolorer-container text railscasts\" style=\"box-sizing: border-box; margin-bottom: 10px; border: 1px solid rgb(159, 159, 159); color: rgb(230, 225, 220); background-color: rgb(43, 43, 43); overflow: auto; white-space: nowrap;\"><div class=\"text codecolorer\" style=\"box-sizing: border-box; padding: 5px;\">server {<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; listen 80;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; server_name zh30.com;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; location / {<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_set_header X-Real-IP $remote_addr;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_set_header Host $host;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_pass http://127.0.0.1:8181;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; }<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; location ~ ^/(admin|api|static) {<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_set_header X-Real-IP $remote_addr;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_set_header Host $host;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; proxy_pass http://127.0.0.1:8282;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; }<br style=\"box-sizing: border-box;\">}</div></div></pre><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">第三步，配置Vue的server，这里假设我的Vue项目build在D:/wwwroot/myvueproject/dist目录。此server的作用是，把从主server 8181代理过来的请求全部rewrite到index.html，以支持Vue的history模式路由。</p><pre class=\"wp-block-code\" style=\"box-sizing: border-box; overflow: auto; font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; line-height: 1.42857; border-color: rgb(204, 204, 204);\"><div class=\"codecolorer-container text railscasts\" style=\"box-sizing: border-box; margin-bottom: 10px; border: 1px solid rgb(159, 159, 159); color: rgb(230, 225, 220); background-color: rgb(43, 43, 43); overflow: auto; white-space: nowrap;\"><div class=\"text codecolorer\" style=\"box-sizing: border-box; padding: 5px;\">server {<br style=\"box-sizing: border-box;\">&nbsp; listen 8181;<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; root \"D:/wwwroot/myvueproject/dist\";<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; index index.html;<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; server_name localhost;<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; location / {<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; try_files $uri $uri/ /index.html =404;<br style=\"box-sizing: border-box;\">&nbsp; }<br style=\"box-sizing: border-box;\">}</div></div></pre><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">第四步，配置Laravel的server，假设laravel项目在D:/wwwroot/mylaravelproject/。此server的作用是，把从主server 8282代理来的请求（以/admin或/api开头），全部rewrite到public的index.php，实现laravel的路由系统。</p><pre class=\"wp-block-code\" style=\"box-sizing: border-box; overflow: auto; font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; line-height: 1.42857; border-color: rgb(204, 204, 204);\"><div class=\"codecolorer-container text railscasts\" style=\"box-sizing: border-box; margin-bottom: 10px; border: 1px solid rgb(159, 159, 159); color: rgb(230, 225, 220); background-color: rgb(43, 43, 43); overflow: auto; white-space: nowrap;\"><div class=\"text codecolorer\" style=\"box-sizing: border-box; padding: 5px;\">server {<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; &nbsp; listen 8282;<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; &nbsp; server_name localhost;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; root \"D:/wwwroot/mylaravelproject/public\";<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; index index.php;<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; &nbsp; location / {<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;try_files $uri $uri/ /index.php$is_args$args;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; }<br style=\"box-sizing: border-box;\"><br style=\"box-sizing: border-box;\">&nbsp; &nbsp; location ~ \\.php(.*)$ {<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fastcgi_pass &nbsp; 127.0.0.1:9001;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fastcgi_index &nbsp;index.php;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fastcgi_split_path_info &nbsp;^((?U).+\\.php)(/?.+)$;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fastcgi_param &nbsp;SCRIPT_FILENAME &nbsp;$document_root$fastcgi_script_name;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fastcgi_param &nbsp;PATH_INFO &nbsp;$fastcgi_path_info;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fastcgi_param &nbsp;PATH_TRANSLATED &nbsp;$document_root$fastcgi_path_info;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; include &nbsp; &nbsp; &nbsp; &nbsp;fastcgi_params;<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; }<br style=\"box-sizing: border-box;\">}</div></div></pre><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">第五步，重启Nginx，完成！</p><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">可能遇到的问题：暂无。。。</p>',2,'laravelnginxproxyvue',1582343501,1582343501),(21,'Vue history模式编译后nginx无法访问的问题','\n      Go ahead…<span style=\"background-color: rgb(245, 245, 245);\">Vue的项目，使用history路由模式相比hash模式来说，url会比较美观。但新手在把项目编译后并使用nginx配置访问时，点击其它页时会空白，F12查看请求，返回304，并且提示“We’re sorry but xxxxxx doesn’t work properly without JavaScript enabled. Please enable it to continue。</span><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">我解决的方法是首先在nginx里要正确配置好了urlrewrite：</p><pre class=\"wp-block-code\" style=\"box-sizing: border-box; overflow: auto; font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; line-height: 1.42857; border-color: rgb(204, 204, 204);\"><div class=\"codecolorer-container text railscasts\" style=\"box-sizing: border-box; margin-bottom: 10px; border: 1px solid rgb(159, 159, 159); color: rgb(230, 225, 220); background-color: rgb(43, 43, 43); overflow: auto; white-space: nowrap;\"><div class=\"text codecolorer\" style=\"box-sizing: border-box; padding: 5px;\">location / {<br style=\"box-sizing: border-box;\">&nbsp; &nbsp; &nbsp; &nbsp; try_files $uri $uri/ /index.html; &nbsp;<br style=\"box-sizing: border-box;\">}</div></div></pre><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">然后项目在build编译时增加参数<span style=\"box-sizing: border-box; font-weight: 700;\">&nbsp;–modern</span></p><pre class=\"wp-block-code\" style=\"box-sizing: border-box; overflow: auto; font-family: Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; line-height: 1.42857; border-color: rgb(204, 204, 204);\"><div class=\"codecolorer-container text railscasts\" style=\"box-sizing: border-box; margin-bottom: 10px; border: 1px solid rgb(159, 159, 159); color: rgb(230, 225, 220); background-color: rgb(43, 43, 43); overflow: auto; white-space: nowrap;\"><div class=\"text codecolorer\" style=\"box-sizing: border-box; padding: 5px;\">npm run build --modern</div></div></pre><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">或在vue ui中配置编译变量，打开Modern mode(针对现代浏览器构建应用，自动向后兼容)模式。</p><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">现在再使history模式访问时就正常了。</p><p style=\"box-sizing: border-box; background-color: rgb(245, 245, 245);\">参考：<a href=\"https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E7%8E%B0%E4%BB%A3%E6%A8%A1%E5%BC%8F\" style=\"box-sizing: border-box; background-color: transparent; color: rgb(51, 122, 183);\"></a><a href=\"https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E7%8E%B0%E4%BB%A3%E6%A8%A1%E5%BC%8F\" style=\"box-sizing: border-box; background-color: transparent; color: rgb(51, 122, 183);\">https://cli.vuejs.org/zh/guide/browser-compatibility.html</a></p><ins class=\"adsbygoogle\" data-ad-format=\"fluid\" data-ad-layout=\"in-article\" data-ad-client=\"ca-pub-3538037225914284\" data-ad-slot=\"2670515478\" data-adsbygoogle-status=\"done\" style=\"box-sizing: border-box; background-color: rgb(245, 245, 245); display: block; text-align: center; height: 178px;\"><ins id=\"aswift_0_expand\" style=\"box-sizing: border-box; display: inline-table; border: none; height: 178px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 710px; background-color: transparent;\"><ins id=\"aswift_0_anchor\" style=\"box-sizing: border-box; display: block; border: none; height: 178px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 710px; background-color: transparent;\"><iframe width=\"710\" height=\"178\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" vspace=\"0\" hspace=\"0\" allowtransparency=\"true\" scrolling=\"no\" allowfullscreen=\"true\" id=\"aswift_0\" name=\"aswift_0\" style=\"box-sizing: border-box; left: 0px; position: absolute; top: 0px; border-width: 0px; border-style: initial; width: 710px; height: 178px;\"></iframe></ins></ins></ins>',6,'vue',1582343562,1582343562),(22,'Vue博客','<b><font face=\"Courier New\">最新博客文章</font></b>',2,'blog',1585376675,1585376675);
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blog_id` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  `parent_name` varchar(64) NOT NULL DEFAULT '0',
  `user_name` varchar(45) NOT NULL,
  `email` varchar(128) NOT NULL,
  `comments` varchar(256) NOT NULL,
  `ctime` int(11) NOT NULL,
  `utime` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx` (`blog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,15,-1,'0','贾臻','123456@qq.com','你好',1579317514,1579317514),(2,16,-1,'0','fsdf','fdsafas','fasdfa',1579487034,1579487034),(3,16,-1,'0','code-text','jia1','code',1579487075,1579487075),(4,16,-1,'0','code-text','jia1','code',1579487080,1579487080),(5,16,-1,'0','code-text','jia1','code',1579487082,1579487082),(6,16,-1,'0','code-text','jia1','code',1579487089,1579487089),(7,16,2,'fsdf','jia','12522@qq.com','fs你好啊',1579490499,1579490499),(8,16,2,'fsdf','jia','12522@qq.com','fs你好啊',1579490509,1579490509),(9,-1,-1,'0','jia','1132252@qq.com','你好。这是关于',1579507214,1579507214),(10,-2,-1,'0','贾臻','123456@qq.ocm','nihao ',1579507792,1579507792),(11,-2,10,'贾臻','张三','222222@qq.com','你好啊',1579507830,1579507830),(12,-1,9,'jia','wei','15161515','好的，我知道了，谢谢',1581427234,1581427234),(13,-2,-1,'0','wei','11111111111','nihao',1581428089,1581428089),(14,-2,-1,'0','jiazhen','1231313@qq.com','你好啊',1585376260,1585376260),(15,21,-1,'0','贾臻','14849555555555@qq.com','你好，我是贾臻',1585376538,1585376538),(16,21,15,'贾臻','jia','123232131@qq.com','你好啊，我是jia',1585376577,1585376577),(17,-2,-1,'0','留言','33333333@163.com','留言',1585376731,1585376731);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `every_day`
--

DROP TABLE IF EXISTS `every_day`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `every_day` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `ctime` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_ctime` (`ctime`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `every_day`
--

LOCK TABLES `every_day` WRITE;
/*!40000 ALTER TABLE `every_day` DISABLE KEYS */;
INSERT INTO `every_day` VALUES (1,'Go ahead…',1579081948),(2,'站在巨人的肩膀上，我可以看的更远。<blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><div><blockquote style=\"margin: 0 0 0 40px; border: none; padding: 0px;\"><div>----牛顿</div></blockquote></div></blockquote></blockquote></blockquote>',1579081993),(3,'我今天心情太好了，想吃烧烤',1579085273),(4,'嘻嘻嘻',1582343300),(5,'今天天气不错',1585376832);
/*!40000 ALTER TABLE `every_day` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag_blog_mapping`
--

DROP TABLE IF EXISTS `tag_blog_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_blog_mapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `ctime` int(11) NOT NULL,
  `utime` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_tag_id_blog_id` (`tag_id`,`blog_id`),
  KEY `idx_tag_id` (`tag_id`),
  KEY `idx_blog_id` (`blog_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_blog_mapping`
--

LOCK TABLES `tag_blog_mapping` WRITE;
/*!40000 ALTER TABLE `tag_blog_mapping` DISABLE KEYS */;
INSERT INTO `tag_blog_mapping` VALUES (2,3,9,1579162981,1579162981),(3,4,10,1579163214,1579163214),(4,5,12,1579165337,1579165337),(5,6,13,1579165602,1579165602),(6,7,16,1579165888,1579165888),(7,8,17,1579508239,1579508239),(8,9,18,1581428323,1581428323),(9,10,19,1582343437,1582343437),(10,11,20,1582343501,1582343501),(11,12,21,1582343562,1582343562),(12,13,22,1585376675,1585376675);
/*!40000 ALTER TABLE `tag_blog_mapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `int` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(64) NOT NULL,
  `ctime` int(11) NOT NULL,
  `utime` int(11) NOT NULL,
  PRIMARY KEY (`int`),
  UNIQUE KEY `tag_nq` (`tag`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (3,'qwe.adsf',1579162981,1579162981),(4,'jia',1579163214,1579163214),(5,'ddd',1579165337,1579165337),(6,'666',1579165602,1579165602),(7,'3432',1579165888,1579165888),(8,'dssf',1579508239,1579508239),(9,'高山',1581428323,1581428323),(10,'建站经验',1582343437,1582343437),(11,'laravelnginxproxyvue',1582343501,1582343501),(12,'vue',1582343562,1582343562),(13,'blog',1585376675,1585376675);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-28 18:01:19
