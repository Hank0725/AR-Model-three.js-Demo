<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">AR Model Demo</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/model">Model</router-link>
                    <router-link to="/addmodel">AddModel</router-link>
                </b-navbar-nav> 
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
//   props: {
//     msg: String
//   }
}
</script>


<style lang="scss" scoped >
    .navbar-brand{
        margin: 0.6em;
    }
    .nav-item{
        margin: 0.5em;
    }
    .navbar-nav{
        a{
            font-size: 18px;
            color: white;
            text-decoration: none;
            margin-left: 1rem;
            margin-right: 1rem;       
        }
    }
</style>



