<template>
  <div>
    <div class="todo-header">
      <div class="header-container">
        <h1 style="font-size: 20px;">My todos</h1>
        <span class="current-time">{{ currentTime }}</span>
      </div>
      <input type="text" v-model="taskName" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
      <input type="datetime-local" v-model="taskTime" class="task-time"/>
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
    add(){
      //校验数据，前后不能为空
      if(!this.taskName.trim()) return alert('不能输入空信息')
      const todoObj={id:nanoid(),title:this.taskName,done:false,taskTime:this.taskTime}

      this.receive(todoObj)
      this.taskName = '';
      this.taskTime = '';
      //但是这块就是在操作dom了，如果不用value的话，在input表单用v-model
    },
    updateTime() {
      const now = new Date();
      // 格式化时间为 HH:MM:SS 格式
      this.currentTime = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
  },
  data() {
    return {
      currentTime: '',
      taskName: '',
      taskTime: ''
    }
  },
  created() {
    // 初始化时间
    this.updateTime();
    // 每秒更新一次时间
    this.timer = setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    // 组件销毁时清除定时器
    clearInterval(this.timer);
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
.header-container {
  position: relative;
  text-align: center;
  margin-bottom: 10px;
}

.current-time {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  color: #666;
}
</style>