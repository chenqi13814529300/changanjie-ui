<!--  -->
<template>
  <div class="product">
    <div class="productList">
      <div v-for="(item, index) in headerImgs" :key="index">
        <div class="productItem swing"></div>
        <div class="text">产品一</div>
        <div class="introduce swing">
          <p class="title">产品简介：</p>
          <p>
            桂花是中国木犀属众多树木的习称，代表物种木犀（学名：Osmanthus
            fragrans (Thunb.)
            Lour.），又名岩桂，系木犀科常绿灌木或小乔木，质坚皮薄，叶长椭圆形面端尖，对生，经冬不凋。花生叶腑间，花冠合瓣四裂，形小，其园艺品种繁多，最具代表性的有金桂、银桂、丹桂、月桂等。
            桂花是中国传统十大名花之一，集绿化、美化、香化于一体的观赏与实用兼备的优良园林树种，
          </p>
        </div>
      </div>
    </div>
    <div class="bg"></div>
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
      headerImgs: [
        "boy1.png",
        "girl1.png",
        "boy2.png",
        "girl2.png",
        "boy2.png",
      ],
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
.product {
  position: relative;
}
.productList {
  display: flex;
  height: 30rem;
  margin-top: 2rem;
  > div {
    flex: 1;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    .productItem {
      flex: 3;
      background-color: rgb(212, 212, 212);
    }
    .text {
      flex: 1;
      text-align: center;
      line-height: 3rem;
    }
    .introduce {
      flex: 6;
      font-weight: 400;
      position: relative;
      font-size: 0.7rem;
      overflow: hidden;
      z-index: 99;

      .title {
        margin: 1rem;
      }
    }
  }
}

.bg {
  background-color: rgb(212, 212, 212);
  width: 100%;
  height: 18rem;
  position: absolute;
  bottom: 0;
}

// 动画组
.swing {
  animation: swing_frames 1s 0.2s ease both;
}
@keyframes swing_frames {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
</style>