<template>
  <div class="model">
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">

            <model-viewer :src='getModelPath()' alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer>
            PATH:{{getModelPath()}}
            <b-card-img src='./static/5F96800720E4E1603698695.jpeg' alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
            </b-card-text>
          </b-card-body>
          </b-col>
        </b-row>
      </b-card>
</div>
  </div>
</template>

<script>
import "@google/model-viewer"
// import glb from './static/LittlestTokyo.glb'
// import image from './static/5F96800720E4E1603698695.jpeg'

export default {
  name: 'Model',
  data: function() {
    return {
  
      // images: image
    }
  },
  props: {
    msg: String,
    modelKey:String
  },
  methods:
  {
    getModelPath() {
      return this.$store.state.models[this.modelKey]["path"];
    }
  },
  computed:
  {
  
  },
   mounted: function() {
     console.log("getModelPath:"+this.getModelPath());
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .model{
    width: 40vw;
    left: 0;
    background: greenyellow;
    // model-viewer{
    //   width: 80%;
    //   height: 60vh;
    // }
  }
</style>
