<template>
  <div class="home">
    <h1>AR模型首頁</h1>
    <Model msg="Welcome to Your Vue.js App" modelKey="LittlestTokyo" ></Model>
       <Model msg="Welcome to Your Vue.js App" modelKey="LittlestTokyo2" ></Model>
  </div>
</template>

<script>
import Model from '@/components/Model.vue'

export default {
  name: 'Home',
  data: function() {
    return {
      // images: image
    }
  },
  components: {
    Model
  },
  mounted: function() {
    console.log("===== Home mounted ====");
    if (this.$store.state.isInit === false) {
        this.$goRoute("Init");
    }
    this.$store.commit("setCurrentPage", { name: "Home" });
  },
  computed:
  {
    
  }
}
</script>

<style lang="scss" scoped >
    h1{
      font-weight: bold;
    }
</style>