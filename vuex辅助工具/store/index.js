import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// import vuexlocal from './saveLocal'
function vuexlocal() {
  return store => {
      // 判断是否有本地缓存如果有就取本地缓存的如果没有就取自身初始值
      let local = JSON.parse(localStorage.getItem('myVuex')) || store.replaceState(state)
      store.replaceState(local); // 替换state的数据
      store.subscribe((mutation,state) => { // 监听
          // 替换之前先取一次防止数据丢失
          let newstate = JSON.parse(JSON.stringify(state))
          localStorage.setItem('myVuex',JSON.stringify(newstate))
      })
  }
}
// console.log(vuexlocal)
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexlocal()],
  state,
  mutations,
  getters,
  actions,
  modules: {
  }
})
