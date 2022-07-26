<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为:{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive,computed,ref,watch } from "vue";
export default {
  name: 'Demo',
  setup(){
    //数据
    let sum=ref(0);
    let msg= ref('你好啊')
    let person=ref({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    
    //基本数据不用加.value，无法监视0
    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue);
    })
    //加.value，监视reactive监视的数据
    // watch(person.value,(newValue,oldValue)=>{
    //   console.log('person的值变化了',newValue,oldValue);
    // })
    
    //深度监视
    watch(person,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue);
    },{deep:true})

    //返回一个对象
    return{
        sum,
        msg,
        person
    }
  }
  
  
}
</script>

<style>

</style>
