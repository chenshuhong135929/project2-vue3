<template>
   <h2>{{sum}}</h2>
   <button @click="sum++">点击++</button>
</template>

<script>


import {ref,onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount, onUnmounted,} from 'vue'
export default {
    name :'Demo_4',
    setup(){
        let sum = ref(0)
        onBeforeMount(()=>{

        })
        onMounted(()=>{

        })
        onBeforeUpdate(()=>{

        })
        onBeforeUnmount(()=>{

        })
        onUnmounted(()=>{
            
        })
    return{
        sum
    }
    }

}
</script>

<style>

</style>