<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前点击时鼠标的坐标为：x: {{point.x}} , y: {{point.y}} </h2>
</template>

<script>
import { ref} from "vue";
import usePoint from '@/hooks/usePoint'
export default {
  name: 'Demo',
  setup(){
    console.log('---setup---');
    //数据
    let sum=ref(0);
    let point=usePoint()//usePoint返回值
  
    //返回一个对象
    return{
        sum,point
    }
  },
  //#region
  // beforeCreate() {
  //   console.log('------beforeCreate------');
  // },
  // created() {
  //   console.log('------created------');
  // },
  // beforeMount() {
  //   console.log('------beforeMount------')
  // },
  // mounted(){
  //   console.log('------mounted------')
  // },
  // beforeUpdate() {
  //   console.log('------beforeUpdate------')
  // },
  // updated() {
  //   console.log('------updated------')
  // },
  // beforeUnmount() {
  //   console.log('------beforeUnmount------')
  // },
  // unmounted() {
  //   console.log('------unmounted------')
  // },
  //#endregion

}
</script>

<style>

</style>
