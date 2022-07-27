<template>
  <div class="app">
    <h3>我是App组件(祖),{{name}}--{{price}}</h3>
    <!-- 使用props想子组件传数据 -->
    <Child :carName="name" :carPrice="price"></Child>
  </div>
</template>

<script>
import { reactive,toRefs,provide } from 'vue';
import Child from "./components/Child.vue";
export default {
    name: "App",
    components: { Child },
    setup(){
      let car=reactive({
        name:'奔驰',
        price:'40W'
      })
      //使用provide向后代组件传递数据（也能用于子组件）
      provide('carData',car)//给自己的后代组件传数据

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