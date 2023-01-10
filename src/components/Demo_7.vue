<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import { customRef } from 'vue'
export default {
    name:'Demo_7',
    setup(){
        //自定义一个ref-名为：myRef(输入防抖)
        function myRef(value,delay){
            let timer
            return customRef((track,trigger)=>{
                return {
                    get(){
                        track() //通知vue追踪Value的变化（提前和get沟通一下）
                        return value
                    },set(newvalue){
                        clearTimeout(timer)
                        timer = setTimeout(()=>{
                        value =  newvalue
                        trigger()//通知vue去重新解析模板
                        },delay)
                       
                    }
                }
            })
        }

        let keyWord = myRef('hello',500)//使用程序员自定义ref

        return {keyWord}
    }

}
</script>

<style>

</style>