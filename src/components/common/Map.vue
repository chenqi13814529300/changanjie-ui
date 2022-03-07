<!--  -->
<template>
  <div class="com-container" @dblclick="revertMap">
    <div class="com-chart" ref="map_ref"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
import { getProvinceMapInfo } from "@/utils/map_utils.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      chartInstance: null,
      allData: null,
      //   缓存处理
      mapData: {},
    };
  },
  //监听属性 类似于data概念
  computed: {
  },
  //监控data中的数据变化
  watch: {
    theme() {
      // 当前图表销毁
      this.chartInstance.dispose();
      // 以最新的主题初始化图表对象
      this.initChart();
      // 屏幕适配
      // this.screenAdapter();
      // 更新图表的展示
      // this.updateChart();
    },
  },
  //方法集合
  methods: {
    async initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.map_ref,"chalk");

      const ret = await axios.get(
        "http://localhost:8080/static/map/china.json"
      );
      this.$echarts.registerMap("china", ret.data);
      console.log(ret);
      const initOption = {
        title: {
          text: "｜商家分布",
          left: 20,
          top: 20,
        },
        // 地图配置
        geo: {
          type: "map",
          map: "china",
          top: "5%",
          bottom: "5%",
          itemStyle: {
            areaColor: "rgb(184, 219, 230)",
            borderColor: "#333",
          },
        },
        legend: {
          left: "5%",
          bottom: "5%",
          orient: "vertical",
        },
      };
      this.chartInstance.setOption(initOption);
    },

    async getData() {
      // 获取散点图的数据
       const ret = await axios.get(
        "http://localhost:8080/static/map/map.json"
      );
      this.allData = ret.data;
      this.updateChart();
    },
    updateChart() {
      // 处理图表所用的数据
      // 图例的数据
      const lengendArr = this.allData.map((item) => item.name);

      //   如果想在地图中显示散点的数据，需要给图表添加坐标
      const seriesArr = this.allData.map((item) => {
        return {
          type: "effectScatter",
          rippleEffect: {
            scale: 6,
            brushType: "stroke",
          },
          name: item.name,
          data: item.children,
          coordinateSystem: "geo",
        };
      });

      const dataOption = {
        legend: {
          data: lengendArr,
        },
        series: seriesArr,
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.map_ref.offsetWidth / 100) * 3.6;

      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize,
          },
        },
        legend: {
          itemWidth: titleFontSize / 2,
          itemHeight: titleFontSize / 2,
          itemGap: titleFontSize / 2,
          textStyle: {
            fontSize: titleFontSize / 2,
          },
        },
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    // 回到中国地图
    revertMap() {
      const reverOption = {
        geo: {
          map: "china",
        },
      };
      this.chartInstance.setOption(reverOption);
    },
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.$socket.registerCallBack("mapData", this.getData);

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initChart();
    this.getData()
    //    this.$socket.send({
    //   action: "getData",
    //   socketType: "mapData",
    //   chartName: "map",
    //   value: "",
    // });
    // window.addEventListener("resize", this.screenAdapter);
    // this.screenAdapter();
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    // this.$socket.unrRegisterCallBack("mapData");

    // window.removeEventListener("resize", this.screenAdapter);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/*@import url(); 引入公共css类*/
.com-container {
  width: 100%;
  height: 100%;
  overflow: hidden;

}

.com-chart {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>