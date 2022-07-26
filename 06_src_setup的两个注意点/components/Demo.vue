<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="test1">测试出发Demo组件的Hello事件</button>
  <slot name="qwe"></slot>
  
</template>

<script>
import {reactive } from "vue";
export default {
  name: 'Demo',
  props:['msg','name'],
  emits:['hello'],//接受自定义事件，不写也可以
  setup(props,context){
    console.log("---setup---",props);
    // console.log("---setup---",context.attrs);//相当于vue2中的$attrs
    // console.log("---setup---",context.emit);//出发自定义事件的
    console.log("---setup---",context.slots);//插槽
    // 数据
    // 把基本类型数据和对象数据用对象包起来
    let person = reactive({
      name:'"张三"',
      age:18,
    })
    // 触发自定义事件hello
    function test1() {
        context.emit('hello',666)
    }

    //方法 
    
    return{
      person,
      test1
    }
  }
}
</script>

<style>

</style>
