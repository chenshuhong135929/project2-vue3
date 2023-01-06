# project2-vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## setup 
1，理解：Vue.3.0中一个新的配置项，值为一个函数
2，setup 是左右Composltlon API(组合API)
3，组件中所用到的：数据，方法等等，均要配置在setup中
4，setup函数的两种返回值：
    1，若返回一个对象，则对象中的属性，方法，在模板中均可以直接使用，（重点关注）
    2，若返回一个渲染函数，则可以自定义渲染内容（了解）
5，注意点：
    1，尽量不要与Vue2.x配置混用
        1，Vue2.x配置（data ,methods,computed...)中可以访问到setup中属性，方法，
        2，但在setup中不能访问到Vue2.x配置（data,methods ,computed)
        3，如果有重名，setup优先
    2，setup不能是一个async，因为返回值不再是return的对象，而是promise,模板看不到return对象中的属性


## ref函数 （基本类型）
需要进行引入
import {ref} from  'vue'
作用：定义一个响应式的数据
语法 const xxx =ref(initValue)
    创建一个包含响应式数据的引用对象（reference对象）
    js中操作数据：xxx.value
    模块中读取数据，不需要value直接：<div>{{xxx}}</div>

备注：
    接收到的数据可以式：基本类型，有可以式对象类型
    基本类型的数据，响应式依然靠Object.defineProperty()的get与set完成
    对象类型的数据：内部“求助”了Vue3.0中的一个新函数---reactive函数
实例：(setup)
    //定义
    let name = ref('zhangsang')
    let age  =  ref(11)
    //修改
    name.value='张三'
    age.value=29,




## reactive 函数 （对象类型，数组类型）
导入 import {ref , reactive} from  'vue'
作用：定义一个对象类型的响应式数据（基本类型别用它，用ref函数）
语法：const代理对象= reactive(被代理对象) 接收一个对象（或数组），返回一个代理对象（proxy对象）
reactive定义的响应式数据是”深层次的“
内部基于ES6的proxy实现，通过代理对象操作源对象内部数据都是响应式的
实例：(setup)
    //定义
    //数组属性
    let arrs = reactive(['xiaoming','xiaohong','xiaojing'])
    //对象属性
    let job = reactive({
      salary:'30k',
      type:'前端工程师',
      a:{
        b:{
          c:'666'
        }
      }

    })
    //修改
      job.salary='40k'
      job.type='工程师'
      job.a.b.c='33'
      arrs[0]='小明'


## Vue3.0中的响应式原理
### Vue2.x的响应式
    实现原理
        对象类型：通过object.defineProperty()对属性的读取，修改进行拦截（数据劫持）
        数组类型：通过重写更新数组的一系列方法来实现拦截，（对数组的变更方法进行包裹）
        Object.defineProperty(data,'count',{
            get(){},
            set(){}
        })
    存在问题
        新增属性，删除属性，界面不会更新
        直接通过下标修改数组，界面不会自动跟新
### Vue3.0的响应式
    实现原理
        通过Proxy(代理)：拦截对象中任意属性的变化，包括：属性值的读写，属性的添加，属性的删除等
        通过Refiect(反射) ：对代理对象属性进行操作
        MDN文档中描述Proxy 与 Refiect :
        - Proxy：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
        - Reflect：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
  let person = {
     id:'111',
     name:'nihao'
   }
   const p =  new Proxy(person, {
      	// 拦截读取属性值
          get (target, prop) {
            console.log('proxy----get---',target,prop);
          	return Reflect.get(target, prop)
          },
          // 拦截设置属性值或添加新属性
          set (target, prop, value) {
            console.log('proxy----set---',target,prop,value);
          	return Reflect.set(target, prop, value)
          },
          // 拦截删除属性
          deleteProperty (target, prop) {
             console.log('proxy----deleteProperty---',target,prop);
          	return Reflect.deleteProperty(target, prop)
          }
      })
      console.log('p==========',p);
      person.name = 'tom'  