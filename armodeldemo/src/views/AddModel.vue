<template>
    <model-obj
    :backgroundColor='bgColor' 
    src='/static/obj/tree.obj'>
    </model-obj>
</template>

<script>
// import VueModel from '@/components/VueModel.vue'

import { ModelObj } from 'vue-3d-model';
export default {
    name: 'AddModel',
    components: { ModelObj },
    data() {
        return {
            bgColor: '#e0ffff',
        }
    },
   mounted: function() {
    console.log("===== AddModel mounted ====");
      if (this.$store.state.isInit === false) {
        this.$goRoute("Init");
     }
    this.$store.commit("setCurrentPage", { name: "AddModel" });
  }
}
// export default {
//     components: { VueModel }
// }
</script>

