<!--  -->
<template>
  <div class="product">
    <div class="productList">
      <div v-for="(item, index) in product" :key="index">
        <div class="productItem swing">
          <img :src="require(`@/assets/image/${item.src}`)" alt="" />
        </div>
        <div class="text">{{ item.id }}</div>
        <div class="introduce swing">
          <p class="title">产品简介：</p>
          <p>
            {{ item.introduce }}
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
      product: [
        {
          id: "产品一",
          introduce:
            "吉林人参酒，以被誉为人参中珍品的长白山人参泡酒制成，有大补元气，补脾益沛，生津固脱，安神益智的功效。适用于久病气虚，脾肺不足，食欲不振，动则气喘，自汗乏力，面色黄白少华，或脉虚，津伤口渴、消渴，神经衰弱，失眠多梦，疲倦心悸，健忘，阳痿等患者服用。",
          src: "p1.png",
        },
        {
          id: "产品二",
          introduce:
            "新疆棉花，是我国产量最高，质量最优的棉花种类，新疆水土光热资源丰富，气候干旱少雨，种植棉花条件得天独厚。新疆棉花品种多样，有长绒棉、新海绵、混选2号等，品质属于世界顶级，以纤维长、色泽洁白、拉力强、产量高著称。",
          src: "p2.png",
        },
        {
          id: "产品三",
          introduce:
            "临县红枣，临县红枣，山西省临县特产，国家地理标志产品。临县红枣个大核小，皮薄肉厚，经农业部果品及苗木质量监督检验测试中心鉴定，含有15种氨基酸、10种维生素和14种微量元素，鲜枣维C含量是苹果的60倍，是柑橘的10倍，特别是富含具有抗癌保健作用的环磷酸腺苷，有“果中之王”的美誉。2013年12月，临县红枣成功获批国家地理标志保护产品称号。",
          src: "p3.png",
        },
        {
          id: "产品四",
          introduce:
            "烟台苹果，栽培历史悠久，品种齐全，产量高，果实个大、果形正、色泽鲜艳红润，外表光滑细腻，口味酸甜适口，且果肉硬度大，纤维少，质地细，果汁含量在89%以上，糖分含量高，氨基酸含量较高，有帮助消化、养颜润肤的独特作用。",
          src: "p4.png",
        },
        {
          id: "产品五",
          introduce:
            "资中血橙，四川省内江市资中县特产，中国国家地理标志产品。果形整齐端庄，色泽鲜丽，果大皮薄，肉质脆嫩化渣，汁多味浓，紫红色，有玫瑰香味，无核，品质极优，其维生素C是其他橙类的两倍，它所含的花青素苷可预防心血管疾病，能起到抗氧化作用，丰富的类黄酮、β-胡罗卜素等是其他柑桔类不具有的特殊成分，是很好的保健食品，具有防癌作用.",
          src: "p5.png",
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
.product {
  position: relative;
}
.productList {
  display: flex;
  height: 36rem;
  margin-top: 2rem;
  > div {
    height: 100%;
    flex: 1;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    .productItem {
      flex: 4;
      background-color: rgb(212, 212, 212);
      overflow: hidden;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .text {
      flex: 1;
      text-align: center;
      line-height: 3rem;
    }
    .introduce {
      flex: 5;
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