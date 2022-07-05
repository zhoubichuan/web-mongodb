(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{363:function(s,t,e){"use strict";e.r(t);var a=e(6),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"更新文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新文档"}},[s._v("#")]),s._v(" 更新文档")]),s._v(" "),t("h3",{attrs:{id:"_8-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-语法"}},[s._v("#")]),s._v(" 8.1 语法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("db.collection.update(\n   <query>,\n   <updateObj>,\n   {\n     upsert: <boolean>,\n     multi: <boolean>\n   }\n)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_8-2-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-参数"}},[s._v("#")]),s._v(" 8.2 参数")]),s._v(" "),t("ul",[t("li",[s._v("query 查询条件，指定要更新符合哪些条件的文档")]),s._v(" "),t("li",[s._v("update 更新后的对象或指定一些更新的操作符\n"),t("ul",[t("li",[s._v("$set 直接指定更新后的值")]),s._v(" "),t("li",[s._v("$inc 在原基础上累加")])])]),s._v(" "),t("li",[s._v("upset 可选，这个参数的意思是，如果不存在符合条件的记录时是否插入updateObj,默认是false,不插入。")]),s._v(" "),t("li",[s._v("multi 可选，mongodb默认只更新找到第一条记录，如果这个参数为true，就更新所有符合条件的记录。")])]),s._v(" "),t("h3",{attrs:{id:"_8-3-upsert"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-upsert"}},[s._v("#")]),s._v(" 8.3 upsert")]),s._v(" "),t("p",[s._v("将"),t("code",[s._v("students")]),s._v("集合中数据中"),t("code",[s._v("name")]),s._v("是zfpx2的值修改为zfpx22")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("db.students.insert({_id:1,name:'zfpx1'});\nWriteResult({'nInserted':1})\ndb.students.update({_id:2},{name:'zfpx2'},{upsert:true});\nWriteResult({'nInserted':0,'nUpserted':1,'nModified':0,'_id':2})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_8-4-multi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-multi"}},[s._v("#")]),s._v(" 8.4 multi")]),s._v(" "),t("ul",[t("li",[s._v("如果有多条name是zfpx2的数据只更新一条，如果想全部更新需要指定"),t("code",[s._v("{multi:true}")]),s._v("的参数")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('db.students.update({name:\'zfpx2\'},{$set:{age:10},{multi:true}});\nWriteResult({"nMatched":2},"nUpserted":0,"nModified":2);\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);