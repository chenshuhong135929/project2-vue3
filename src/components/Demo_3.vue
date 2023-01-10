<template>
  <h2>当前的求和为： {{sum}}</h2><br>
  <button @click="sum ++ ">点击我数据++</button>
  <h2>当前的求和为： {{msg}}</h2><br>
  <button @click="msg+='nihao' ">点击我数据++</button>
  <h2>人员信息</h2>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job.j1}}</h2>
  <button @click="person.name+='nihao' ">修改姓名</button>
  <button @click="person.age ++ ">增长年龄</button>
  <button @click="person.job.j1 ++ ">增长j</button>
</template>

<script>
import {ref,watch,reactive} from 'vue'
export default {
name:'Demo_3',
 
setup(){
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
        name: 'chenshuhong',
        age:0,
        job:{
            j1:100
        }
    })
    //第一种情况：监视ref所定义的一个响应式数据
   /*  watch(sum,(newValue,oldVaule)=>{
        console.log('sum变化了',newValue,oldVaule);
    },immediate:true) */
    //第二种情况：监视ref所定义的多个响应式数据
    /*   watch([sum,msg],(newValue,oldVaule)=>{
        console.log('sum或者msg 变化了',newValue,oldVaule);
    })  */
       /*第三种情况：监视reactive所定义的一个响应式数据
        1,注意：此处无法正确的获取oldVaule
        2,注意：强制开启了深度监视（deep配置无效）
     */
  /*   watch(person,(newValue,oldVaule)=>{
        console.log('reactive 变化了',newValue,oldVaule);
    }) */
    //第四种情况：监视reactive所定义的一个响应式数据种的某个属性
   /*  watch(()=>person.age,(newValue,oldvaule)=>{
         console.log('person中属性age的值前后变化',newValue,oldvaule);
    }) */
    //第五种情况：监视reactive所定义的一个响应式数据种的某些属性
    /*  watch(()=>[person.age,person.name],(newValue,oldvaule)=>{
         console.log('person中属性age,name 多个属性的值前后变化',newValue,oldvaule);
    }) */
    //特殊属性
    watch(()=>person.job,(newValue,oldValue)=>{
        console.log('job',newValue)
    },{deep:true})//此处由于监视的式reactive定义的对象种的属性，所以deep配置有效
    return{
        sum,
        msg,
        person
    }
}
}
</script>

<style>

</style>