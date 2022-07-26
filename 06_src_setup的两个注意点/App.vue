<template>
  <Demo @hello="showHelloMsg" msg="hello!" name="周宇翔">
    <template v-slot:qwe>
      <span>namedSpan</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
    name: "App",
    components: { Demo },
    setup() {
      function showHelloMsg(value) {
        alert(`你出发了hello事件，我收到的参数是${value}!`)

      }
      return{
        showHelloMsg
      }
    }
}
</script>

<style>

</style>
