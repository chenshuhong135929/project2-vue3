<template>
  <div class="app" >
    <!--
    <Demo_1></Demo_1> 
    <Demo_2  msg="nihao" school="学校" @hello="helloMsg">
      <template v-slot:nihao>
        <span>我是卡槽</span>
      </template>
    </Demo_2>
    <Demo_3></Demo_3>
    <Demo_4 ></Demo_4>
    <Demo_5 ></Demo_5>
    <Demo_6 ></Demo_6>
    <Demo_7 ></Demo_7>
    <h3>我是App组件（祖）{{name}} ---- {{price}}</h3>
    <Child></Child>
     -->
   
  </div>
  
</template>

<script>
 
 

import Demo_1 from './components/Demo_1.vue'
import Demo_2 from './components/Demo_2.vue'
import Demo_3 from './components/Demo_3.vue'
import Demo_4 from './components/Demo_4.vue'
import Demo_5 from './components/Demo_5.vue'
import Demo_6 from './components/Demo_6.vue'
import Demo_7 from './components/Demo_7.vue'
import Child from './components/Child.vue'
import {provide,reactive, toRefs,isRef,isProxy, computed} from 'vue'
export default {
  name: 'App',
  components:{
     Demo_1,
     Demo_2,
     Demo_3,
     Demo_4,
     Demo_5,
     Demo_6,
     Demo_7,
     Child,
  
  },
  setup(){
     
    function helloMsg(name){
      alert('你好啊！！！'+ name)
    }

     
    //祖，孙组件传递数据
    let car = reactive({
      name:'奔驰',
      price: '40w'
    })
    provide('car',car)



    //判断
    console.log(isRef(car));
    console.log(isProxy(car));
    return{
      helloMsg,
     ...toRefs(car)
    }
  }
}
 
</script>

<style>
/*  .app{
    background-color: gray;
    padding: 10px;
} */
</style>
