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
  //情况1：监视ref所定义的一个响应式数据
  // watch:{
  //   sum(newValue,oldValue){
  //     console.log("sum值变化了",newValue,oldValue);
  //   }
  // },
  setup(){
    //数据
    let sum=ref(0);
    let msg= ref('你好啊')
    
    // 如果用ref配置对象数据，则会自动调用reactive
    let person=reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    //情况2：监视ref所定义的多个响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum变了',newValue,oldValue);
    // })
    // watch(msg,(newValue,oldValue)=>{
    //   console.log('msg变了',newValue,oldValue);
    // })
    //合并
    // watch([sum,msg],(newValue,oldValue)=>{
    //   console.log('sum或msg变了',newValue,oldValue);
    // },{immediate:true})

    //情况3：监视reactive所定义的一个响应式数据全部属性。
    // 注意：此处无法正确的获取oldValue
    // 注意：强制开启了深度监视       
    // watch(person,(newValue,oldValue)=>{
    //   console.log('person变化了',newValue,oldValue);
    // },{deep:true})//此处配置深度监视无效

    //情况4：监视reactive所定义的一个响应式数据某个属性。
    // watch(()=>person.age,(newValue,oldValue)=>{
    //   console.log('person的age变化了',newValue,oldValue);
    // })

    //情况5：监视reactive所定义的一个响应式数据某些属性。
    // watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
    //   console.log('person的age或者name变化了',newValue,oldValue);
    // })

    // 特殊情况
      watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
        console.log('person的job变化了',newValue,oldValue);
      },{deep:true})//此处由于监视的是reactive所定义的对象中的某个属性，所有deep配置有效

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
