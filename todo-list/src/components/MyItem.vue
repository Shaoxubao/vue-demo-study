<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{todo.title}}   &nbsp;&nbsp;&nbsp;&nbsp; {{todo.taskTime | formatDate}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <!-- 这里的click触动的方法不能再用deleteTodo了因为那是app里定义的方法你可以拿来用不能再重新声明用 -->
  </li>
</template>
 
<script>
export default {
  name: "myItem",
  //接收todo对象
  props:['todo','checkTodo','deleteTodo'],
  methods: {
    handleCheck(id){
    this.checkTodo(id)
   },
   handleDelete(id){
     if(confirm('确定要删除吗？')){//确定的话返回true
       this.deleteTodo(id)
     }
     
   }
   },
};
</script>
 
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
 
li label {
  float: left;
  cursor: pointer;
}
 
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
 
li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}
 
li:before {
  content: initial;
}
 
li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
</style>