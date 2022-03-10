<!--  -->
<template>
  <div>
    <el-card>
      <el-table
        :data="getDeclarePoorList"
        border
        style="width: 100%"
        height="calc(100vh - 40px)"
      >
        <el-table-column prop="username" label="用户名" min-width="70">
        </el-table-column>
        <el-table-column prop="phone" label="电话" min-width="100">
        </el-table-column>
        <el-table-column prop="productName" label="产品名" min-width="120">
        </el-table-column>
        <el-table-column prop="site" label="地点" min-width="150">
        </el-table-column>

        <el-table-column prop="detailAddress" label="详细地址" min-width="120">
        </el-table-column>
        <el-table-column prop="createTime" label="申请时间" min-width="100">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" min-width="100">
        </el-table-column>

 <el-table-column prop="status" label="服务器列表" min-width="120" >
    	<template slot-scope="scope">
            <el-select v-model="scope.row.status" placeholder="请选择" @change="updateStatus(scope.row)">
              <el-option label="申请通过" value="申请通过"></el-option>
              <el-option label="申请未过" value="申请未过"></el-option>
              <el-option label="正在审核" value="正在审核"></el-option>
            </el-select>
    	</template>
	</el-table-column>


        <!-- <el-table-column prop="status" label="申请状态" min-width="100">
        </el-table-column> -->
        <el-table-column label="操作" min-width="140">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small" @click="reject(scope.row)"
              >撤销申请</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
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
    ...mapGetters(["getDeclarePoorList"]),
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    reject(row) {
      row.status = "审核未过";
      this.$API.manage.updateDeclarePoorStatus(row).then((res) => {
        if (res.data.status == 200) {
          this.$message.success("恭喜你，修改状态成功");
        } else {
          this.$message.error("修改失败");
        }
      });
    },
    updateStatus(row){
         this.$API.manage.updateDeclarePoorStatus(row).then((res) => {
        if (res.data.status == 200) {
          this.$message.success("恭喜你，修改状态成功");
        } else {
          this.$message.error("修改失败");
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.getDeclarePoorList);
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
</style>