<template>
  <div>
    <h2>Try resizing the window</h2>
    <div class="flex-container">
      <div class="column">
        <h2>Width: {{size.width}} </h2>
        <h2>Height: {{size.height}}</h2>
        <h2>Scale: {{size.ratio}}</h2>
      </div>
      <pre class="column example" v-highlightjs="currentExample"><code class="javascript"></code></pre>
    </div>
  </div>
</template>

<script>
import { ScaleManager } from 'springroll-2';
export default {
  data() {
    return {
      manager: new ScaleManager(),
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight
      },
      currentExample: ''
    };
  },
  methods: {
    updateCurrentExample(e) {
      this.currentExample = `import { ScaleManager } from '...';\n const manager = new ScaleManager(); \n manager.enable(e => {\n  console.log(e.width); //${
        e.width
      } \n  console.log(e.height}); //${e.height} \n  console.log(e.ratio) //${
        e.ratio
      } \n });`;
    }
  },
  mounted() {
    this.updateCurrentExample({
      width: window.innerWidth,
      height: window.innerHeight,
      ratio: window.innerWidth / window.innerHeight
    });
    this.manager.enable(
      function(e) {
        this.size = e;
        this.updateCurrentExample(e);
      }.bind(this)
    );
  }
};
</script>

<style lang="scss" scoped>
.example {
  max-width: 30rem;
}
.target {
  background: lightgreen;
  resize: both;
}
</style>
