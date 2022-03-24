<!--  -->
<template>
  <div class="student_register">
    <register>
      <h2 class="title">学生注册</h2>
      <el-form
        :model="studentInfo"
        :rules="rules"
        ref="ruleSubmit"
        label-width="100px"
      >
        <!-- 机构名称 start -->
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="studentInfo.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 机构名称 end -->
        <!-- 机构名称 start -->
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="studentInfo.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>

        <!-- 手机号 start -->
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model="studentInfo.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 手机号 end -->

        <!-- 联系地址 三级联动 start -->
        <el-form-item label="产品地址" prop="site">
          <div id="app">
            <el-cascader
              size="large"
              :options="siteOptions"
              v-model="studentInfo.selectedOptions"
              @change="handleChange"
            >
            </el-cascader>
          </div>
        </el-form-item>

        <!-- 联系地址 三级联动 end-->

        <!-- 详细地址 start -->
        <el-form-item label="详细地址" prop="detailAddress">
          <el-input
            v-model="studentInfo.detailAddress"
            placeholder="请输入产品详细地址"
          ></el-input>
        </el-form-item>
        <!-- 详细地址end -->
        <img-upload ref="imgUpload" @fileList="getFileList"></img-upload>
        <el-form-item class="btns">
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
import Register from "@/components/common/Register.vue";
// 三级地区引入
import { regionData, CodeToText } from "element-china-area-data";
import ImgUpload from "@/components/common/ImgUpload.vue";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Register, ImgUpload },
  data() {
    //  核对机构名称是否已经注册过（需要连接后端接口）
    let checkStudentUsername = (rule, value, callback) => {
      // 调用 检测 公司名接口  =>返回一个true 或者false
      // if(...) 正确就执行下面的    错误就执行callback个已经被注册了
      this.$API.register
        .checkStudentUsername(this.studentInfo.username)
        .then((res) => {
          if (value === undefined) {
            return callback(new Error("该用户名不能为空"));
          }
          if (res.data.status == 100) {
            return callback(new Error("该用户名已经被注册"));
          } else {
            return callback();
          }
        });
    };
    //这里存放数据
    return {
      studentInfo: {
        picture: null,
      },
      // 地区海量信息
      siteOptions: regionData,
      // 三级地区: 省 市 区
      register_province: "",
      register_city: "",
      register_district: "",
      // 表单验证
      rules: {
        username: {
          required: true,
          validator: checkStudentUsername,
          trigger: "blur",
        },
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
          message: "不能为空,请选择产品地址",
          trigger: "change",
        },
        detailAddress: {
          required: true,
          message: "不能为空,请输入详细产品地址",
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
    getFileList(fileList) {
      // 图片选定后自动提交给服务器，反正个人信息里有url即可
      // 也可以进行删除服务器图片操作，这里先不加了，不影响
      this.studentInfo.picture = fileList.map(item=>item.response);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // json转化为string格式，不然后端和前端字符不匹配
        this.studentInfo.site = this.studentInfo.site.join(",");
        this.studentInfo.picture = this.studentInfo.picture.join(",");
        console.log(this.studentInfo);
        this.$API.register.studentRegister(this.studentInfo).then((res) => {
          console.log(res);
        });
      });
    },
    // 地区
    handleChange(arr) {
      this.register_province = CodeToText[arr[0]];
      this.register_city = CodeToText[arr[1]];
      this.register_district = CodeToText[arr[2]];
      this.studentInfo.site = [
        this.register_province,
        this.register_city,
        this.register_district,
      ];
      console.log(this.studentInfo.site);
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
.btns{
  display: flex;
  justify-content: center;
  .el-button{
    margin: 0 2rem;
  }
}

</style>