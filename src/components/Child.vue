<template>
  <div class="child">
    <h3>我是Child组件（子）{{name}} ---- {{price}}</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son.vue'
import {reactive,inject, toRefs} from 'vue'
export default {
name : 'Child',
components:{
    Son
},
setup(){
    let car = inject('car')
    return {
        ...toRefs(car)
    }

}
}
</script>

<style scoped>
.child{
    background-color: rgb(165, 40, 40);
    padding: 10px;
}
</style>