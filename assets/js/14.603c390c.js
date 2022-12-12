(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{361:function(a,t,s){"use strict";s.r(t);var r=s(6),o=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"基础-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础-4"}},[a._v("#")]),a._v(" 基础 4")]),a._v(" "),t("h2",{attrs:{id:"_1-主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-主从复制"}},[a._v("#")]),a._v(" 1. 主从复制")]),a._v(" "),t("p",[a._v("主从复制是一个简单的数据库同步备份的集群技术")]),a._v(" "),t("p",[a._v("在数据库集群中要明确知道谁是主服务器，主服务器只有一台\n从服务器要知道自己的数据源也就是知道自己的主服务器是谁\n--master 用来确定主服务器，--slave 和--source 来控制从服务器\nmasterslave")]),a._v(" "),t("h3",{attrs:{id:"_1-1-主服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-主服务器"}},[a._v("#")]),a._v(" 1.1 主服务器")]),a._v(" "),t("p",[a._v("master.conf")]),a._v(" "),t("p",[a._v("dbpath=E:\\ms\\master\nport=1000\nmaster=true\nmaster.bat")]),a._v(" "),t("p",[a._v("mongod --config master.conf")]),a._v(" "),t("h3",{attrs:{id:"_1-2-从服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-从服务器"}},[a._v("#")]),a._v(" 1.2 从服务器")]),a._v(" "),t("p",[a._v("slave.conf")]),a._v(" "),t("p",[a._v("dbpath=E:\\p\\slave\nport=1001\nslave=true\nsource=127.0.0.1:1000\nslave.bat")]),a._v(" "),t("p",[a._v("mongod --config slave.conf\nrs.slaveOk();")]),a._v(" "),t("h3",{attrs:{id:"_1-3-主从复制的其它设置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-主从复制的其它设置项"}},[a._v("#")]),a._v(" 1.3 主从复制的其它设置项")]),a._v(" "),t("p",[a._v("-only 从节点-> 指定复制某个数据库默认是复制全部数据库\n-slavedelay 从节点-> 设置主数据库同步数据的延迟(单位是秒)\n-fastsync 从节点-> 以主数据库的节点快照为节点启动从数据库\n-autoresync 从节点->如果不同步则重新同步数据库\n-oplogSize 主节点->设置 oplog 的大小(主节点操作记录存储到 local 的 oplog 中)")]),a._v(" "),t("h3",{attrs:{id:"_1-4-利用-shell-动态添加和删除主节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-利用-shell-动态添加和删除主节点"}},[a._v("#")]),a._v(" 1.4 利用 shell 动态添加和删除主节点")]),a._v(" "),t("p",[a._v("登录从服务器")]),a._v(" "),t("p",[a._v('use local;\nshow collections;\ndb.sources.find();\n//{ "host" : "127.0.0.1:8000", "source" : "main", "syncedTo" : Timestamp(1524728329, 1) }\ndb.sources.insert({host:\'127.0.0.1:8000\'});//挂载主节点\ndb.sources.remove({host:\'127.0.0.1:8000\'});//删除已经挂载的主节点')]),a._v(" "),t("h2",{attrs:{id:"_2-副本集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-副本集"}},[a._v("#")]),a._v(" 2. 副本集")]),a._v(" "),t("p",[a._v("MongoDB 复制是将数据同步在多个服务器的过程。\n复制提供了数据的冗余备份，并在多个服务器上存储数据副本，提高了数据的可用性， 并可以保证数据的安全性。\n复制还允许您从硬件故障和服务中断中恢复数据。")]),a._v(" "),t("h3",{attrs:{id:"_2-1-mongodb-复制原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-mongodb-复制原理"}},[a._v("#")]),a._v(" 2.1 MongoDB 复制原理")]),a._v(" "),t("p",[a._v("mongodb 的复制至少需要两个节点。其中一个是主节点，负责处理客户端请求，其余的都是从节点，负责复制主节点上的数据。\nmongodb 各个节点常见的搭配方式为：一主一从、一主多从。\n主节点记录在其上的所有操作 oplog，从节点定期轮询主节点获取这些操作，然后对自己的数据副本执行这些操作，从而保证从节点的数据与主节点一致。\nreplication")]),a._v(" "),t("h3",{attrs:{id:"_2-1-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-流程"}},[a._v("#")]),a._v(" 2.1 流程")]),a._v(" "),t("p",[a._v("一台活跃服务器和二个备份服务器\n当活跃服务器出现故障，这时集群根据权重算法推选出出活跃服务器\n当原来的主服务器恢复后又会变成从服务器")]),a._v(" "),t("h3",{attrs:{id:"_2-2-配置副本集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置副本集"}},[a._v("#")]),a._v(" 2.2 配置副本集")]),a._v(" "),t("p",[a._v("A 服务器")]),a._v(" "),t("p",[a._v("dbpath=E:\\repl\\repl1\nport=2001\nreplSet=group\nB 服务器")]),a._v(" "),t("p",[a._v("dbpath=E:\\repl\\repl2\nport=2002\nreplSet=group\nC 服务器")]),a._v(" "),t("p",[a._v("dbpath=E:\\repl\\repl3\nport=2003\nreplSet=group")]),a._v(" "),t("h3",{attrs:{id:"_2-3-初始化副本集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-初始化副本集"}},[a._v("#")]),a._v(" 2.3 初始化副本集")]),a._v(" "),t("p",[a._v('rs.initiate() 启动一个新的副本集\nrs.conf() 查看副本集的配置\nrs.status() 命令\nuse admin;\nvar conf=\n{\n"_id" : "group",\n"members" : [\n{ "_id" : 0, "host" : "127.0.0.1:2001" },\n{ "_id" : 1, "host" : "127.0.0.1:2002" },\n{ "_id" : 2, "host" : "127.0.0.1:2003" }\n]\n}\nrs.initiate(conf);\nrs.status();')]),a._v(" "),t("h3",{attrs:{id:"_2-4-高级参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-高级参数"}},[a._v("#")]),a._v(" 2.4 高级参数")]),a._v(" "),t("p",[a._v("standard 常规节点 参与投票有可能成为活跃节点\npassive 副本节点 参与投票，但不能成为活跃节点\narbiter 仲裁节点 只参与投票，不复制节点，也不能成为活跃节点\npriority 0 到 1000 之间，0 代表是副本节点，1 到 1000 是常规节点\narbiterOnly:true 仲裁节点")]),a._v(" "),t("h3",{attrs:{id:"_2-5-读写分离操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-读写分离操作"}},[a._v("#")]),a._v(" 2.5 读写分离操作")]),a._v(" "),t("p",[a._v("一般情况下作为副本节点是不能进行数据库操作的，但是在读取密集的系统中读写分离是必要的")]),a._v(" "),t("p",[a._v("rs.slaveOk();")]),a._v(" "),t("h3",{attrs:{id:"_2-6-oplog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-oplog"}},[a._v("#")]),a._v(" 2.6 Oplog")]),a._v(" "),t("p",[a._v("它被存储在本地数据库 local 中，会记录每一个操作。 如果希望在故障恢复的时候尽可能更多，可以把这个 size 设置的大一点")]),a._v(" "),t("p",[a._v("--oplogSize 1024\nuse local;\ndb.oplog.rs.find().limit(2);")]),a._v(" "),t("h2",{attrs:{id:"_3-分片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-分片"}},[a._v("#")]),a._v(" 3. 分片")]),a._v(" "),t("p",[a._v("在 Mongodb 里面存在另一种集群，就是分片技术,可以满足 MongoDB 数据量大量增长的需求。 当 MongoDB 存储海量的数据时，一台机器可能不足以存储数据，也可能不足以提供可接受的读写吞吐量。这时，我们就可以通过在多台机器上分割数据，使得数据库系统能存储和处理更多的数据。")]),a._v(" "),t("h3",{attrs:{id:"_3-1-分片架构图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-分片架构图"}},[a._v("#")]),a._v(" 3.1 分片架构图")]),a._v(" "),t("p",[a._v("sharding")]),a._v(" "),t("h3",{attrs:{id:"_3-2-片键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-片键"}},[a._v("#")]),a._v(" 3.2 片键")]),a._v(" "),t("p",[a._v("路由根据片键把不同的文档保存到不同的分片中")]),a._v(" "),t("h3",{attrs:{id:"_3-3-分片的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-分片的应用场景"}},[a._v("#")]),a._v(" 3.3 分片的应用场景")]),a._v(" "),t("p",[a._v("单台机器无法存储\n单台机器已经不能满足高并发操作\n想把尽可能多的数据存放到内存中提高性能")]),a._v(" "),t("h3",{attrs:{id:"_3-4-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-配置"}},[a._v("#")]),a._v(" 3.4 配置")]),a._v(" "),t("h4",{attrs:{id:"_3-4-1-创建-sharding-副本集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-创建-sharding-副本集"}},[a._v("#")]),a._v(" 3.4.1 创建 Sharding 副本集")]),a._v(" "),t("p",[a._v("mkdir E:\\repl\\db2001\nmongod --port 2001 --dbpath=/data/db2001 --shardsvr --replSet=shard1\nmkdir E:\\repl/db2002\nmongod --port 2002 --dbpath=/data/db2002 --shardsvr --replSet=shard1")]),a._v(" "),t("h1",{attrs:{id:"mongo-localhost-2001"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo-localhost-2001"}},[a._v("#")]),a._v(" mongo localhost:2001")]),a._v(" "),t("p",[a._v("rs.initiate({_id: 'shard1', members: [{_id: 0, host: 'localhost:2001'}, {_id: 1, host: 'localhost:2002'}]})\nrs.isMaster() #查看主从关系\nmkdir E:\\repl\\db2003\nmongod --port 2003 --dbpath=E:\\repl\\db2003 --shardsvr --replSet=shard2\nmkdir E:\\repl\\db2004\nmongod --port 2004 --dbpath=E:\\repl\\db2004 --shardsvr --replSet=shard2")]),a._v(" "),t("h1",{attrs:{id:"mongo-localhost-2003"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo-localhost-2003"}},[a._v("#")]),a._v(" mongo localhost:2003")]),a._v(" "),t("p",[a._v("rs.initiate({_id: 'shard2', members: [{_id: 0, host: 'localhost:2003'}, {_id: 1, host: 'localhost:2004'}]})\nrs.isMaster() #查看主从关系")]),a._v(" "),t("h4",{attrs:{id:"_3-4-2-创建一个配置服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-创建一个配置服务器"}},[a._v("#")]),a._v(" 3.4.2 创建一个配置服务器")]),a._v(" "),t("p",[a._v("mkdir E:\\repl\\db2005\nmongod --port 2005 --dbpath=E:\\repl\\db2005 --shardsvr --replSet=config\nmkdir E:\\repl\\db2006\nmongod --port 2006 --dbpath=E:\\repl\\db2006 --shardsvr --replSet=config")]),a._v(" "),t("h1",{attrs:{id:"mongo-localhost-2005"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo-localhost-2005"}},[a._v("#")]),a._v(" mongo localhost:2005")]),a._v(" "),t("p",[a._v("rs.initiate({_id: 'config', members: [{_id: 0, host: 'localhost:2005'}, {_id: 1, host: 'localhost:2006'}]})\nrs.isMaster() #查看主从关系")]),a._v(" "),t("h4",{attrs:{id:"_3-4-2-创建路由服务器-并且连接配置服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-2-创建路由服务器-并且连接配置服务器"}},[a._v("#")]),a._v(" 3.4.2 创建路由服务器，并且连接配置服务器")]),a._v(" "),t("p",[a._v("路由器调用 mongos 命令")]),a._v(" "),t("p",[a._v("mongos --port 2006 --configdb config/localhost:2005,localhost:2006")]),a._v(" "),t("h4",{attrs:{id:"_3-4-3-添加分片数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-3-添加分片数据库"}},[a._v("#")]),a._v(" 3.4.3 添加分片数据库")]),a._v(" "),t("p",[a._v("mongo localhost:2006\nuse admin")]),a._v(" "),t("blockquote",[t("p",[a._v("db.runCommand({ addshard: 'shard1/localhost:2001,localhost:2002'})\ndb.runCommand({ addshard: 'shard2/localhost:2003,localhost:2004'})")])]),a._v(" "),t("h4",{attrs:{id:"_3-4-5-在路由服务器打开数据分片功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-5-在路由服务器打开数据分片功能"}},[a._v("#")]),a._v(" 3.4.5 在路由服务器打开数据分片功能")]),a._v(" "),t("p",[a._v("use admin;")]),a._v(" "),t("blockquote",[t("p",[a._v("db.runCommand({ enablesharding: 'school'})\ndb.runCommand({ shardcollection: 'school.students', key: {name: 1}})")])]),a._v(" "),t("h2",{attrs:{id:"_4-参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[a._v("#")]),a._v(" 4. 参考")]),a._v(" "),t("p",[a._v("configuration-options")])])}),[],!1,null,null,null);t.default=o.exports}}]);