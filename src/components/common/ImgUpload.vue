<!--  -->
<template>
  <div class="imgUpload">
    <el-upload
      action="/api/img/upload"
      ref="upload"
      :multiple="true"
      :auto-upload="true"
      list-type="picture-card"
      :on-success="imgUrlList"
      :on-change="handleChange"
      :before-upload="handleBeforeUpload"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="el-icon-download"></i>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <!-- <el-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="submitUpload"
      >上传到服务器</el-button
    > -->
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
      disabled: false,
      files: [],
      dialogVisible: false,
      dialogImageUrl: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 执行这个方法则把这个图片提交
    submitUpload() {
      this.$refs.upload.submit();
    },
    // 提交成功即可调用这个方法，获取图片url
    imgUrlList(response, file, fileList) {
      this.$emit("fileList", fileList);
      console.log(fileList);
      if(fileList.length<2){
      this.$message.warning(`至少上传两张不同角度的图片`);
      }
    },
    handleChange(file, fileList) {
      console.log(this.files);

    },
    // 预览
    handlePictureCardPreview(file) {
      this.dialogVisible = true;
      this.dialogImageUrl = file.url;
    },
    // 下载图片
    handleDownload(file) {
      console.log(file);
      var a = document.createElement("a");
      var event = new MouseEvent("click");
      a.download = file.name;
      a.href = file.url;
      a.dispatchEvent(event);
    },
    //文件移除操作
    handleRemove(file, fileList) {
      this.$refs.upload.handleRemove(file);
    },
    handlePictureCardPreview(file) {
      console.log(file);
    },

    // 上传前判断是否符合上传条件
    handleBeforeUpload(file) {
      const uploadLimit = 2;
      const uploadTypes = [
        "jpg",
        "png",
        "doc",
        "docx",
        "xlsx",
        "zip",
        "rar",
        "pdf",
      ];
      const filetype = file.name.replace(/.+\./, "");
      const isRightSize = (file.size || 0) / 1024 / 1024 < uploadLimit;
      if (!isRightSize) {
        this.$message.error("文件大小超过 " + uploadLimit + "MB");
        return false;
      }

      if (uploadTypes.indexOf(filetype.toLowerCase()) === -1) {
        this.$message.warning({
          message:
            "请上传后缀名为jpg、png、txt、pdf、doc、docx、xlsx、zip或rar的附件",
        });
        return false;
      }

      return true;
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
// .imgUpload {
//   position: absolute;
//   left: 0;
// }
/deep/.el-upload--picture-card {
  width: 110px;
  height: 110px;
  line-height: 110px;
}
/deep/.el-upload-list--picture-card .el-upload-list__item {
  width: 110px;
  height: 110px;
  line-height: 110px;
}
</style>