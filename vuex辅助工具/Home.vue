<template>
  <div class="home">
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    {{getInfo}}
    <button @click="addAge()">添加</button>
    <button @click="jianAge()">减少</button>
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['name','age']),
    ...mapGetters(['getInfo'])
  },
  methods: {
    ...mapMutations(['changeState']),
    ...mapActions(['changeAge']),
    addAge() {
      // this.$store.commit('changeState', 2)
      this.changeState(2)
    },
    jianAge () {
      this.changeAge('1')
    }
  }
}
</script>
