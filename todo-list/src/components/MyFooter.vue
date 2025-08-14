<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @click="checkAll"/>
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{total}} </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
 
<script>
export default {
  name: "myFooter",
  props:['todos','checkAllTodo','clearAllTodo'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      //第二次的pre是第一次运行结果的返回值，第一次pre是0但是没有return所以第二次pre=undefined
     //current是每一个todo项
 
    //  return this.todos.reduce((pre,current)=>{
    //    return pre+(current.done?1:0)
    //  },0)
      return this.todos.reduce((pre,current)=>pre+(current.done?1:0),0)
     //最后一次调用箭头函数的返回值就作为reduce的返回值
    },
    isAll(){
      if(this.total==this.doneTotal&&this.doneTotal>0) return true
      return false
      //return this.total==this.doneTotal
    },
    
  },
  methods:{
    checkAll(e){
     this.checkAllTodo(e.target.checked)
      //还是得动app里的数据,得this.checkAllTodo，methods又没有
    },
    clearAll(){
      this.clearAllTodo()
    }
  }
};
</script>
 
<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
 
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
 
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
 
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>