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
    const listeners = ['w','a','s','d', 'enter', ' ', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown'];

    const keys = {};
    const enabled = {};
    listeners.forEach(k => {
      enabled[k] = false
      keys[k] = function() { this.enabled[k] = true }.bind(this);
    })
    const controller = new Controller(keys);
    return {
      keys,
      controller,
      enabled

    }
  },
  mounted() {
    window.addEventListener('keydown', e => console.log(e));

    setInterval(function() {
      Object.keys(this.enabled).forEach(key => this.enabled[key] = false);
      this.controller.update()
    }.bind(this), 0);
  }
}
</script>

