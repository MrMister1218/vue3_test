<template>
  <h4>当前的x的值是：{{x.y}}</h4>
  <!-- <button @click="x.y++">点我x+1</button> -->
  <button @click="x={y:888}">点我替换x</button>
  <hr>
  <h4>{{person}}</h4>`
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
//作用：创建一个ref对象，其value值指向另一个对象中的某个属性。
import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from "vue";
export default {
  name: 'Demo',
  setup(){
    //数据
    //浅层响应式数据，只有第一层响应式
    // let person=shallowReactive({
    let person=reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    //基本类型数据和ref没区别
    //不做对象类型的响应式
    let x = shallowRef({
      y:0
    })


    // //不是响应式
    // const name1=person.name
    // console.log('@@@',name1);
    // //是响应式
    // const name2 = toRef(person,'name')
    // console.log('@@@',name2);


    //返回一个对象
    return{
      person,
        // name:toRef(person,'name'),
        // age:toRef(person,'age'),
        // salary:toRef(person.job.j1,'salary')
        ...toRefs(person),
        x
    }
  }
  
  
}
</script>

<style>

</style>
