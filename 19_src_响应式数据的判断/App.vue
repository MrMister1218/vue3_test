<template>
    <h3>我是App组件(祖)</h3>
</template>

<script>
import { reactive,toRefs,ref,readonly,isReactive,isRef,isReadonly,isProxy } from 'vue';
export default {
    name: "App",
    setup(){
      let car=reactive({
        name:'奔驰',
        price:'40W'
      })
      let sum=ref(0)
      let car2=readonly(car)

      console.log(isRef(sum));//true
      console.log(isReactive(car));//true
      console.log(isReadonly(car2));//readonly处理后依旧是proxy类型数据 //true
      console.log(isProxy(car2));//true

      return { ...toRefs(car) }
    }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>