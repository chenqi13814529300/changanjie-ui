<!--  -->
<template>
  <div class="team">
    <div class="headerImgsBox">
      <div v-for="(item, index) in team" :key="index" class="slideDown">
        <img :src="require(`@/assets/image/${item.src}`)" alt="" />
        <div class="text">{{ item.name }}</div>
        <div class="introduce">
          <p><span>联系方式：</span>{{ item.tel }}</p>
          <p><span>毕业院校：</span>{{ item.school }}</p>
          <p><span>运营模块：</span>{{ item.work }}</p>
          <p><span>擅长领域：</span>{{ item.specialty }}</p>
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
      team: [
        {
          name: "邢榕",
          src: "girl2.png",
          tel: "1392300223",
          school: "常州大学",
          work: "素材收集",
          specialty: "信息调研",
        },

        {
          name: "张羽乔",
          src: "boy2.png",
          tel: "15706256239",
          school: "常州大学",
          work: "常安街设计与搭建",
          specialty: "编程算法、虚幻引擎开发",
        },

        {
          name: "谈国胜",
          src: "boy1.png",
          tel: "18036277708",
          school: "常州大学",
          work: "决策制定",
          specialty: "推荐系统、网络安全、量化金融",
        },
        {
          name: "陈祁",
          src: "boy3.png",
          tel: "13814529300",
          school: "常州大学",
          work: "网站开发与设计",
          specialty: "全栈开发",
        },
        {
          name: "常荷媛",
          src: "girl1.png",
          tel: "15295060580",
          school: "常州大学",
          work: "Logo设计、视频制作",
          specialty: "平面设计、视频剪辑",
        },
        {
          name: "高利勤",
          src: "girl3.png",
          tel: "13835476327",
          school: "常州大学",
          work: "财务分析",
          specialty: "财务管理",
        },
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
.team {
  width: 100%;
  position: relative;
  min-height: 210px;
}
.headerImgsBox {
  display: flex;
  justify-content: flex-start;
  width: 90%;
  margin: 4rem auto 1.5rem;
  > div {
    margin: 0 0.6rem;
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
      p {
        line-height: 1.5rem;
      }
      span {
        font-weight: 600;
        color: rgb(63, 55, 44);
      }
    }
  }
}

.bg {
  background-color: rgb(212, 212, 212);
  width: 100%;
  height: 14rem;
  position: absolute;
  bottom: 0;
}
</style>