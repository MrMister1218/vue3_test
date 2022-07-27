<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import { ref,customRef } from "vue";
export default {
    name: "App",
    setup(){
      function myRef(value,delay) {
        return customRef((track,trigger)=>{
          let timer
          return {
            get(){
              console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
              track()//通知Vue去追踪模板中value的改变
              return value
            },
            set(newValue){
              console.log(`有人从myRef这个容器中数据改成了${newValue}`);
              value = newValue
              clearTimeout(timer)
              timer=setTimeout(() => {
                trigger()//通知Vue去重新解析模板
              }, delay);
            }
          }
        })
      }

      // let keyWord=ref('hello')//使用Vue提供的ref
      let keyWord=myRef('hello',500)
      
      return{
        keyWord  
      }
    }
}
</script>

<style>

</style>
