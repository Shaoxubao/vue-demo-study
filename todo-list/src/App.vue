<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <myHeader :receive="receive"/> <!-- 头部组件，通过props传递receive方法 -->
        <!-- 把一个方法传给myHeader -->
        <myList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <myFooter :todos="todos" 
        :checkAllTodo="checkAllTodo" 
        :clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>
 
<script>
import myFooter from "./components/MyFooter";
import myHeader from "./components/MyHeader";
import myList from "./components/MyList";
//import myItem from './components.myItem'//这块不用引入item了因为它是包括在list中的
 
// 交互的样式
export default {
  name: "App",
  components: {
    myFooter,
    myHeader,
    myList,
  },
  //数据在app里，那么对数据的所有增删改查都应该在app里
  data(){
    return {
      todos:[
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'睡觉',done:true},
        {id:'003',title:'抽烟',done:false},
        {id:'004',title:'喝酒',done:false},
        // 一般id都用字符串，因为数字是有尽头的
      ]
    }
  },
  methods:{
    // 添加一个todo
    receive(todoObj){
      this.todos.unshift(todoObj)
    },
    // 勾选/取消勾选
    checkTodo(id)
    {
      this.todos.forEach((todo)=>{
        if(todo.id==id) todo.done=!todo.done 
      })
    },
    deleteTodo(id)
    {
      this.todos=this.todos.filter((todo)=>{
        return todo.id!==id
      })
    },
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done=done
      })
    },
    clearAllTodo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    },
  }
 
};
</script>
<style scoped>
/*base*/
body {
  background: #fff;
}
 
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
 
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
 
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
 
.btn:focus {
  outline: none;
}
 
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
 
</style>