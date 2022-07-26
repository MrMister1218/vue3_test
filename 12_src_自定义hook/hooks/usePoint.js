import {reactive,onMounted,onBeforeUnmount} from "vue";
export default function () {
    //实现鼠标打点的数据
    let point=reactive({
        x:0,
        y:0
      })

      //实现鼠标打点的方法
      function savePoint(event) {
          point.x=event.pageX;
          point.y=event.pageY;
          console.log(point);
      }

      //实现鼠标打点的相关生命周期
      onMounted(()=>{
        window.addEventListener('click',savePoint)

      })
      //卸载前移除绑定事件
      onBeforeUnmount(()=>{
        window.removeEventListener('click',savePoint)
      })
      return point
      
}
// 把setup函数中使用的composition API进行了封装，类似于vue2中的mixin。复用代码让setup函数中的逻辑更简单、更易懂。
