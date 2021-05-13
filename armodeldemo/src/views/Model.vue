<template>
  <div class="model">
    <h1>This is an Model page</h1>
  </div>
</template>

<script>
export default {
    methods: {
      
    },
  mounted: function() {
    console.log("===== Model mounted ====");
    if (this.$store.state.isInit === false) {
        this.$goRoute("Init");
    }
    this.$store.commit("setCurrentPage", { name: "Model" });
  }
}
</script>
