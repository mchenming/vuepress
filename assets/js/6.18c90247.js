(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(n,s,a){"use strict";a.r(s);var e=a(28),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"数组去重set-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组去重set-map"}},[n._v("#")]),n._v(" 数组去重set map")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function union(arr,arr1) {\n    let s = new Set([...arr,...arr1])\n    return [...s]\n}\nlet a = [1,2,3,5,4,1]\nlet b = [2,3,5,5,5,1,3]\n// console.log(union(a,b))\nfunction jiaoji(arr,arr1){\n    let a = [...new Set(arr)]\n    let b = new Set(arr1)\n    console.log(b)\n     return a.filter(item=>{\n        return b.has(item) \n    })\n}\n\nconsole.log(jiaoji(a,b))\n\nfunction chaji(arr,arr1){\n    let a = [...new Set(arr)]\n    let b = new Set(arr1)\n     return a.filter(item=>{\n        return !b.has(item) \n    })\n}\n\nconsole.log(chaji(a,b))\n\nlet obj1 = {name:'zs'}\nlet obj2 = {age:10}\nconsole.log({...obj1,...obj2})\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);