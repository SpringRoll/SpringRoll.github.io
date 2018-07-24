<template>
  <Example title="Key Controls">

    <div slot="example">
      <div v-for="(value, key) in enabled" :key="key">

        <v-btn disabled>
          <v-btn :class="{error: !value, primary: value}">
            {{' ' !== key ? key : 'Space Bar' }}
          </v-btn>
        </v-btn>
      </div>
    </div>
    <pre slot="code" v-highlightjs="currentExample"><code class="javascript code-block"></code></pre>
  </Example>
</template>

<script>
import { Controller } from 'springroll-2';
import Example from '@/components/Example';
export default {
  components: {
    Example
  },
  data() {
    const listeners = [
      'w',
      'a',
      's',
      'd',
      'enter',
      'arrowleft',
      'arrowright',
      'arrowup',
      'arrowdown',
      ' '
    ];

    const enabled = {};
    const keys = listeners.map((key) => {
      enabled[key] = false;
      return {
        key,
        down: function() {
          this.enabled[key] = true;
        }.bind(this),
        up: function() {
          this.enabled[key] = false;
        }.bind(this)
      };
    });

    const controller = new Controller(keys);
    return {
      keys,
      controller,
      enabled,
      currentExample: ''
    };
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
    setInterval(
      function() {
        this.controller.update();
      }.bind(this),
      0
    );
  }
};
</script>
