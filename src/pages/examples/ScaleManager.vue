<template>
  <div>
    <h2>Try resizing the window</h2>
    <div>
      <h2>Width: {{size.width}} </h2>
      <h2>Height: {{size.height}}</h2>
      <h2>Scale: {{size.ratio}}</h2>
    </div>
  </div>
</template>

<script>
import { ScaleManager } from '../../Springroll/Springroll';
export default {
  data() {
    return {
      manager: new ScaleManager(),
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight
      }
    }
  },
  mounted() {
    this.manager.enable(function(e) {
      this.size = e;
    }.bind(this));
  }
}
</script>

<style lang="scss" scoped>
.target {
  background: lightgreen;
  resize: both;
}
</style>


