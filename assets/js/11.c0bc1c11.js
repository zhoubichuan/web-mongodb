(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{358:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基础-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础-2"}},[t._v("#")]),t._v(" 基础 2")]),t._v(" "),s("h2",{attrs:{id:"_1-通过配置项启动数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过配置项启动数据库"}},[t._v("#")]),t._v(" 1. 通过配置项启动数据库")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--dbpath")]),t._v(" "),s("td",[t._v("指定数据库文件的目录")])]),t._v(" "),s("tr",[s("td",[t._v("--port")]),t._v(" "),s("td",[t._v("端口 默认是 27017 28017")])]),t._v(" "),s("tr",[s("td",[t._v("--fork")]),t._v(" "),s("td",[t._v("以后台守护的方式进行启动")])]),t._v(" "),s("tr",[s("td",[t._v("--logpath")]),t._v(" "),s("td",[t._v("指定日志文件输出路径")])]),t._v(" "),s("tr",[s("td",[t._v("--config")]),t._v(" "),s("td",[t._v("指定一个配置文件")])]),t._v(" "),s("tr",[s("td",[t._v("--auth")]),t._v(" "),s("td",[t._v("以安全方式启动数据库，默认不验证")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-1-mongo-conf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-mongo-conf"}},[t._v("#")]),t._v(" 1.1 mongo.conf")]),t._v(" "),s("ul",[s("li",[t._v("dbpath=E:\\mongo\\data")]),t._v(" "),s("li",[t._v("logpath=E:\\mongo\\log")]),t._v(" "),s("li",[t._v("port=50000")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-启动服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-启动服务器"}},[t._v("#")]),t._v(" 1.2 启动服务器")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mongod "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--config")]),t._v(" mongo.conf\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-3-启动客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-启动客户端"}},[t._v("#")]),t._v(" 1.3 启动客户端")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mongo "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-导入导出数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入导出数据"}},[t._v("#")]),t._v(" 2. 导入导出数据")]),t._v(" "),s("p",[t._v("这命令是保存成了文件格式")]),t._v(" "),s("ul",[s("li",[t._v("mongoimport 导出数据")]),t._v(" "),s("li",[t._v("mongoexport 导入数据")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-h [ --host ]")]),t._v(" "),s("td",[t._v("连接的数据库")])]),t._v(" "),s("tr",[s("td",[t._v("--port")]),t._v(" "),s("td",[t._v("端口号")])]),t._v(" "),s("tr",[s("td",[t._v("-u")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("-p")]),t._v(" "),s("td",[t._v("密码")])]),t._v(" "),s("tr",[s("td",[t._v("-d")]),t._v(" "),s("td",[t._v("导出的数据库")])]),t._v(" "),s("tr",[s("td",[t._v("-d")]),t._v(" "),s("td",[t._v("导出的数据库")])]),t._v(" "),s("tr",[s("td",[t._v("-c")]),t._v(" "),s("td",[t._v("指定导出的集合")])]),t._v(" "),s("tr",[s("td",[t._v("-o")]),t._v(" "),s("td",[t._v("导出的文件存储路径")])]),t._v(" "),s("tr",[s("td",[t._v("-q")]),t._v(" "),s("td",[t._v("进行过滤")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-1-准备数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-准备数据"}},[t._v("#")]),t._v(" 2.1 准备数据")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" school"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvar students "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("var i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("{\nstudents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{name:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zfpx'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age:i}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n}\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("students"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("students"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("students"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"_2-2-备份记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-备份记录"}},[t._v("#")]),t._v(" 2.2 备份记录")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("mongoexport "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("h "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--port 50000 -d school -c students -o stu.bak")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-3-删除记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-删除记录"}},[t._v("#")]),t._v(" 2.3 删除记录")]),t._v(" "),s("blockquote",[s("p",[t._v('db.students.remove({});\nWriteResult({ "nRemoved" : 10 })')])]),t._v(" "),s("h3",{attrs:{id:"_2-4-导入记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-导入记录"}},[t._v("#")]),t._v(" 2.4 导入记录")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("mongoimport "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--port 50000 --db school --collection students --file")]),t._v("\nstu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bak\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_3-备份与恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-备份与恢复"}},[t._v("#")]),t._v(" 3. 备份与恢复")]),t._v(" "),s("h3",{attrs:{id:"_3-1-mongodump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mongodump"}},[t._v("#")]),t._v(" 3.1 mongodump")]),t._v(" "),s("ul",[s("li",[t._v("在 Mongodb 中我们使用 mongodump 命令来备份 MongoDB 数据。该命令可以导出所有数据到指定目录中。")]),t._v(" "),s("li",[t._v("mongodump -h dbhost -d dbname -o dbdirectory")]),t._v(" "),s("li",[t._v("-h MongDB 所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017")]),t._v(" "),s("li",[t._v("-d 需要备份的数据库实例，例如：test")]),t._v(" "),s("li",[t._v("-o 备份的数据存放位置")]),t._v(" "),s("li",[t._v("mongodump -d school -o data.dmp")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-mongorestore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-mongorestore"}},[t._v("#")]),t._v(" 3.2 mongorestore")]),t._v(" "),s("p",[t._v("mongodb 使用 mongorestore 命令来恢复备份的数据。")]),t._v(" "),s("ul",[s("li",[t._v("--host MongoDB 所在服务器地址")]),t._v(" "),s("li",[t._v("--db -d 需要恢复的数据库实例")]),t._v(" "),s("li",[t._v("最后的一个参数，设置备份数据所在位置")]),t._v(" "),s("li",[t._v("mongorestore data.dmp")]),t._v(" "),s("li",[t._v("mongorestore -d school data.bmp/school")]),t._v(" "),s("li",[t._v("Mongodump 可以 backup 整个数据库，而 mongoexport 要对每个 collection 进行操作，最主要的区别也是选择的标准是 mongoexport 输出的 JSON 比 Mongodump 的 BSON 可读性更高，进而可以直接对 JSON 文件进行操作然后还原数据（BSON 转换 JSON 存在潜在兼容问题）。")])]),t._v(" "),s("h2",{attrs:{id:"_4-直接拷贝数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-直接拷贝数据"}},[t._v("#")]),t._v(" 4. 直接拷贝数据")]),t._v(" "),s("h2",{attrs:{id:"_5-锁定和解锁数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-锁定和解锁数据库"}},[t._v("#")]),t._v(" 5. 锁定和解锁数据库")]),t._v(" "),s("p",[t._v("为了数据的完整性和一致性，导出前要先锁定写入，导出后再解锁。")]),t._v(" "),s("blockquote",[s("p",[t._v("use admin;\nswitched to db admin\ndb.runCommand({fsync:1,lock:1});\n{")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    "info" : "now locked against writes, use db.fsyncUnlock() to unlock",\n    "seeAlso" : "http://dochub.mongodb.org/core/fsynccommand",\n    "ok" : 1\n')])])]),s("p",[t._v("}")]),t._v(" "),s("blockquote",[s("p",[t._v('db.fsyncUnlock();\n{ "ok" : 1, "info" : "unlock completed" }')])]),t._v(" "),s("h2",{attrs:{id:"_6-安全措施"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-安全措施"}},[t._v("#")]),t._v(" 6. 安全措施")]),t._v(" "),s("ul",[s("li",[t._v("物理隔离")]),t._v(" "),s("li",[t._v("网络隔离")]),t._v(" "),s("li",[t._v("防火墙(IP/IP 段/白名单/黑名单)")]),t._v(" "),s("li",[t._v("用户名和密码验证")])]),t._v(" "),s("h3",{attrs:{id:"_6-1-用户管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-用户管理"}},[t._v("#")]),t._v(" 6.1 用户管理")]),t._v(" "),s("h4",{attrs:{id:"_6-1-1-查看角色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-查看角色"}},[t._v("#")]),t._v(" 6.1.1 查看角色")]),t._v(" "),s("p",[t._v("show roles;\n内置角色")]),t._v(" "),s("p",[t._v("数据库用户角色：read、readWrite；\n数据库管理角色：dbAdmin、dbOwner、userAdmin;\n集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；\n备份恢复角色：backup、restore；\n所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase\n超级用户角色：root\n内部角色：__system")]),t._v(" "),s("h4",{attrs:{id:"_6-1-2-老的创建用户的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-老的创建用户的方法"}},[t._v("#")]),t._v(" 6.1.2 老的创建用户的方法")]),t._v(" "),s("blockquote",[s("p",[t._v("db.addUser('zfpx','123456');\nWARNING: The 'addUser' shell helper is DEPRECATED. Please use 'createUser' inste\nad\nSuccessfully added user: { \"user\" : \"zfpx\", \"roles\" : [ \"root\" ] }\nshow roles;")])]),t._v(" "),s("h4",{attrs:{id:"_6-1-3-新的创建用户的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-新的创建用户的方法"}},[t._v("#")]),t._v(" 6.1.3 新的创建用户的方法")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("{\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zfpx2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\npwd:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nroles:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n{\nrole:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readWrite"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ndb:"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"school"')]),t._v("\n}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("blockquote",[s("p",[t._v("db.createUser({user:'zfpx2',pwd:'123456',roles:[{role:'read',db:'school'}]});\nSuccessfully added user: {")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    "user" : "zfpx2",\n    "roles" : [\n            {\n                    "role" : "read",\n                    "db" : "school"\n            }\n    ]\n')])])]),s("p",[t._v("}")]),t._v(" "),s("h4",{attrs:{id:"_6-1-4-查看用户的权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-4-查看用户的权限"}},[t._v("#")]),t._v(" 6.1.4 查看用户的权限")]),t._v(" "),s("blockquote",[s("p",[t._v("db.runCommand({usersInfo:'zfpx2',showPrivileges:true});\n{")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    "users" : [\n            {\n                    "_id" : "admin.zfpx2",\n                    "user" : "zfpx2",\n                    "db" : "admin",\n                    "roles" : [\n                            {\n                                    "role" : "read",\n                                    "db" : "school"\n                            }\n            ]\n')])])]),s("p",[t._v("}")]),t._v(" "),s("h4",{attrs:{id:"_6-1-5-服务器启动权限认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-5-服务器启动权限认证"}},[t._v("#")]),t._v(" 6.1.5 服务器启动权限认证")]),t._v(" "),s("p",[t._v("dbpath=E:\\mongo\\data\nlogpath=E:\\mongo\\log\nport=50000\nauth=true")]),t._v(" "),s("h4",{attrs:{id:"_6-1-6-用户登录和修改密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-6-用户登录和修改密码"}},[t._v("#")]),t._v(" 6.1.6 用户登录和修改密码")]),t._v(" "),s("blockquote",[s("p",[t._v("use admin;\nuse admin;\nswitched to db admin\ndb.auth('zfpx','123456')\n1\ndb.changeUserPassword('zfpx','123');\ndb.auth('zfpx','123')\n1")])]),t._v(" "),s("h4",{attrs:{id:"_6-1-7-修改个人信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-7-修改个人信息"}},[t._v("#")]),t._v(" 6.1.7 修改个人信息")]),t._v(" "),s("p",[t._v("db.runCommand({updateUser:'zfpx',pwd:'123', customData:{\nname:'珠峰培训',\nemail:'zfpx@126.com',\nage:18,\n}});")]),t._v(" "),s("blockquote",[s("p",[t._v("db.runCommand({usersInfo:'zfpx',showPrivileges:true})\n用户的操作都需要在 admin 数据库下面进行操作\n如果在某个数据库下面执行操作，那么只对当前数据库生效\naddUser 已经废弃，默认会创建 root 用户，不安全，不再建议使用")])]),t._v(" "),s("h2",{attrs:{id:"_7-数据库高级命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据库高级命令"}},[t._v("#")]),t._v(" 7. 数据库高级命令")]),t._v(" "),s("h3",{attrs:{id:"_7-1-准备数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-准备数据"}},[t._v("#")]),t._v(" 7.1 准备数据")]),t._v(" "),s("p",[t._v("var students = [\n{name:'zfpx1',home:'北京',age:1},\n{name:'zfpx2',home:'北京',age:2},\n{name:'zfpx3',home:'北京',age:3},\n{name:'zfpx4',home:'广东',age:1},\n{name:'zfpx5',home:'广东',age:2},\n{name:'zfpx6',home:'广东',age:3}\n]\ndb.students.insert(students);")]),t._v(" "),s("h3",{attrs:{id:"_7-2-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-count"}},[t._v("#")]),t._v(" 7.2 count")]),t._v(" "),s("p",[t._v("查看记录数")]),t._v(" "),s("p",[t._v("db.students.find().count();")]),t._v(" "),s("h3",{attrs:{id:"_7-2-查找不重复的值-distinct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-查找不重复的值-distinct"}},[t._v("#")]),t._v(" 7.2 查找不重复的值 distinct")]),t._v(" "),s("p",[t._v("db.runCommand({distinct:'students',key:'home'}).values;")]),t._v(" "),s("p",[t._v('[ "北京", "广东" ]')]),t._v(" "),s("h3",{attrs:{id:"_7-3-group-分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-group-分组"}},[t._v("#")]),t._v(" 7.3 group 分组")]),t._v(" "),s("p",[t._v("db.runCommand({\ngroup:{\nns:集合名称，\nkey:分组的键,\ninitial:初始值,\n$reduce:分解器\ncondition:条件,\nfinalize:完成时的处理器\n}\n});")]),t._v(" "),s("h4",{attrs:{id:"_7-3-1-按城市分组-求每个城市里符合条件的人的年龄总和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-1-按城市分组-求每个城市里符合条件的人的年龄总和"}},[t._v("#")]),t._v(" 7.3.1 按城市分组，求每个城市里符合条件的人的年龄总和")]),t._v(" "),s("p",[t._v("db.runCommand({\ngroup:{\nns:'students',\nkey:{home:true},\ninitial:{total:0},\n$reduce:function(doc,result){\nresult.total += doc.age;"),s("br"),t._v("\n},\ncondition:{age:{$gt:1}},\nfinalize:function(result){\nresult.desc = '本城市的总年龄为'+result.total;\n}\n}\n});")]),t._v(" "),s("h3",{attrs:{id:"_7-4-删除集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-删除集合"}},[t._v("#")]),t._v(" 7.4 删除集合")]),t._v(" "),s("p",[t._v("db.runCommand({drop:'students'});")]),t._v(" "),s("h3",{attrs:{id:"_7-5-runcommand-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-runcommand-常用命令"}},[t._v("#")]),t._v(" 7.5 runCommand 常用命令")]),t._v(" "),s("p",[t._v('db.runCommand({buildInfo:1});\ndb.runCommand({getLastError:"students"});\ndb.persons.insert({_id:1,name:1});\ndb.persons.insert({_id:1,name:1});\ndb.runCommand({getLastError:"students"});')]),t._v(" "),s("h2",{attrs:{id:"_8-什么固定集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-什么固定集合"}},[t._v("#")]),t._v(" 8. 什么固定集合")]),t._v(" "),s("p",[t._v("MongoDB 固定集合（Capped Collections）是性能出色且有着固定大小的集合，对于大小固定，我们可以想象其就像一个环形队列，当集合空间用完后，再插入的元素就会覆盖最初始的头部的元素！ firstinfirstout")]),t._v(" "),s("h3",{attrs:{id:"_8-1-特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-特性"}},[t._v("#")]),t._v(" 8.1 特性")]),t._v(" "),s("p",[t._v("没有索引\n插入和查询速度速度非常快 不需要重新分配空间\n特别适合存储日志")]),t._v(" "),s("h3",{attrs:{id:"_8-2-创建固定集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-创建固定集合"}},[t._v("#")]),t._v(" 8.2 创建固定集合")]),t._v(" "),s("p",[t._v("我们通过 createCollection 来创建一个固定集合，且 capped 选项设置为 true：\n还可以指定文档个数,加上 max:1000 属性：\n判断集合是否为固定集合: db.logs.isCapped()\nsize 是整个集合空间大小，单位为【KB】\nmax 是集合文档个数上线，单位是【个】\n如果空间大小到达上限，则插入下一个文档时，会覆盖第一个文档；如果文档个数到达上限，同样插入下一个文档时，会覆盖第一个文档。两个参数上限判断取的是【与】的逻辑。\ncapped 封顶的\ndb.createCollection('logs',{size:50,max:5,capped:true});")]),t._v(" "),s("h3",{attrs:{id:"_8-3-非固定集合转为固定集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-非固定集合转为固定集合"}},[t._v("#")]),t._v(" 8.3 非固定集合转为固定集合")]),t._v(" "),s("p",[t._v('db.runCommand({convertToCapped:"logs",size:5});')]),t._v(" "),s("h2",{attrs:{id:"_9-gridfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-gridfs"}},[t._v("#")]),t._v(" 9. gridfs")]),t._v(" "),s("p",[t._v("gridfs 是 mongodb 自带的文件系统，使用二进制存储文件。\nmongodb 可以以 BSON 格式保存二进制对象。\n但是 BSON 对象的体积不能超过 4M。所以 mongodb 提供了 mongofiles。它可以把一个大文件透明地分割成小文件（256K），从而保存大体积的数据。\nGridFS 用于存储和恢复那些超过 16M（BSON 文件限制）的文件(如：图片、音频、视频等)。\nGridFS 用两个集合来存储一个文件：fs.files 与 fs.chunks。\n每个文件的实际内容被存在 chunks(二进制数据)中,和文件有关的 meta 数据(filename,content_type,还有用户自定义的属性)将会被存在 files 集合中。")]),t._v(" "),s("h3",{attrs:{id:"_9-1-上传一个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-上传一个文件"}},[t._v("#")]),t._v(" 9.1 上传一个文件")]),t._v(" "),s("p",[t._v("-d 数据库的名称\n-l 源文件的位置\nput 指定文件名\nmongofiles -d myfiles put test.txt")]),t._v(" "),s("h3",{attrs:{id:"_9-2-获取并下载文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-获取并下载文件"}},[t._v("#")]),t._v(" 9.2 获取并下载文件")]),t._v(" "),s("p",[t._v("mongofiles -d myfiles get 'test.txt'")]),t._v(" "),s("h3",{attrs:{id:"_9-3-查看所有文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-查看所有文件"}},[t._v("#")]),t._v(" 9.3 查看所有文件")]),t._v(" "),s("p",[t._v("mongofiles -d myfiles list")]),t._v(" "),s("blockquote",[s("p",[t._v("db.fs.files.find()\ndb.fs.chunks.find({files_id:ObjectId('')})")])]),t._v(" "),s("h3",{attrs:{id:"_9-4-删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-删除文件"}},[t._v("#")]),t._v(" 9.4 删除文件")]),t._v(" "),s("p",[t._v('mongofiles -d myfiles delete "test.txt"')]),t._v(" "),s("h3",{attrs:{id:"_9-5-eval-服务器端脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-eval-服务器端脚本"}},[t._v("#")]),t._v(" 9.5 eval 服务器端脚本")]),t._v(" "),s("p",[t._v('执行 JS 语句\n定义 JS 全局变量\n定义函数\nStored JavaScript\ndb.eval("1+1");\ndb.eval("return \'hello\'");\ndb.system.js.insert({_id:"x",value:1});\ndb.eval("return x");\ndb.system.js.insert({_id:"say",value:function(){return \'hello\'}});\ndb.eval("say()");')])])}),[],!1,null,null,null);s.default=e.exports}}]);