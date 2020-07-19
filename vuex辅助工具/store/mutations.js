export default {
    changeState(state, payload) {
        state.age = state.age + payload
    },
    jianshao(state, payload) {
        state.age = state.age - payload
    },
    submit(state,payload){
        state.num = state.num + payload
    }
}