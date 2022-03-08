<!--  -->
<template>
  <div id="login">
    <p class="title">用户登录</p>
    <el-form
      class="myForm"
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
import { mapMutations } from "vuex";
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
  methods: {
    ...mapMutations(["setLoginInfo"]),
    submitForm(formName) {
      let arr = {
        消费者: "/aaa",
        消费者: "/aaa",
        志愿者: "/volunteerManage/declare",
        技术提供员: "/ccc",
        超级管理员: "superManage",
      };

      const md5 = this.$crypto.createHash("md5");
      md5.update(this.loginInfo.password);
      this.loginInfo.password = md5.digest("hex");
      this.$refs[formName].validate((valid) => {
        console.log(this.loginInfo);
        this.$API.login.login(this.loginInfo).then((res) => {
          if (res.data.status == 200) {
            // 设置状态
            let currentInfo = {
              username: this.loginInfo.username,
              role: this.loginInfo.role,
            };
            // 设置vuex 
            this.setLoginInfo(currentInfo);
            // 设置localStorage
            currentInfo = JSON.stringify(currentInfo);
            localStorage.setItem("user", currentInfo);
            // 跳转
            this.$message.success("恭喜你，登录成功");
            this.$router.push(arr[this.loginInfo.role]);
          } else {
            this.$message.error("登录失败，请从新核实用户名密码与身份");
          }
          console.log(res);
        });
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //使用示例
    // let password = "123456";
    // const md5 = crypto.createHash("md5");
    // md5.update(password);
    // password = md5.digest("hex"); //md5password为加密后的内容，可直接传递给后端
    // let password="14323415"
    // const md5=this.$crypto.createHash("md5")
    // md5.update(password)
    // password = md5.digest("hex");
    // console.log(password);
  },
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
#login {
  width: 100%;
  height: 70%;
  background: url(~@/assets/image/loginBg.jpg);
  background-size: 100%;
  position: relative;
  text-align: center;
  .title {
    padding-top: 2rem;
    font-size: 1.5rem;
    line-height: 3rem;
    text-align: center;
  }
  .myForm {
    position: absolute;
    margin: auto;
    // width: 50%;
    top: 7rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
/deep/.el-select {
  display: block;
}
/deep/.el-input__inner {
  width: 20rem;
}
.el-button{
  margin: 0 2rem;
}
/*@import url(); 引入公共css类*/
</style>