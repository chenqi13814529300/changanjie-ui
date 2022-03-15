<!--  -->
<template>
  <div class="register">
    <register class="myReg">
      <p class="title">商户注册</p>
      <el-form
        class="myForm"
        :model="merchantInfo"
        :rules="rules"
        ref="ruleSubmit"
        label-width="150px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="merchantInfo.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="merchantInfo.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 手机号 start -->
        <el-form-item label="真实姓名" prop="realName">
          <el-input
            v-model="merchantInfo.realName"
            placeholder="请输入真实姓名"
          ></el-input>
        </el-form-item>
        <!-- 手机号 end -->

        <el-form-item label="年龄" prop="age">
          <el-input
            v-model.number="merchantInfo.age"
            placeholder="请输入年龄"
          ></el-input>
        </el-form-item>
        <!-- 手机号 start -->
        <el-form-item label="手机号" prop="phone">
          <el-input
            v-model="merchantInfo.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <!-- 手机号 end -->
        <el-form-item label="邮箱" prop="email">
          <el-input
            v-model="merchantInfo.email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
        <!-- 
        <el-form-item label="目前年收入" prop="annualIncome">
          <el-input
            v-model="merchantInfo.annualIncome"
            placeholder="请输入目前年收入"
          ></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="产品名称" prop="productName">
          <el-input
            v-model="merchantInfo.productName"
            placeholder="请输入产品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="产品信息" prop="productInfo">
          <el-input
            type="textarea"
            v-model="merchantInfo.productInfo"
            placeholder="请输入产品信息"
          ></el-input>
        </el-form-item> -->

        <el-form-item label="所在地" prop="site">
          <el-cascader
            class="elCascader"
            size="large"
            :options="siteOptions"
            v-model="merchantInfo.selectedOptions"
            @change="handleChange"
          >
          </el-cascader>
        </el-form-item>

        <el-form-item label="详细地址" prop="detailAddress">
          <el-input
            v-model="merchantInfo.detailAddress"
            placeholder="请输入详细地址"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="产品详略图（至少上传两张不同角度的图片）">
          <img-upload ref="imgUpload" @fileList="getProductImg"></img-upload>
        </el-form-item> -->

        <!-- <el-form-item label="目前是否有加工工艺">
          <el-switch v-model="merchantInfo.isCraft"></el-switch>
        </el-form-item>
        <el-form-item
          v-if="merchantInfo.isCraft"
          label="加工工艺详略图（至少上传两张不同角度的图片）"
        >
          <img-upload ref="imgUpload" @fileList="getCraftImg"></img-upload>
        </el-form-item> -->
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
import Register from "@/components/common/Register.vue";
// 三级地区引入
import { regionData, CodeToText } from "element-china-area-data";
import ImgUpload from "@/components/common/ImgUpload.vue";
import { checkEmail, checkTeleNumber, checkAge } from "@/utils/verification.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Register, ImgUpload },
  data() {
    //这里存放数据
    return {
      merchantInfo: {
        productImg: null,
        craftImg: null,
        isCraft: false,
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
          validator: this.checkUsername(),
          trigger: "blur",
        },
        password: {
          required: true,
          message: "密码不能为空",
          trigger: "blur",
        },
        age: {
          required: true,
          validator: checkAge(),
          trigger: "blur",
        },

        phone: {
          required: true,
          validator: checkTeleNumber(),
          trigger: "blur",
        },
        email: {
          required: true,
          validator: checkEmail(),
          trigger: "blur",
        },
        realName: {
          required: true,
          message: "真实姓名不能为空",
          trigger: "blur",
        },
        annualIncome: {
          required: true,
          message: "目前收入不能为空",
          trigger: "blur",
        },
        productName: {
          required: true,
          message: "产品名称不能为空",
          trigger: "blur",
        },
        productInfo: {
          required: true,
          message: "产品信息不能为空",
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
    checkUsername() {
      let checkUsername = (rule, value, callback) => {
        this.$API.register.checkUsername(value).then((res) => {
          if (value === undefined) {
            return callback(new Error("该用户名不能为空"));
          }
          if (value.length > 8) {
            return callback(new Error("该用户名太长,请设置1~8位"));
          }
          if (res.data.status == 100) {
            return callback(new Error("该用户名已经被注册"));
          } else {
            return callback();
          }
        });
      };
      return checkUsername;
    },

    //   产品详略图获取
    // getProductImg(fileList) {
    //   // 图片选定后自动提交给服务器，反正个人信息里有url即可
    //   // 也可以进行删除服务器图片操作，这里先不加了，不影响
    //   this.merchantInfo.productImg = fileList.map((item) => item.response);
    // },
    //   加工工艺详略图获取
    // getCraftImg(fileList) {
    //   this.merchantInfo.craftImg = fileList.map((item) => item.response);
    // },
    // submitForm(formName) {
    //   if (this.merchantInfo.productImg.length < 2) {
    //     this.$message.error("提交信息有误，请核实图片个数");
    //   } else {
    //     // 加密
    //     const md5 = this.$crypto.createHash("md5");
    //     md5.update(this.merchantInfo.password);
    //     this.merchantInfo.password = md5.digest("hex");

    //     this.$refs[formName].validate((valid) => {
    //       // json转化为string格式，不然后端和前端字符不匹配
    //       this.merchantInfo.site = this.merchantInfo.site.join(",");
    //       this.merchantInfo.productImg = this.merchantInfo.productImg.join(",");
    //       if (this.merchantInfo.isCraft) {
    //         this.merchantInfo.craftImg = this.merchantInfo.craftImg.join(",");
    //       }

    //       this.$API.register.merchantRegister(this.merchantInfo).then((res) => {
    //         if (res.data.status == 200) {
    //           this.$message.success("恭喜你，注册成功");
    //           this.$router.push("/login");
    //         } else {
    //           this.$message.error("注册失败");
    //         }
    //       });
    //     });
    //   }
    // },
    submitForm(formName) {
      // 加密
      const md5 = this.$crypto.createHash("md5");
      md5.update(this.merchantInfo.password);
      this.merchantInfo.password = md5.digest("hex");

      this.$refs[formName].validate((valid) => {
        // json转化为string格式，不然后端和前端字符不匹配
        this.merchantInfo.site = this.merchantInfo.site.join(",");
        this.$API.register.merchantRegister(this.merchantInfo).then((res) => {
          if (res.data.status == 200) {
            this.$message.success("恭喜你，注册成功");
            this.merchantInfo.role="商户"
            this.$router.push({
              path:'/login',
              query:{
                loginInfo:this.merchantInfo
              }
            });
          } else {
            this.$message.error("注册失败");
          }
        });
      });
    },
    // 地区
    handleChange(arr) {
      this.register_province = CodeToText[arr[0]];
      this.register_city = CodeToText[arr[1]];
      this.register_district = CodeToText[arr[2]];
      this.merchantInfo.site = [
        this.register_province,
        this.register_city,
        this.register_district,
      ];
      console.log(this.merchantInfo.site);
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
</style>