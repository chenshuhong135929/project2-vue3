 
 import {onBeforeUnmount, onMounted, reactive} from 'vue'
 //实现鼠标打点相关的数据
 export default  function (){
    let point = reactive({
        x :0,
        y:0
    })
     
    //实现鼠标打点的相关方法
    function savePoint(event){
        
        point.x=event.pageX
        point.y=event.pageY
    }
    //实现鼠标打点的相关生命周期
    onMounted(()=>{
        console.log("onMounted");
        window.addEventListener('click',savePoint)
    })
    onBeforeUnmount(()=>{
        console.log("onBeforeUnmount");
        window.removeEventListener('click',savePoint)
    })
   
    return point
        
    
}