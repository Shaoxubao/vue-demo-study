<template>
  <div>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
    </div>
  </div>
</template>
 
<script>
import {nanoid} from 'nanoid'
//nanoid是一个函数，直接调用就行
export default {
  name: "myHeader",
  props:['receive'],
  methods:{
    add(event){
      //校验数据，前后不能为空
      if(!event.target.value.trim()) return alert('不能输入空信息')
      const todoObj={id:nanoid(),title:event.target.value,done:false}
      this.receive(todoObj)
      event.target.value=''
      //但是这块就是在操作dom了，如果不用value的话，在input表单用v-model
    }
  }
};
</script>
 
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
 
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>