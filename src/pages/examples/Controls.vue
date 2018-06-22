<template>
  <div>
    <h1>
      Controls
    </h1>

    <div v-for="(value, key) in enabled" :key="key">

      <v-btn disabled>
        <v-btn :class="{error: !value, primary: value}">
          {{' ' !== key ? key : 'Space Bar' }}
        </v-btn>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { Controller } from '../../Springroll/Springroll';
export default {
  data() {
    const listeners = ['w','a','s','d', 'enter', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown'];

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
      enabled
    }
  },
  mounted() {
    setInterval(function() {
      this.controller.update()
    }.bind(this), 0);
  }
}
</script>

