<template>
  <div class="model">
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <model-viewer src="./armodeldemo/src/assets/models/LittlestTokyo.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer>
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
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
    <!-- <model-viewer src="@/armodeldemo/src/assets/models/LittlestTokyo.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer> -->
  </div>
</template>

<script>
import "@google/model-viewer"

export default {
  name: 'Model',
  props: {
    msg: String
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
