<!--  -->
<template>
  <div class="myFooter">
    <div class="left">
      <div>
        <img src="@/assets/image/logo.png" alt="" />
        <div>合作方：Wa|Mart|nc</div>
        <div>地址：江苏省常州市武进区常州大学</div>
        <div>千+万户常安街打造的虚拟商户平台</div>
        <div>转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源</div>
        <div>商业媒体及纸媒请先联系1146706468@qq.com</div>
      </div>
    </div>
    <div class="center">
      <div>
        <p>友情链接:</p>
        <div>https://blog.csdn.net/qq_59068750</div>
        <div>https://blog.csdn.net/qq_59068750</div>
        <div>https://blog.csdn.net/qq_59068750</div>
        <div>https://blog.csdn.net/qq_59068750</div>
      </div>
    </div>
    <div class="right">
      <div class="wx_box">
        <img src="@/assets/image/wx.jpg" alt="微信联系方式" class="wx" />
      </div>

    </div>
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
    return {};
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
.myFooter {
  width: 100%;
  height: 8rem;
  min-height: 130px;
  display: flex;
  .left {
    display: flex;
    flex: 7;
    position: relative;
    > div {
      position: absolute;
      right: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      width: 85%;
      img {
        width: 10rem
      }
      div {
        margin: 0.1rem 0;
        font-size: 0.5rem;
        letter-spacing: 0.2rem;
      }
    }
  }
  .center {
    flex: 4;
    position: relative;
    overflow: hidden;
    > div {
      height: 100%;
      width: 80%;
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      p {
        font-size: 0.8rem;
      }
      div {
        margin: 0.2rem 0;
        font-size: 0.5rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  .right {
    flex: 3;
    .wx_box {
      // position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .wx {
        width: 45%;
      }
    }
  }
}



</style>