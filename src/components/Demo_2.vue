<template>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  姓：<input type="text" v-model="p2.firstName">
  <br>
  名：<input type="text" v-model="p2.lastName">
  <br>
  姓名：<input type="text" v-model="p2.name">
  <br>
  <button @click="Dhello">点击调用父类事件</button>
  <br>
  <slot name="nihao"></slot>
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
export default {
name:'Demo_2',
props:['msg','school'],
emits:['hello'],
beforeCreate(){
 console.log('===beforeCreate===');
},


setup(props,ctx){
    
    console.log('===setup===',props,ctx);
    let person= reactive({
        name:'小明',
        age: 29
    })

      let p2= reactive({
        firstName:'',
        lastName: '',
    })

    function Dhello(){
        ctx.emit('hello',person.name)
    }


  /*   
         单独计算属性不进行修改（简写形式）
         p2.name=computed(()=>{
             return p2.firstName+'-'+p2.lastName
         })
 */
       //完整的有获取更修改 （完整形式）
       p2.name=computed({
        get(){
            return p2.firstName+'-'+p2.lastName
        },
        set(value){
        let a =   value.split('-')
         p2.firstName=a[0]
         p2.lastName=a[1]
        }
    })
    return{
        person,
        Dhello,
        p2,
         
    }

}
}
</script>

<style>

</style>