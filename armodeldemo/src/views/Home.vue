<template>
  <div class="home">
    <h1>AR模型首頁</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Model msg="Welcome to Your Vue.js App"/>
    <model-viewer src="@/armodeldemo/src/assets/models/LittlestTokyo.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer>
  </div>
</template>

<script>
// @ is an alias to /src
import "@google/model-viewer"
import Model from '@/components/Model.vue'

export default {
  name: 'Home',
  components: {
    Model
  }
}
</script>

<style lang="scss" scoped >
    h1{
      font-weight: bold;
    }
</style>