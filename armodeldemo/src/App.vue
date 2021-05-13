<template>
  <div id="app">
    <Navbar></Navbar>
    <button @click="gotoHome">gotoHome</button>
    <button @click="gotoAddModel">gotoAddModel</button>
    <button @click="gotoModel">gotoModel</button>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    components: {
      Navbar
    },
    computed: {

    },
    methods: {
    onInit()
    {
        
    },
    gotoHome()
      {
        console.log("gotoHome");
        this.$goRoute("Home",true);
      },
    gotoAddModel()
      {
      console.log("gotoAddModel");
        this.$goRoute("AddModel",true);
      },
    gotoModel()
      {
        console.log("gotoModel");
        this.$goRoute("Model",true);
      }
    },
    mounted: function() {
      console.log("===== 【App】 mounted ====");
      this.onInit();
    }
  }
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
