<!--  -->
<template>
  <div class="team">
    <div class="headerImgsBox">
      <div v-for="(item, index) in headerImgs" :key="index">
        <img :src="require(`@/assets/image/${item}`)" alt="" />
        <div class="text">成员一</div>
        <div class="introduce">
          <p>联系方式：</p>
          <p>毕业院校：</p>
          <p>运营模块：</p>
          <p>擅长领域：</p>
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
        "girl2.png",
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

.team{
    width: 100%;
    position: relative;
}
.headerImgsBox {
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin: 4rem auto 1.5rem;
  > div {
    margin: 0 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
    }
    .text {
      margin-top: 1rem;
    }
    .introduce {
      margin-top: 3rem;
      font-size: 0.7rem;
      height: 12rem;
      z-index: 99;
      font-weight: 400;
      letter-spacing: .2rem;
    }
  }
}

.bg{
      background-color: rgb(212, 212, 212);
      width: 100%;
      height: 14rem;
      position: absolute;
    bottom: 0;
}
</style>