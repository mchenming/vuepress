export default {

    changeAge ({commit}, payload) {
        setTimeout(_=>{
            commit('jianshao',payload)
        },1000)
    },
    submit({commit},payload){
        setTimeout(()=>{
            commit('submit',payload)
        },1000)
    }
} 

// export function submit({commit},payload){
//     setTimeout(()=>{
//         commit('submit',payload)
//     },1000)
// }