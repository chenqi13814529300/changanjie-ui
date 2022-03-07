<!--  -->
<template>
  <div class="home">
    <el-carousel :interval="4000" type="card" height="15rem">
      <el-carousel-item v-for="item in lunbo" :key="item">
        <img class="lunboImg" :src="require(`@/assets/image/${item}`)" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="contentBox">
      <div class="left">
        <div>
          <div class="title">
            <img src="@/assets/image/01.png" alt="" />
          </div>
          <p>1、dd最最新简略消息新简略消息d</p>
          <p>2、d最最新简略消息新简略消息d</p>
          <p>3、dd最最新简略消息新简略消息d</p>
          <p>4、dd最最新简略消息新简略消息d</p>
          <p>5、dd最最新简略消息新简略消息d</p>
          <p>6、d最最新简略消息新简略消息d</p>
          <p>7、dd最最新简略消息新简略消息d</p>
          <p>8、dd最最新简略消息新简略消息d</p>
          <p>9、dd最最新简略消息新简略消息d</p>
        </div>
      </div>
      <div class="center">
          <my-map></my-map>
      </div>
      <div class="right">
        <div>
          <div class="title">
            <img src="@/assets/image/03.png" alt="" />
          </div>
          <p>申请志愿者</p>
          <p>申请消费者</p>
          <p>申请技术提供者</p>
          <p>申请商铺</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import myMap from "@/components/common/Map";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { myMap },
  data() {
    //这里存放数据
    return {
      lunbo: [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "6.jpeg",
        "7.jpeg",
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
/*@import url(); 引入公共css类*/
.home {
  height: auto;
}
.lunboImg {
  width: 100%;
}
.contentBox {
  width: 100%;
  height: 20rem;
  background-color: rgb(212, 212, 212);
  display: flex;
  padding: 2% 0;
  box-sizing: border-box;
  div {
    background-color: white;
    margin-right: 2%;
  }
  .left {
    flex: 4;
    position: relative;
    font-size: 0.8rem;
    overflow: hidden;
    > div {
      width: 90%;
      position: absolute;
      top: 10%;
      left: 50%;
      padding-bottom: 10%;
      transform: translateX(-50%);
      .title {
        width: 7rem;
        height: 1.2rem;
        // line-height: 1.2rem;
        // border-radius: 0.5rem;
        // text-align: center;
        // background-color: rgb(236, 142, 54);
        margin-bottom: 1rem;
        img {
          height: 100%;
        }
      }
      p {
        margin: 0.4rem 0;
        letter-spacing: 0.1rem;
      }
    }
  }
  .center {
    flex: 5;
    position: relative;
  }
  .right {
    flex: 3;
    position: relative;
    font-size: 0.8rem;
    overflow: hidden;
    > div {
      width: 70%;
      position: absolute;
      top: 10%;
      left: 50%;
      padding-bottom: 10%;
      transform: translateX(-50%);
      .title {
        width: 7rem;
        height: 1.2rem;
        margin-bottom: 1rem;
        img {
          height: 100%;
        }
      }
      p {
        margin: 0.4rem 0;
        letter-spacing: 0.3rem;
      }
    }
  }
}
</style>