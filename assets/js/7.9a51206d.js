(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(n,s,a){"use strict";a.r(s);var e=a(28),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"扩展运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符"}},[n._v("#")]),n._v(" 扩展运算符")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let [,...arr] = ['xs','xa',1,456]\n// console.log(arr)\nlet obj = {name: 'za'}\nlet obj2 = {age: 18}\nconsole.log({...obj,...obj2})\nlet newobj = {...obj,...obj2}\nlet {name,...ooo} = newobj\n// console.log(name)\n// console.log(ooo)\n\nfunction ajax (){\nconsole.log([...arguments])\n}\najax('url','methods')\n\n// ...  扩展运算符  如果是多层就是浅拷贝  如果是一层就是深拷贝\n\nlet obj5 = {name: 'mmm', n: {tit: 100}}\nlet obj6 = {...obj5}\n// ==>\n// let obj6 = Object.assign(obj6)  浅拷贝\nobj6.n.tit = 200\nobj6.name = 'zs'\n// JSON.parse(JSON.stringify(obj6))   深拷贝   //缺点容易数据丢失  a:undefine  正则  function\nconsole.log(obj5)\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);