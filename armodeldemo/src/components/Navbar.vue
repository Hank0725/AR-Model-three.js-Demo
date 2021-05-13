<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link to="/">AR Model Demo</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <div  @click="gotoHome">Home</div>
                    <div  @click="gotoAddModel">Model</div>
                    <div  @click="gotoModel">AddModel</div>
                </b-navbar-nav> 
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
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
        console.log("===== 【Navbar】 mounted ====");
    }
}
</script>


<style lang="scss" scoped >
    .navbar-brand{
        margin: 0.6em;
    }
    .nav-item{
        margin: 0.5em;
    }
    a{
            font-size: 18px;
            color: white;
            text-decoration: none;
            margin-left: 1rem;
            margin-right: 1rem;       
    }    
</style>



