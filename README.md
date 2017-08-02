## 一个简单的爬虫示例

该示例通过命令行的方式来运行nodejs爬虫代码，抓取网站上的数据，并存储到mysql数据库里。

运行方式：
1. 需要在本地有安装`nodejs`(我使用的是7.7.3，需要支持async/await的版本)及`mysql`
2. mysql创建`my_db`数据库，并运行`sql/tables.sql`里r 语句，创建数据表
3. 配置`config.js`文件
4. `npm install` 下载依赖包
5. 运行`node index test`,爬虫就运行了，在数据库里可以看到表创建的表里出现了抓取到的数据。