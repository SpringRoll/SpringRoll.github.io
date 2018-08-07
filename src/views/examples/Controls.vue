<template>
  <Example title="Key Controls">

    <div slot="example">
      <div class="control__rows">
        <div class="control__row">
          <!-- {{enabled}} -->
          <div class="control__key font-semi-bold  font-16" :class="{'--active': enabled['w']}">W</div>
          <div class="control__key --medium font-semi-bold  font-16" :class="{'--active':  enabled['enter']}">Enter</div>
          <div class="control__key font-semi-bold  font-16" :class="{'--active':  enabled['arrowup']}">&uarr;</div>
        </div>

        <div class="control__row">
          <div class="control__key font-semi-bold  font-16" :class="{'--active':  enabled['a']}">A</div>
          <div class="control__key font-semi-bold  font-16" :class="{'--active':  enabled['s']}">S</div>
          <div class="control__key --empty font-semi-bold  font-16" :class="{'--active':  enabled['d']}">D</div>
          <div class="control__key font-semi-bold  font-16" :class="{'--active':  enabled['arrowleft']}">&larr;</div>
          <div class="control__key font-semi-bold  font-16" :class="{'--active':  enabled['arrowdown']}">&darr;</div>
          <div class="control__key font-semi-bold  font-16" :class="{'--active':  enabled['arrowright']}">&rarr;</div>
        </div>

        <div class="control__row">
          <div class="control__key --large font-semi-bold  font-16" :class="{'--active': enabled[' ']}">Space Bar</div>
        </div>

      </div>
    </div>
    <pre slot="code" v-highlightjs="currentExample"><code class="javascript code-block"></code></pre>

  </Example>
</template>

<script>
import { Controller } from 'springroll';
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
        auc += `\n   {key: '${key.key}', down: keyDown(), up: keyUp()}`;
        return auc;
      }, '');
      this.currentExample = `const controller = new Controller([${keyString}\n ]);\n\n setInterval(() => controller.update(), 0);`;
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

<style lang="scss">
@import "~@/scss/colors";
.control {
  &__key {
    $key-size: 4.4rem;
    $key-gap: 0.56rem;
    height: $key-size;
    width: $key-size;
    border-radius: 4px;
    background-color: #f7f7f7;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.12),
      0 1px 3px 0 rgba(0, 0, 0, 0.2);
    color: $accent;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    margin: $key-gap;

    &.--active {
      background-color: $accent;
      color: $white;
    }

    &.--empty {
      margin-right: 6.6rem;
    }

    &.--medium {
      width: ($key-size + $key-gap + 0.3) * 3;
    }

    &.--large {
      width: ($key-size + $key-gap + 0.5) * 5;
    }
  }

  &__rows {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 7.8rem;
  }

  &__row {
    display: flex;
    justify-content: center;
  }
}
</style>
