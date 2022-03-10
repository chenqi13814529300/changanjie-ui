<!--  -->
<template>
  <div class="">
    <el-table
      :data="declarePoorByUsername"
      border
      style="width: 100%"
      height="85vh"
    >
      <el-table-column prop="username" label="用户名" min-width="70">
      </el-table-column>
      <el-table-column prop="phone" label="电话" min-width="100">
      </el-table-column>
      <el-table-column prop="product" label="申请产品" min-width="120">
      </el-table-column>
      <el-table-column prop="site" label="地点" min-width="150">
      </el-table-column>

      <el-table-column prop="detailAddress" label="详细地址" min-width="120">
      </el-table-column>
      <el-table-column prop="createTime" label="申请时间" min-width="100">
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间" min-width="100">
      </el-table-column>
      <el-table-column prop="status" label="申请状态" min-width="100">
      </el-table-column>
      <el-table-column label="操作" min-width="140">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small" @click="agree(scope.row)"
            >撤销申请</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters } from "vuex";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      declarePoorByUsername: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["getLoginInfo"]),
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getDeclarePoorByUsername() {
      console.log();
      this.$API.manage
        .getDeclarePoorByUsername(this.getLoginInfo.username)
        .then((res) => {
          this.declarePoorByUsername = res.data.data;
          console.log(res);
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getDeclarePoorByUsername();
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
<style scoped>
/*@import url(); 引入公共css类*/
</style>