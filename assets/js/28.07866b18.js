(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{444:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"导入导出数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入导出数据"}},[s._v("#")]),s._v(" 导入导出数据")]),s._v(" "),t("h2",{attrs:{id:"_2-导入导出数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入导出数据"}},[s._v("#")]),s._v(" 2. 导入导出数据")]),s._v(" "),t("p",[s._v("这命令是保存成了文件格式")]),s._v(" "),t("ul",[t("li",[s._v("mongo import 导出数据")]),s._v(" "),t("li",[s._v("mongo export 导入数据")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-h [ --host ]")]),s._v(" "),t("td",[s._v("连接的数据库")])]),s._v(" "),t("tr",[t("td",[s._v("--port")]),s._v(" "),t("td",[s._v("端口号")])]),s._v(" "),t("tr",[t("td",[s._v("-u")]),s._v(" "),t("td",[s._v("用户名")])]),s._v(" "),t("tr",[t("td",[s._v("-p")]),s._v(" "),t("td",[s._v("密码")])]),s._v(" "),t("tr",[t("td",[s._v("-d")]),s._v(" "),t("td",[s._v("导出的数据库")])]),s._v(" "),t("tr",[t("td",[s._v("-d")]),s._v(" "),t("td",[s._v("导出的数据库")])]),s._v(" "),t("tr",[t("td",[s._v("-c")]),s._v(" "),t("td",[s._v("指定导出的集合")])]),s._v(" "),t("tr",[t("td",[s._v("-o")]),s._v(" "),t("td",[s._v("导出的文件存储路径")])]),s._v(" "),t("tr",[t("td",[s._v("-q")]),s._v(" "),t("td",[s._v("进行过滤")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-1-准备数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-准备数据"}},[s._v("#")]),s._v(" 2.1 准备数据")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("use school"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" students "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nstudents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小明'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ndb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("insert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_2-2-备份记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-备份记录"}},[s._v("#")]),s._v(" 2.2 备份记录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mongo "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" school "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" students "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" stu.bak\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-3-删除记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-删除记录"}},[s._v("#")]),s._v(" 2.3 删除记录")]),s._v(" "),t("blockquote",[t("p",[s._v('db.students.remove({});\nWriteResult({ "nRemoved" : 10 })')])]),s._v(" "),t("h3",{attrs:{id:"_2-4-导入记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-导入记录"}},[s._v("#")]),s._v(" 2.4 导入记录")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mongoimport "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--port 50000 --db school --collection students --file")]),s._v("\nstu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bak\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"_3-备份与恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-备份与恢复"}},[s._v("#")]),s._v(" 3. 备份与恢复")]),s._v(" "),t("h3",{attrs:{id:"_3-1-mongodump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mongodump"}},[s._v("#")]),s._v(" 3.1 mongodump")]),s._v(" "),t("ul",[t("li",[s._v("在 Mongodb 中我们使用 mongodump 命令来备份 MongoDB 数据。该命令可以导出所有数据到指定目录中。")]),s._v(" "),t("li",[s._v("mongodump -h dbhost -d dbname -o dbdirectory")]),s._v(" "),t("li",[s._v("-h MongDB 所在服务器地址，例如：127.0.0.1，当然也可以指定端口号：127.0.0.1:27017")]),s._v(" "),t("li",[s._v("-d 需要备份的数据库实例，例如：test")]),s._v(" "),t("li",[s._v("-o 备份的数据存放位置")]),s._v(" "),t("li",[s._v("mongodump -d school -o data.dmp")])]),s._v(" "),t("h3",{attrs:{id:"_3-2-mongorestore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-mongorestore"}},[s._v("#")]),s._v(" 3.2 mongorestore")]),s._v(" "),t("p",[s._v("mongodb 使用 mongorestore 命令来恢复备份的数据。")]),s._v(" "),t("ul",[t("li",[s._v("--host MongoDB 所在服务器地址")]),s._v(" "),t("li",[s._v("--db -d 需要恢复的数据库实例")]),s._v(" "),t("li",[s._v("最后的一个参数，设置备份数据所在位置")]),s._v(" "),t("li",[s._v("mongorestore data.dmp")]),s._v(" "),t("li",[s._v("mongorestore -d school data.bmp/school")]),s._v(" "),t("li",[s._v("Mongodump 可以 backup 整个数据库，而 mongoexport 要对每个 collection 进行操作，最主要的区别也是选择的标准是 mongoexport 输出的 JSON 比 Mongodump 的 BSON 可读性更高，进而可以直接对 JSON 文件进行操作然后还原数据（BSON 转换 JSON 存在潜在兼容问题）。")])]),s._v(" "),t("h2",{attrs:{id:"_4-直接拷贝数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-直接拷贝数据"}},[s._v("#")]),s._v(" 4. 直接拷贝数据")]),s._v(" "),t("h2",{attrs:{id:"_5-锁定和解锁数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-锁定和解锁数据库"}},[s._v("#")]),s._v(" 5. 锁定和解锁数据库")]),s._v(" "),t("p",[s._v("为了数据的完整性和一致性，导出前要先锁定写入，导出后再解锁。")]),s._v(" "),t("blockquote",[t("p",[s._v("use admin;\nswitched to db admin\ndb.runCommand({fsync:1,lock:1});\n{")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('    "info" : "now locked against writes, use db.fsyncUnlock() to unlock",\n    "seeAlso" : "http://dochub.mongodb.org/core/fsynccommand",\n    "ok" : 1\n')])])]),t("p",[s._v("}")]),s._v(" "),t("blockquote",[t("p",[s._v('db.fsyncUnlock();\n{ "ok" : 1, "info" : "unlock completed" }')])]),s._v(" "),t("h2",{attrs:{id:"_6-安全措施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-安全措施"}},[s._v("#")]),s._v(" 6. 安全措施")]),s._v(" "),t("ul",[t("li",[s._v("物理隔离")]),s._v(" "),t("li",[s._v("网络隔离")]),s._v(" "),t("li",[s._v("防火墙(IP/IP 段/白名单/黑名单)")]),s._v(" "),t("li",[s._v("用户名和密码验证")])]),s._v(" "),t("h3",{attrs:{id:"_6-1-用户管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-用户管理"}},[s._v("#")]),s._v(" 6.1 用户管理")]),s._v(" "),t("h4",{attrs:{id:"_6-1-1-查看角色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-查看角色"}},[s._v("#")]),s._v(" 6.1.1 查看角色")]),s._v(" "),t("p",[s._v("show roles;\n内置角色")]),s._v(" "),t("p",[s._v("数据库用户角色：read、readWrite；\n数据库管理角色：dbAdmin、dbOwner、userAdmin;\n集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；\n备份恢复角色：backup、restore；\n所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase\n超级用户角色：root\n内部角色：__system")]),s._v(" "),t("h4",{attrs:{id:"_6-1-2-老的创建用户的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-老的创建用户的方法"}},[s._v("#")]),s._v(" 6.1.2 老的创建用户的方法")]),s._v(" "),t("blockquote",[t("p",[s._v("db.addUser('小明','123456');\nWARNING: The 'addUser' shell helper is DEPRECATED. Please use 'createUser' inste\nad\nSuccessfully added user: { \"user\" : \"小明\", \"roles\" : [ \"root\" ] }\nshow roles;")])]),s._v(" "),t("h4",{attrs:{id:"_6-1-3-新的创建用户的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-新的创建用户的方法"}},[s._v("#")]),s._v(" 6.1.3 新的创建用户的方法")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        user:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小明2"')]),s._v(",\n        pwd:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v(",\n        roles:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                role:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(",\n                db:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"school"')]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'read'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("blockquote",[t("p",[s._v("db.createUser({user:'小明 2',pwd:'123456',roles:[{role:'read',db:'school'}]});\nSuccessfully added user: {")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('    "user" : "小明2",\n    "roles" : [\n            {\n                    "role" : "read",\n                    "db" : "school"\n            }\n    ]\n')])])]),t("p",[s._v("}")]),s._v(" "),t("h4",{attrs:{id:"_6-1-4-查看用户的权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-4-查看用户的权限"}},[s._v("#")]),s._v(" 6.1.4 查看用户的权限")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.runCommand"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("usersInfo:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小明 2'")]),s._v(",showPrivileges:true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"users"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_id"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin.小明2"')]),s._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小明2"')]),s._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"role"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),s._v(",\n                                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"school"')]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"_6-1-5-服务器启动权限认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-5-服务器启动权限认证"}},[s._v("#")]),s._v(" 6.1.5 服务器启动权限认证")]),s._v(" "),t("p",[s._v("dbpath=E:\\mongo\\data\nlogpath=E:\\mongo\\log\nport=50000\nauth=true")]),s._v(" "),t("h4",{attrs:{id:"_6-1-6-用户登录和修改密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-6-用户登录和修改密码"}},[s._v("#")]),s._v(" 6.1.6 用户登录和修改密码")]),s._v(" "),t("blockquote",[t("p",[s._v("use admin;\nuse admin;\nswitched to db admin\ndb.auth('小明','123456')\n1\ndb.changeUserPassword('小明','123');\ndb.auth('小明','123')\n1")])]),s._v(" "),t("h4",{attrs:{id:"_6-1-7-修改个人信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-7-修改个人信息"}},[s._v("#")]),s._v(" 6.1.7 修改个人信息")]),s._v(" "),t("p",[s._v("db.runCommand({updateUser:'小明',pwd:'123', customData:{\nname:'珠峰培训',\nemail:'小明@126.com',\nage:18,\n}});")]),s._v(" "),t("blockquote",[t("p",[s._v("db.runCommand({usersInfo:'小明',showPrivileges:true})\n用户的操作都需要在 admin 数据库下面进行操作\n如果在某个数据库下面执行操作，那么只对当前数据库生效\naddUser 已经废弃，默认会创建 root 用户，不安全，不再建议使用")])]),s._v(" "),t("h2",{attrs:{id:"_7-数据库高级命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据库高级命令"}},[s._v("#")]),s._v(" 7. 数据库高级命令")]),s._v(" "),t("h3",{attrs:{id:"_7-1-准备数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-准备数据"}},[s._v("#")]),s._v(" 7.1 准备数据")]),s._v(" "),t("p",[s._v("var students = [\n{name:'小明 1',home:'北京',age:1},\n{name:'小明 2',home:'北京',age:2},\n{name:'小明 3',home:'北京',age:3},\n{name:'小明 4',home:'广东',age:1},\n{name:'小明 5',home:'广东',age:2},\n{name:'小明 6',home:'广东',age:3}\n]\ndb.students.insert(students);")]),s._v(" "),t("h3",{attrs:{id:"_7-2-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-count"}},[s._v("#")]),s._v(" 7.2 count")]),s._v(" "),t("p",[s._v("查看记录数")]),s._v(" "),t("p",[s._v("db.students.find().count();")]),s._v(" "),t("h3",{attrs:{id:"_7-2-查找不重复的值-distinct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-查找不重复的值-distinct"}},[s._v("#")]),s._v(" 7.2 查找不重复的值 distinct")]),s._v(" "),t("p",[s._v("db.runCommand({distinct:'students',key:'home'}).values;")]),s._v(" "),t("p",[s._v('[ "北京", "广东" ]')]),s._v(" "),t("h3",{attrs:{id:"_7-3-group-分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-group-分组"}},[s._v("#")]),s._v(" 7.3 group 分组")]),s._v(" "),t("p",[s._v("db.runCommand({\ngroup:{\nns:集合名称，\nkey:分组的键,\ninitial:初始值,\n$reduce:分解器\ncondition:条件,\nfinalize:完成时的处理器\n}\n});")]),s._v(" "),t("h4",{attrs:{id:"_7-3-1-按城市分组-求每个城市里符合条件的人的年龄总和"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-1-按城市分组-求每个城市里符合条件的人的年龄总和"}},[s._v("#")]),s._v(" 7.3.1 按城市分组，求每个城市里符合条件的人的年龄总和")]),s._v(" "),t("p",[s._v("db.runCommand({\ngroup:{\nns:'students',\nkey:{home:true},\ninitial:{total:0},\n$reduce:function(doc,result){\nresult.total += doc.age;\n},\ncondition:{age:{$gt:1}},\nfinalize:function(result){\nresult.desc = '本城市的总年龄为'+result.total;\n}\n}\n});")]),s._v(" "),t("h3",{attrs:{id:"_7-4-删除集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-删除集合"}},[s._v("#")]),s._v(" 7.4 删除集合")]),s._v(" "),t("p",[s._v("db.runCommand({drop:'students'});")]),s._v(" "),t("h3",{attrs:{id:"_7-5-runcommand-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-runcommand-常用命令"}},[s._v("#")]),s._v(" 7.5 runCommand 常用命令")]),s._v(" "),t("p",[s._v('db.runCommand({buildInfo:1});\ndb.runCommand({getLastError:"students"});\ndb.persons.insert({_id:1,name:1});\ndb.persons.insert({_id:1,name:1});\ndb.runCommand({getLastError:"students"});')]),s._v(" "),t("h2",{attrs:{id:"_8-什么固定集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-什么固定集合"}},[s._v("#")]),s._v(" 8. 什么固定集合")]),s._v(" "),t("p",[s._v("MongoDB 固定集合（Capped Collections）是性能出色且有着固定大小的集合，对于大小固定，我们可以想象其就像一个环形队列，当集合空间用完后，再插入的元素就会覆盖最初始的头部的元素！ firstinfirstout")]),s._v(" "),t("h3",{attrs:{id:"_8-1-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-特性"}},[s._v("#")]),s._v(" 8.1 特性")]),s._v(" "),t("p",[s._v("没有索引\n插入和查询速度速度非常快 不需要重新分配空间\n特别适合存储日志")]),s._v(" "),t("h3",{attrs:{id:"_8-2-创建固定集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-创建固定集合"}},[s._v("#")]),s._v(" 8.2 创建固定集合")]),s._v(" "),t("p",[s._v("我们通过 createCollection 来创建一个固定集合，且 capped 选项设置为 true：\n还可以指定文档个数,加上 max:1000 属性：\n判断集合是否为固定集合: db.logs.isCapped()\nsize 是整个集合空间大小，单位为【KB】\nmax 是集合文档个数上线，单位是【个】\n如果空间大小到达上限，则插入下一个文档时，会覆盖第一个文档；如果文档个数到达上限，同样插入下一个文档时，会覆盖第一个文档。两个参数上限判断取的是【与】的逻辑。\ncapped 封顶的\ndb.createCollection('logs',{size:50,max:5,capped:true});")]),s._v(" "),t("h3",{attrs:{id:"_8-3-非固定集合转为固定集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-非固定集合转为固定集合"}},[s._v("#")]),s._v(" 8.3 非固定集合转为固定集合")]),s._v(" "),t("p",[s._v('db.runCommand({convertToCapped:"logs",size:5});')]),s._v(" "),t("h2",{attrs:{id:"_9-gridfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-gridfs"}},[s._v("#")]),s._v(" 9. gridfs")]),s._v(" "),t("p",[s._v("gridfs 是 mongodb 自带的文件系统，使用二进制存储文件。\nmongodb 可以以 BSON 格式保存二进制对象。\n但是 BSON 对象的体积不能超过 4M。所以 mongodb 提供了 mongofiles。它可以把一个大文件透明地分割成小文件（256K），从而保存大体积的数据。\nGridFS 用于存储和恢复那些超过 16M（BSON 文件限制）的文件(如：图片、音频、视频等)。\nGridFS 用两个集合来存储一个文件：fs.files 与 fs.chunks。\n每个文件的实际内容被存在 chunks(二进制数据)中,和文件有关的 meta 数据(filename,content_type,还有用户自定义的属性)将会被存在 files 集合中。")]),s._v(" "),t("h3",{attrs:{id:"_9-1-上传一个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-上传一个文件"}},[s._v("#")]),s._v(" 9.1 上传一个文件")]),s._v(" "),t("p",[s._v("-d 数据库的名称\n-l 源文件的位置\nput 指定文件名\nmongofiles -d myfiles put test.txt")]),s._v(" "),t("h3",{attrs:{id:"_9-2-获取并下载文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-获取并下载文件"}},[s._v("#")]),s._v(" 9.2 获取并下载文件")]),s._v(" "),t("p",[s._v("mongofiles -d myfiles get 'test.txt'")]),s._v(" "),t("h3",{attrs:{id:"_9-3-查看所有文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-查看所有文件"}},[s._v("#")]),s._v(" 9.3 查看所有文件")]),s._v(" "),t("p",[s._v("mongofiles -d myfiles list")]),s._v(" "),t("blockquote",[t("p",[s._v("db.fs.files.find()\ndb.fs.chunks.find({files_id:ObjectId('')})")])]),s._v(" "),t("h3",{attrs:{id:"_9-4-删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-删除文件"}},[s._v("#")]),s._v(" 9.4 删除文件")]),s._v(" "),t("p",[s._v('mongofiles -d myfiles delete "test.txt"')]),s._v(" "),t("h3",{attrs:{id:"_9-5-eval-服务器端脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-eval-服务器端脚本"}},[s._v("#")]),s._v(" 9.5 eval 服务器端脚本")]),s._v(" "),t("p",[s._v('执行 JS 语句\n定义 JS 全局变量\n定义函数\nStored JavaScript\ndb.eval("1+1");\ndb.eval("return \'hello\'");\ndb.system.js.insert({_id:"x",value:1});\ndb.eval("return x");\ndb.system.js.insert({_id:"say",value:function(){return \'hello\'}});\ndb.eval("say()");')])])}),[],!1,null,null,null);t.default=e.exports}}]);