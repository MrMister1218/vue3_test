<template>
  <h4>当前的求和为: {{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
//作用：创建一个ref对象，其value值指向另一个对象中的某个属性。
import {ref,reactive,toRefs,readonly, shallowReadonly} from "vue";
export default {
  name: 'Demo',
  setup(){
    //数据
    let sum = ref(0)
    let person=reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })
    // //设置整个数据只读
    // person = readonly(person)
    // //第一层只读，深处数据可以改
    // person = shallowReadonly(person)

    sum = readonly(sum)
    sum = shallowReadonly(sum)
    //作用：获取其他组件的数据后，只使用不修改，不会影响其他组件

    //返回一个对象
    return{
        ...toRefs(person),
        sum,
    }
  }
  
  
}
</script>

<style>

</style>
