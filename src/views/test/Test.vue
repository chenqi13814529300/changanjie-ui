<template>

<div id="demo" style="width:600px;height:600px;"/>

</template>



<script>

 import * as THREE from "three"

 export default {

   data () {

     return {
       cube: undefined,
       scene: undefined,
       camera: undefined,
       renderer: undefined,
       floorTexture: undefined

     }

   },

   mounted () {

     this.initThree()

     this.animate()

   },

   methods: {

     initThree () {

       // 创建场景

       this.scene = new THREE.Scene()

       // 创建相机

       this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

       // 渲染器

       this.renderer = new THREE.WebGLRenderer()

       // 设置背景颜色 最新版目前默认为黑色

       this.renderer.setClearColor(0xffffff)

       this.renderer.shadowMap.enabled = true

       this.renderer.setSize(window.innerWidth, window.innerHeight)

       document.getElementById('demo').appendChild(this.renderer.domElement)

       // 加载图片

       const geometry = new THREE.BoxGeometry()

       var texture = new THREE.TextureLoader().load('static/img/123.png', () => {

         this.renderer.render(this.scene, this.camera)

       })

       // 沿x方向和Y方向都重复填充

       texture.wrapS = texture.wrapT = THREE.RepeatWrapping

       // 每面4*4

       texture.repeat.set(4, 4)

       var material = new THREE.MeshBasicMaterial({ map: texture })

       this.cube = new THREE.Mesh(geometry, material)

       this.cube.position.set(1, 0, 0)

       this.scene.add(this.cube)

       this.camera.position.z = 5

       this.renderer.render(this.scene, this.camera)

     },

     animate: function () {

       requestAnimationFrame(this.animate)

       this.cube.rotation.y += 0.01

       this.renderer.render(this.scene, this.camera)

     }

   }

 }

</script>




<style>

  .mod-home {

    line-height: 1.5;

  }

</style>

