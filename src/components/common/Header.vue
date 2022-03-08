<!--  -->
<template>
  <div class="myHeader">
    <div class="top">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="" />
      </div>
      <div class="navBar">
        <div class="content">
          <div v-for="(item, index) in titles" :key="index">
            <router-link :to="item.url">
              <span
                :class="{ active: index === currentIndex }"
                @click="itemClick(index)"
                >{{ item.name }}</span
              >
            </router-link>
            <span>/</span>
          </div>
          <div>
            <span class="login" @click="toLongin">登录</span>
            <span>·</span>
            <span class="register" @click="dialogFormVisible = true">注册</span>
          </div>
          <div class="loginStatus" v-if="isLogin">
            <span><i class="el-icon-user"></i>{{ getLoginInfo.username }}</span>
            <span @click="loginOut">退出</span>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="注册角色" width="20rem" :visible.sync="dialogFormVisible">
      <el-select v-model="selectRole" placeholder="请选择注册的角色">
        <el-option label="消费者" value="/customerRegister"></el-option>
        <el-option label="商户" value="/merchantRegister"></el-option>
        <el-option label="志愿者" value="/volunteerRegister"></el-option>
        <el-option label="技术提供者" value="/technicistRegister"></el-option>
      </el-select>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="toRegister">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapGetters, mapMutations } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // "首页", "长安街", "团队消息", "现有产品"
      titles: [
        {
          name: "首页",
          url: "/",
        },
        {
          name: "长安街",
          url: "/changanjie",
        },
        {
          name: "团队消息",
          url: "/team",
        },
        {
          name: "现有产品",
          url: "/product",
        },
      ],
      currentIndex: 0,
      selectRole: null,
      dialogFormVisible: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapGetters(["getLoginInfo"]),
    isLogin() {
      // 放置刷新丢失vuex，这里再次从localStorage中获取并给vuex
      let user = localStorage.getItem("user");
      user=JSON.parse(user)
      this.setLoginInfo(user);
      if (this.getLoginInfo) {
        return true;
      } else {
        return false;
      }
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(["setLoginInfo"]),

    itemClick(index) {
      this.currentIndex = index;
    },
    toLongin() {
      this.$router.push("/login");
    },

    toRegister() {
      this.dialogFormVisible = false;
      this.$router.push(this.selectRole);
    },
    loginOut() {
      this.setLoginInfo(null);
       localStorage.removeItem("user");
      this.$router.push("/");
      this.$message.success("退出成功")
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
  // position: sticky;
  // top: 0;
  width: 100%;
  height: 7rem;
  background-color: rgb(212, 212, 212);
  z-index: 9999;
}
.top {
  height: 82%;
  width: 100%;
  display: flex;
  background-color: white;
  .logo {
    flex: 1;
    position: relative;
    img {
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
      width: 85%;
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

// 模态框
/deep/.el-dialog {
  text-align: center;
}
/deep/.el-dialog__footer {
  text-align: center;
  .el-button {
    margin: 0 1rem;
  }
}

// 登录状态
.loginStatus {
  font-weight: 400;
  span:nth-child(2) {
    color: red;
    font-size: 0.8rem;
  }
}
</style>