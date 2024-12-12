(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{423:function(a,t,r){a.exports=r.p+"assets/img/1.a1b18b4b.png"},446:function(a,t,r){"use strict";r.r(t);var e=r(16),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"二-安装方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-安装方式"}},[a._v("#")]),a._v(" 二.安装方式")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("前言")]),a._v(" "),t("ul",[t("li",[a._v("安装包：不同平台")]),a._v(" "),t("li",[a._v("命令方式")]),a._v(" "),t("li",[a._v("docker 方式：桌面端、命令方式")])])]),a._v(" "),t("h2",{attrs:{id:"_1-window"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-window"}},[a._v("#")]),a._v(" 1.window")]),a._v(" "),t("h3",{attrs:{id:"_1-1-安装包方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装包方式"}},[a._v("#")]),a._v(" 1.1 安装包方式")]),a._v(" "),t("p",[a._v("mongodb32 位安装版 链接: "),t("a",{attrs:{href:"https://pan.baidu.com/s/1SHJ1vre_CQOE3u-W0zniqQ",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pan.baidu.com/s/1SHJ1vre_CQOE3u-W0zniqQ"),t("OutboundLink")],1),a._v(" 密码: chan")]),a._v(" "),t("p",[a._v("MongoDB64 位绿色版 链接: "),t("a",{attrs:{href:"https://pan.baidu.com/s/1EkAB2SrcU1mfMfff_WDxtA",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pan.baidu.com/s/1EkAB2SrcU1mfMfff_WDxtA"),t("OutboundLink")],1),a._v(" 密码: w913")]),a._v(" "),t("p",[a._v("mongo 客户端 链接: "),t("a",{attrs:{href:"https://pan.baidu.com/s/1YFxLZ-55D-WFR8os2fXN0A",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://pan.baidu.com/s/1YFxLZ-55D-WFR8os2fXN0A"),t("OutboundLink")],1),a._v(" 密码: 61qd")]),a._v(" "),t("h4",{attrs:{id:"启动与连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动与连接"}},[a._v("#")]),a._v(" 启动与连接")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("1.找到 mongodb 安装目录，一般是 "),t("code",[a._v("C:\\Program Files\\MongoDB 2.6 Standard\\bin")])])]),a._v(" "),t("li",[t("p",[a._v("2.按下 Shift+鼠标右键，选择在此处打开命令窗口")])]),a._v(" "),t("li",[t("p",[a._v("3.在除 C 盘外的盘符新建一个空目录，如 D:\\Mongodb\\data")])]),a._v(" "),t("li",[t("p",[a._v("4.在命令行中输入 mongod --dbpath=刚创建的空目录，如")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("mongod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dbpath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Mongodb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("data\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("5.再按回车键")]),a._v(" "),t("ul",[t("li",[a._v("如果出现 waiting for connections on port 27017 就表示启动成功，已经在 27017 端口上监听了客户端的请求")]),a._v(" "),t("li",[a._v("注意：--dbpath 后的值表示数据库文件的存储路径，而且后面的路径必须事先创建好，必须已经存在，否则服务开启失败")]),a._v(" "),t("li",[a._v("注意：这个命令窗体绝对不能不能关，关闭这个窗口就相当于停止了 mongodb 服务")])])])]),a._v(" "),t("h2",{attrs:{id:"_2-mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mac"}},[a._v("#")]),a._v(" 2.mac")]),a._v(" "),t("h3",{attrs:{id:"_2-1-安装包方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装包方式"}},[a._v("#")]),a._v(" 2.1 安装包方式")]),a._v(" "),t("h3",{attrs:{id:"_2-2-命令方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-命令方式"}},[a._v("#")]),a._v(" 2.2 命令方式")]),a._v(" "),t("p",[a._v("先安装 "),t("code",[a._v("homebrew")])]),a._v(" "),t("p",[a._v("使用 "),t("a",{attrs:{href:"http://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("brew"),t("OutboundLink")],1),a._v(" 安装 mongodb")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("brew tap mongodb/brew\nbrew update\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mongodb-community@5.0\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"启动与连接-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动与连接-2"}},[a._v("#")]),a._v(" 启动与连接")]),a._v(" "),t("p",[a._v("启动")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("brew services start mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("community@"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.0")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("停止")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("brew services stop mongodb"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("community@"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.0")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-3-docker-方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-docker-方式"}},[a._v("#")]),a._v(" 2.3 docker 方式")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhoubichuan.com/web-docker/base/1.desktop/4.mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("桌面版方式"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://zhoubichuan.com/web-docker/base/2.practice/4.mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令方式"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"_3-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux"}},[a._v("#")]),a._v(" 3.linux")]),a._v(" "),t("h3",{attrs:{id:"_3-1-安装包方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-安装包方式"}},[a._v("#")]),a._v(" 3.1 安装包方式")]),a._v(" "),t("h3",{attrs:{id:"_3-2-命令方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-命令方式"}},[a._v("#")]),a._v(" 3.2 命令方式")]),a._v(" "),t("h3",{attrs:{id:"_3-3-docker-方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-docker-方式"}},[a._v("#")]),a._v(" 3.3 docker 方式")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhoubichuan.com/web-docker/base/1.desktop/4.mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("桌面版方式"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://zhoubichuan.com/web-docker/base/2.practice/4.mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("命令方式"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"_4-可视化工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-可视化工具"}},[a._v("#")]),a._v(" 4.可视化工具")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://robomongo.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("Robomongo"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[t("p",[a._v("权限认证")]),a._v(" "),t("p",[t("img",{attrs:{src:r(423),alt:""}})])])])])}),[],!1,null,null,null);t.default=s.exports}}]);