<!--  -->
<template>
<div class=''>
       <!-- 背景圆 -->
	<div id="bg">
		<div class="row1">
			<div class="orb1"></div>
			<div class="orb2"></div>
			<div class="orb3"></div>
		</div>
		<div class="row2">
			<div class="orb1"></div>
			<div class="orb2"></div>
			<div class="orb3"></div>
		</div>
		<div class="row3">
			<div class="orb1"></div>
			<div class="orb2"></div>
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

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/*@import url(); 引入公共css类*/
#bg{
    width: 1000px;
    height: 1000px;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);

}
</style>