<template>
  <div class="child">
    <h3>我是Child组件(子) {{carName}}---{{carPrice}} </h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son.vue';
export default {
    name: "Child",
    components: { Son },
    props:{
        carName:String,
        carPrice:Number
    }

}
</script>

<style>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>