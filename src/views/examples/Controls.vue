<template>
  <div>
    <h1>
      Controls
    </h1>
    <div class="flex-container">
      <div class="column">
        <div v-for="(value, key) in enabled" :key="key">

          <v-btn disabled>
            <v-btn :class="{error: !value, primary: value}">
              {{' ' !== key ? key : 'Space Bar' }}
            </v-btn>
          </v-btn>
        </div>
      </div>
      <pre class="column" v-highlightjs="currentExample"><code class="javascript"></code></pre>
    </div>
  </div>
</template>

<script>
import { Controller } from '../../Springroll/Springroll';
export default {
  data() {
    const listeners = ['w','a','s','d', 'enter', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown', ' '];

    const enabled = {};
    const keys = listeners.map(key => {
      enabled[key] = false;
      return {
        key,
        down: function() { this.enabled[key] = true }.bind(this),
        up: function() { this.enabled[key] = false }.bind(this)
      }
    });


    const controller = new Controller(keys);
    return {
      keys,
      controller,
      enabled,
      currentExample: ''
    }
  },
  methods: {
    updateCurrentExample() {
      const keyString = this.keys.reduce((auc, key) => {
        auc += `\n   {key: '${key.key}', down: ${key.down}, up: ${key.up} }`;
        return auc;
      }, '');
      this.currentExample = `import { Controller } from '...'; \n\n const controller = new Controller([${keyString}\n ]);\n setInterval(() => controller.update(), 0);`;
    }
  },
  mounted() {
    this.updateCurrentExample();
    setInterval(function() {
      this.controller.update()
    }.bind(this), 0);
  }
}
</script>

