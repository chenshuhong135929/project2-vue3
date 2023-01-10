<template>
<div class="son">
    <h3>我是Son组件（孙）{{name}} ---- {{price}}</h3>
</div>
  
</template>

<script>
import {reactive,inject, toRefs} from 'vue'
export default {
name : 'Son',
setup(){
    let car = inject('car')
    return {
        ...toRefs(car)
    }

}
}
</script>

<style scoped>
.son{
    background-color: rgb(20, 22, 112);
    padding: 10px;
}

</style>