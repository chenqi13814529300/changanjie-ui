<!--  -->
<template>
  <div class="myHeader">
    <div class="top">
      <div class="logo">
          <img src="@/assets/image/logo.png" alt="">
      </div>
      <div class="navBar">
        <div class="content">
          <div v-for="(item, index) in titles" :key="index">
            <span
              :class="{ active: index === currentIndex }"
              @click="itemClick(index)"
              >{{ item }}</span
            >
            <span>/</span>
          </div>
          <div>
            <span class="login">登录</span>
            <span>·</span>
            <span class="register">注册</span>
          </div>
        </div>
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
    return {
      titles: ["首页", "长安街", "团队消息", "现有产品"],
      currentIndex: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    itemClick(index) {
      this.currentIndex = index;
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
.myHeader {
  width: 100%;
  height: 18%;
  background-color: rgb(212, 212, 212);
}
.top {
  height: 82%;
  width: 100%;
  display: flex;
  background-color: white;
  .logo {
    flex: 1;
    position: relative;
    img{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 70%;
    }
  }
  .navBar {
    height: 100%;
    flex: 3;
    .content {
      margin-left: 12%;
      height: 100%;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: right;
      div {
        span {
          cursor: pointer;
          margin: 0 0.4rem;
          letter-spacing: 0.3rem;
        }
      }
      .login {
        margin-right: 0;
      }
      .register {
        margin-left: 0;
      }
    }
  }
}

// 动态
.active {
  background-color: rgb(242, 167, 96);
  border-radius: 15%;
  padding: 0.3rem 0.3rem;
}
</style>