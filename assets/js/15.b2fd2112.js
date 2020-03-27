(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{213:function(n,e,t){"use strict";t.r(e);var s=t(28),o=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"axios-是基于ajax和promise封装的库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios-是基于ajax和promise封装的库"}},[n._v("#")]),n._v(" axios 是基于ajax和promise封装的库")]),n._v(" "),t("h2",{attrs:{id:"fetch-好处-浏览器内置的类，天生就基于promise进行管理的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch-好处-浏览器内置的类，天生就基于promise进行管理的"}},[n._v("#")]),n._v(" fetch 好处  浏览器内置的类，天生就基于promise进行管理的")]),n._v(" "),t("h3",{attrs:{id:"axios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[n._v("#")]),n._v(" axios")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("```\nimport axios from 'axios'\nimport qs from 'qs';  // node模块转换数据格式  name=13&age=12 \n\n// 根据环境变量分接口默认地址\nswitch (process.env.NODE_ENV){\n    case \"production\":  // 生产环境公共前缀\n        axios.defaults.baseURL = 'http: //192.128.0.154'\n        break;\n    case 'test':\n        axios.defaults.baseURL ='http: //192.128.0.154'\n        break;\n}\n\n// 设置超时事件和跨域是否允许携带凭证\naxios.defaults.timeOut = 10000\naxios.defaults.withCredentials = true\n\n// 设置请求传递数据的格式  x-www.form-urlencoded\naxios.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded';\naxios.defaults.transformRequest = data => qs.stringify(data);  // transformRequest   ==>post请求对数据的处理\n\naxios.interceptors.request.use(config => {\n    let token = localStorage.getItem('token')\n    token && (config.headers.Authorization = token)\n    return config\n},error => {\n    return Promise.reject(error)\n})\n\naxios.interceptors.response.use(response => {\n    return response.data\n},error => {\n    if(error.response) {\n        let response = error.response\n        switch(response.status){\n            case 401:  //权限\n                break;\n            case 403:\n                break; //token过期\n            case 404:\n                break; //找不到页面\n        }\n    } else {\n        return Promise.reject(error)\n    }\n})\n\nexport default axios\n```\n")])])]),t("h3",{attrs:{id:"fetch-封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch-封装"}},[n._v("#")]),n._v(" fetch 封装")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("```\nimport qs from 'qs'\n\nlet baseURL = ''\nlet baseURLArr = [{\n    type: 'dev',\n    url: 'http://192.102.0.35'\n}, {\n    type: 'test',\n    url: 'http://192.102.0.87'\n}, {\n    type:'production',\n    url: 'http://192.128.0.70'\n}]\n\n// 更具环境变量判断公共路径\nbaseURLArr.forEach(item => {\n    if (process.env.NODE_ENV === item.type) {\n        baseURL = item.url\n    }\n})\n\nexport default function request (url,options = {}){\n    url = baseURL + url\n    !options.methods? options.methods = 'GET' : null\n    if(options.hasOwnProperty('params')) {\n        if(/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.methods)) {\n            const ask = url.includes('?') ? '&' : '? '\n            url += `${ask}${qs.stringify(params)}`\n        }\n        delete options.params\n    }\n    // 合并配置项\n    options = Object.assign({\n        // 允许携带跨域资源凭证 some-origin同源可以 omit都拒绝\n        credentials: 'include',\n        headers: {},\n    },options)\n    options.headers.Accept = 'application/json';\n    \n    // token验证\n    let token = localStorage.getItem('token')\n    token && (options.headers.Authorization = token)\n\n    //post请求处理\n    if(/^(POST|PUT)$/i.test(options.method)) {\n        !options.type ? options.type = 'urlencoded' : null\n        if(options.type === 'urlencoded') {\n            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';\n            options.body = qs.stringify(options.body)\n        }\n        if(options.type = 'json') {\n            options.headers['Content-Type'] = 'application/json'\n            options.body =JSON.stringify(options.body)\n        }\n    }\n\n    return fetch(url,options).then(res => {\n        if(!/^(2|3)\\d{2}$/.text(res.status)) {\n            switch(res.status) {\n                case 401:\n                    break;  //当前请求一般是需要用户验证（未登录）\n                case 403: \n                // (token过去)\n                localStorage.removeItem('token')\n                break;\n                case 404:\n                    // 请求失败，请求所希望得到的资源未被在服务器上发现\n                break;\n            }\n        }\n        return res.json()\n    }).catch(error => {\n        if(!window.navigator.onLine) {\n            // 断开网络，可以让其跳转到断网页面\n            return \n        }\n        return Promise.reject(error)\n    })\n}\n```")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);