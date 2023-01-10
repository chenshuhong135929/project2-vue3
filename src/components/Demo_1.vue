<template>
   <h2>一人的信息</h2>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资:{{job.salary}}</h2>
  <h2>类型：{{job.type}}</h2>
  <h2 v-show="job.sex">性别：{{job.sex}}</h2>
  <h2 v-show="job.name">姓名：{{job.name}}</h2>
  <h2>深层次:{{job.a.b.c}},数组 {{arrs[0]}}</h2>
  
  <h2>爱好： <b v-for="ar in arrs" :key="ar.index">{{ar}}，</b></h2>
  <button @click="updateInfo">修改人信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import {ref , reactive} from  'vue'
export default {
name:'Demo_1',
  setup(){
    let name = ref('zhangsang')
    let age  =  ref(11)
    let arrs = reactive(['学习','打球','吃饭'])
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
 
    function updateInfo(){
       name.value='张三'
       age.value=29
       job.salary='40k'
       job.type='工程师'
       arrs[0]='玩游戏'
    }

    function addSex(){
        job.sex='男'
    }

    function deleteName(){
        delete job.name 
    }
   

     return{
      name,
      age,
      updateInfo,
      job,
      arrs,
      addSex,
      deleteName
    } 
    //返回一个函数（渲染函数）
    //reture ()=> h('h1','你好'),
  }
}
</script>

<style>

</style>