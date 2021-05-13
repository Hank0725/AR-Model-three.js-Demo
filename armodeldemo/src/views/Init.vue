<template>
    <div>
    </div>
</template>

<script>
module.exports = {
    ata: () => ({}),
    computed: {
        
    },
    methods: {},
    mounted: function() {
    console.log("===== Init mounted ====");
    this.$store.commit("setCurrentPage", { name: "Init" });
    //init competlet go to home
    this.$goRoute("Home");
    }
};
</script>

<style lang="scss" scoped>

</style>

