<!--  -->
<template>
  <div id="login">
    <h2>用户登录</h2>
    <el-form
      :model="loginInfo"
      :rules="rules"
      ref="ruleSubmit"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="loginInfo.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
  
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginInfo.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="loginInfo.role" placeholder="请选择登录的角色">
          <el-option label="消费者" value="消费者"></el-option>
          <el-option label="商户" value="商户"></el-option>
          <el-option label="志愿者" value="志愿者"></el-option>
          <el-option label="技术提供者" value="技术提供者"></el-option>
          <el-option label="超级管理员" value="超级管理员"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleSubmit')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleSubmit')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginInfo: {},
      rules: {
        // username: {
        //   required: true,
        //   validator: checkStudentUsername,
        //   trigger: "blur",
        // },
        password: {
          required: true,
          message: "密码不能为空",
          trigger: "blur",
        },
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="less">
#login{
     margin: auto;
    width: 50%;
}
/deep/.el-select{
  display: block;
}
/*@import url(); 引入公共css类*/
</style>