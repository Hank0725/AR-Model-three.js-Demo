<template>
    <div>
        <h1>404</h1>
        <h4>This Page is NotFound 404</h4>
        <b-button variant="danger" @click='goBackHome'>回上頁</b-button>
    </div>
</template>

<script>
export default {
    methods: {
        goBackHome: function(){
            this.$router.push({name:'Home'})
        }
    },
mounted: function() {
    console.log("===== 404Notfound mounted ====");
    if (this.$store.state.isInit === false) {
        this.$goRoute("Init");
    }
    this.$store.commit("setCurrentPage", { name: "404Notfound" });
    }
}
</script>
