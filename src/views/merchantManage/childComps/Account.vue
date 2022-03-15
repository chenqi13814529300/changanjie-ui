<!--  -->
<template>
  <div class="">
      <el-card>
              <el-descriptions title="流水" border :column="5"  direction="vertical">
        <el-descriptions-item label="产业链状态">是</el-descriptions-item>
        <el-descriptions-item label="年销量">189</el-descriptions-item>
        <el-descriptions-item label="预计流水">28002¥</el-descriptions-item>
        <el-descriptions-item label="扣除租金后">
            19000¥
        </el-descriptions-item>
        <el-descriptions-item label="实际利润"
          >23900¥</el-descriptions-item
        >
      </el-descriptions>
      </el-card>
    <el-card>
  
      <div ref="income" class="income"></div>
    </el-card>
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
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.income,"chalk");
      var xDataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      var yDataArr = [
        0, 2158, 2810, 3433, 2232, 1158, 3910, 4233, 7232, 2758, 4010, 5233,
        6232,
      ];

      // 对图表初始化配置的控制
      const initOption = {
        toolbox: {
          feature: {
            saveAsImage: {}, // 导出图片
            dataView: {}, // 数据视图
            restore: {}, // 重置
            dataZoom: {}, // 区域缩放
            magicType: {
              type: ["bar", "line"],
            }, // 动态图表类型的切换
          },

          right: 60,
        },
        tooltip: {
          trigger: "axis",
          formatter: "{b} 的收益是 {c}",
        },
        title: {
          text: "订单收益", // 标题文字
          left: 50, // 标题距离左边的距离
          top: 10, // 标题距离顶部的距离
        },
        xAxis: {
          type: "category",
          data: xDataArr,

          boundaryGap: false,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "line",
            data: yDataArr,
            stack: "all", // 堆叠图的设置
            areaStyle: {},
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值",
                },
                {
                  type: "min",
                  name: "最小值",
                },
              ],
            },
            markLine: {
              // 标记线
              data: [
                {
                  type: "average",
                  name: "平均值",
                },
              ],
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initChart();
  },
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
.income {
  width: 100%;
  height: 20rem;
}
</style>