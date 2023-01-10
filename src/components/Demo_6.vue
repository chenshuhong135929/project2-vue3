<template>
   <h2>一人的信息</h2>
   <h3>{{job}}</h3>
  <h2>薪资:{{job.salary}}</h2>
  <h2>类型：{{job.type}}</h2>
  <h2 v-show="job.sex">性别：{{job.sex}}</h2>
  <h2 v-show="job.name">姓名：{{job.name}}</h2>
 
  <button @click="updateInfo">修改人信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import {toRef ,toRefs, reactive} from  'vue'
export default {
name:'Demo_1',
  setup(){
  
    //操作对象属性
    let job = reactive({
      salary:'30k',
      type:'前端工程师',
      name:'小米',
      a:{
        b:{
          c:'666'
        }
      }
    })
 
 /*  const x= toRefs(job)
  console.log(x); */
  
  function updateInfo(){
       job.salary='40k'
       job.type='工程师'
     
    }

    function addSex(){
        job.sex='男'
    }

    function deleteName(){
        delete job.name 
    }
   

     return{
      job,
      ...toRefs(job),
      updateInfo,
      addSex,
      deleteName,
     
    } 
    
  }
}
</script>

<style>

</style>