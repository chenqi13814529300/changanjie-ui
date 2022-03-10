<!--  -->
<template>
  <div class="register">
    <register class="myReg">
      <p class="title">申报贫困点</p>
      <el-form
        class="myForm"
        :model="declareInfo"
        :rules="rules"
        ref="ruleSubmit"
        label-width="150px"
      >
        <el-form-item label="产品名称" prop="productName">
          <el-input
            v-model="declareInfo.productName"
            placeholder="请输入产品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="产品信息" prop="productInfo">
          <el-input
            type="textarea"
            v-model="declareInfo.productInfo"
            placeholder="请输入产品信息"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input
            type="tel"
            v-model="declareInfo.phone"
            placeholder="请输入联系方式"
          ></el-input>
        </el-form-item>

        <el-form-item label="所在地" prop="site">
          <el-cascader
            class="elCascader"
            size="large"
            :options="siteOptions"
            v-model="declareInfo.selectedOptions"
            @change="handleChange"
          >
          </el-cascader>
        </el-form-item>

        <el-form-item label="详细地址" prop="detailAddress">
          <el-input
            v-model="declareInfo.detailAddress"
            placeholder="请输入产品详细地址"
          ></el-input>
        </el-form-item>
        <el-form-item label="实地考察图片（至少上传两张不同角度的图片）">
          <img-upload ref="imgUpload" @fileList="getProductImg"></img-upload>
        </el-form-item>

        <el-form-item label="目前是否有加工工艺">
          <el-switch v-model="declareInfo.isCraft"></el-switch>
        </el-form-item>
        <el-form-item
          v-if="declareInfo.isCraft"
          label="加工工艺详略图（至少上传两张不同角度的图片）"
        >
          <img-upload ref="imgUpload" @fileList="getCraftImg"></img-upload>
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
import Register from "@/components/common/Register.vue";
// 三级地区引入
import { regionData, CodeToText } from "element-china-area-data";
import ImgUpload from "@/components/common/ImgUpload.vue";
import { mapGetters } from "vuex";
// import { checkEmail, checkTeleNumber, checkImg } from "@/utils/verification.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Register, ImgUpload },
  data() {
    //这里存放数据
    return {
      declareInfo: {
        productImg: null,
        craftImg: null,
        isCraft:false
      },
      // 地区海量信息
      siteOptions: regionData,
      // 三级地区: 省 市 区
      register_province: "",
      register_city: "",
      register_district: "",
      // 表单验证
      rules: {
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
  computed: {
    ...mapGetters(["getLoginInfo"]),
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   产品详略图获取
    getProductImg(fileList) {
      this.declareInfo.productImg = fileList.map((item) => item.response);
    },
    //   加工工艺详略图获取
    getCraftImg(fileList) {
      this.declareInfo.craftImg = fileList.map((item) => item.response);
    },
    submitForm(formName) {
      if (this.declareInfo.productImg.length < 2) {
        this.$message.error("提交信息有误，请核实图片个数");
      } else {
        this.$refs[formName].validate((valid) => {
          // json转化为string格式，不然后端和前端字符不匹配
          this.declareInfo.site = this.declareInfo.site.join(",");
          this.declareInfo.productImg = this.declareInfo.productImg.join(",");
          if (this.declareInfo.isCraft) {
            this.declareInfo.craftImg = this.declareInfo.craftImg.join(",");
          }
          // 获取当前用户
          this.declareInfo.username = this.getLoginInfo.username;
          this.$API.manage.declarePoor(this.declareInfo).then((res) => {
            console.log(res);
            if (res.data.status == 200) {
              this.$message.success("恭喜你，提交成功");
            } else {
              this.$message.error("提交失败");
            }
          });
        });
      }
    },
    // 地区
    handleChange(arr) {
      this.register_province = CodeToText[arr[0]];
      this.register_city = CodeToText[arr[1]];
      this.register_district = CodeToText[arr[2]];
      this.declareInfo.site = [
        this.register_province,
        this.register_city,
        this.register_district,
      ];
      console.log(this.declareInfo.site);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.$moment().format('MMMM Do YYYY, h:mm:ss a')
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
</style>