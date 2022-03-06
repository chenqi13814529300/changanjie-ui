<!--  -->
<template>
  <div class="scutomer_register">
    <register>
      <h2 class="title">志愿者注册</h2>
      <el-form
        :model="volunteerInfo"
        :rules="rules"
        ref="ruleSubmit"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="volunteerInfo.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="volunteerInfo.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 手机号 start -->
        <el-form-item label="真实姓名" prop="realName">
          <el-input
            v-model="volunteerInfo.realName"
            placeholder="请输入真实姓名"
          ></el-input>
        </el-form-item>
        <!-- 手机号 end -->

        <el-form-item label="年龄" prop="age">
          <el-input
            v-model="volunteerInfo.age"
            placeholder="请输入年龄"
          ></el-input>
        </el-form-item>
        <!-- 手机号 start -->
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model="volunteerInfo.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 手机号 end -->
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="volunteerInfo.email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>

<el-form-item label="学校" prop="school">
          <el-input
            v-model="volunteerInfo.school"
            placeholder="请输入学校"
          ></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="studentId">
          <el-input
            v-model="volunteerInfo.studentId"
            placeholder="请输入学号"
          ></el-input>
        </el-form-item>

        <el-form-item label="所在地" prop="site">
            <el-cascader
            class="elCascader"
              size="large"
              :options="siteOptions"
              v-model="volunteerInfo.selectedOptions"
              @change="handleChange"
            >
            </el-cascader>
        </el-form-item>


        <el-form-item label="详细地址" prop="detailAddress">
          <el-input
            v-model="volunteerInfo.detailAddress"
            placeholder="请输入产品详细地址"
          ></el-input>
        </el-form-item>
    
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleSubmit')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleSubmit')">重置</el-button>
        </el-form-item>
      </el-form>
    </register>
  </div>
</template>

<script>
import Register from "../../components/common/Register.vue";
// 三级地区引入
import { regionData, CodeToText } from "element-china-area-data";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Register},
  data() {
    // let checkVolunteerUsername = (rule, value, callback) => {
    //   this.$API.register
    //     .checkVolunteerUsername(this.volunteerInfo.username)
    //     .then((res) => {
    //       if (value === undefined) {
    //         return callback(new Error("该用户名不能为空"));
    //       }
    //       if (res.data.status == 100) {
    //         return callback(new Error("该用户名已经被注册"));
    //       } else {
    //         return callback();
    //       }
    //     });
    // };
    //这里存放数据
    return {
      volunteerInfo: {
      },
      // 地区海量信息
      siteOptions: regionData,
      // 三级地区: 省 市 区
      register_province: "",
      register_city: "",
      register_district: "",
      // 表单验证
      rules: {
        // username: {
        //   required: true,
        //   validator: checkCustomerUsername,
        //   trigger: "blur",
        // },
        password: {
          required: true,
          message: "密码不能为空",
          trigger: "blur",
        },
        phone: {
          required: true,
          message: "电话号码不能为空",
          trigger: "blur",
        },
        site: {
          required: true,
          message: "不能为空,请选择所处地址",
          trigger: "change",
        },
        detailAddress: {
          required: true,
          message: "不能为空,请输入详细家庭地址",
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
    // getFileList(fileList) {
    //   // 图片选定后自动提交给服务器，反正个人信息里有url即可
    //   // 也可以进行删除服务器图片操作，这里先不加了，不影响
    //   this.volunteerInfo.picture = fileList.map((item) => item.response);
    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // json转化为string格式，不然后端和前端字符不匹配
        this.volunteerInfo.site = this.volunteerInfo.site.join(",");
        // this.studentInfo.picture = this.studentInfo.picture.join(",");
        console.log(this.volunteerInfo);
        this.$API.register.volunteerRegister(this.volunteerInfo).then((res) => {
          console.log(res);
        });
      });
    },
    // 地区
    handleChange(arr) {
      this.register_province = CodeToText[arr[0]];
      this.register_city = CodeToText[arr[1]];
      this.register_district = CodeToText[arr[2]];
      this.volunteerInfo.site = [
        this.register_province,
        this.register_city,
        this.register_district,
      ];
      console.log(this.volunteerInfo.site);
    },
  },
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
/*@import url(); 引入公共css类*/
.elCascader{
  position: absolute;
  left: 0;
}
// /deep/.el-input__inner{
//   width: 300px;
// }
</style>