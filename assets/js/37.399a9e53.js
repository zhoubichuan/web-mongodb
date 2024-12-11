(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{454:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"七-文档操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七-文档操作"}},[s._v("#")]),s._v(" 七.文档操作")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")])]),s._v(" "),t("ul",[t("li",[s._v("collection_name 集合的名字")]),s._v(" "),t("li",[s._v("document 插入的文档")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.getCollection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("每当插入一条新文档的时候 mongodb 会自动为此文档生成一个"),t("code",[s._v("_id")]),s._v("属性，_id 一定是唯一的，用来唯一标识一个文档_id 也可以直接指定，但如果数据库中此集合已经有此_id 的话插入会失败。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.students.insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_id:1,name:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiaoming'")]),s._v(",age:1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WriteResult({'nInserted':1})")]),s._v("\ndb.students.insert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_id:1,name:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiaoming'")]),s._v(",age:1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_7-2-save"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-save"}},[s._v("#")]),s._v(" 7.2 save")]),s._v(" "),t("ul",[t("li",[s._v("collection_name 集合的名字")]),s._v(" "),t("li",[s._v("document 插入的文档")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.getCollection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".save"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("注：如果不指定_id 字段，save()方法类似于 insert()方法。如果指定_id 字段，则会更新该_id 的数据。")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.students.save"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_id:1,name:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiaoming'")]),s._v(",age:1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# WriteResult({\'nMatched\':1},"nUpserted":0,"nModified":0)')]),s._v("\ndb.students.save"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("_id:1,name:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiaoming'")]),s._v(",age:100"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WriteResult({'nMatched':1,'nUpserted':0,'nModified':1})")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);