<!--  -->
<template>
  <div class="header_top">
    <el-menu
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      style="height: 85vh"
      active-text-color="#ffd04b"
    >
      <template v-for="item in menus">
        <el-menu-item :key="item.id" :index="item.url" v-if="!item.list">
          <template slot="title">
            <i :class=item.icon></i>
            <span> {{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>

      <template v-for="item in menus">
        <el-submenu :key="item.id" :index="item.url" v-if="item.list">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(item, index) in item.list"
              :key="index"
              :index="item.url"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span> {{ item.name }}</span>
              </template>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>



<script>
export default {
  props: {
    menus: {
      type: Array,
      default: [],
    },
  },
  components: {},
  data() {
    return {};
  },
  //     computed: { ...mapState({
  // loginInfo: state => state.loginInfo
  //   }) },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped lang='less'>
</style>
