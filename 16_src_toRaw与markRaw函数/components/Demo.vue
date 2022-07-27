<!-- toRaw:将一个由reactive生成的对象转换成普通对象，对这个对象的所有操作都不会引起页面更新 -->
<!-- markRaw:标记一个对象，使其不会再变成响应式对象。应用，有些值不该被设置成响应式，比如第三方库或者不可变数据的大列表。跳过响应式可以提高性能。 -->

<template>
  <h4>当前的求和为: {{sum}}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <!-- 解决方法二：展示person.car而不是refs函数的car -->
  <h2 v-if="person.car">座驾：{{person.car}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <!-- 函数添加到reactive函数数据的数据也是响应式 -->
  <button @click="person.car.name+='!'">改车名</button>
  <button @click="changePrice">改价格</button>

</template>
<script>
//作用：创建一个ref对象，其value值指向另一个对象中的某个属性。
import {ref,reactive,toRefs,toRaw,markRaw} from "vue";
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
      },
      //错误解决方法1：提前添加car属性
      // car:{}
    })
    //将响应式类型数据转换成原始类型
    function showRawPerson(){
      //只能处理reactive函数的数据
      const p=toRaw(person)
      p.age++
      console.log(p);
    }
    function addCar() {
      let car={
        name:'奔驰',
        price:40,
      }
      // person.car=car
      //markRaw使得car不会变成响应式数据
      person.car=markRaw(car)
    }
    function changePrice() {
      person.car.price++
      console.log(person.car.price);
    }

    //返回一个对象
    return{
        
        person,
        ...toRefs(person),
        sum,
        showRawPerson,
        addCar,
        changePrice
    }
  }
  
  
}
</script>

<style>

</style>
