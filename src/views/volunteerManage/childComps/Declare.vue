<!--  -->
<template>
  <div class="register">
    <register class="myReg">
      <p class="title">申报贫困点</p>
      <el-form
      class="myForm"
        :model="merchantInfo"
        :rules="rules"
        ref="ruleSubmit"
        label-width="150px"
      >

        <el-form-item label="产品信息" prop="product">
          <el-input
            type="textarea"
            v-model="merchantInfo.product"
            placeholder="请输入产品信息"
          ></el-input>
        </el-form-item>

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
            placeholder="请输入产品详细地址"
          ></el-input>
        </el-form-item>
        <el-form-item label="实地考察图片（至少上传两张不同角度的图片）">
          <img-upload ref="imgUpload" @fileList="getProductImg"></img-upload>
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

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Register, ImgUpload },
  data() {
    //这里存放数据
    return {
      merchantInfo: {
        productImg: null,
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
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   产品详略图获取
    getProductImg(fileList) {
      this.merchantInfo.productImg = fileList.map((item) => item.response);
    },

    submitForm(formName) {

      this.$refs[formName].validate((valid) => {
        // json转化为string格式，不然后端和前端字符不匹配
        this.merchantInfo.site = this.merchantInfo.site.join(",");
        this.merchantInfo.productImg = this.merchantInfo.productImg.join(",");

        console.log(this.merchantInfo);

        this.$API.register.merchantRegister(this.merchantInfo).then((res) => {
          console.log(res);
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