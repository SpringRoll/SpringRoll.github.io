<template>
  <div class="json">
    <pre v-highlightjs="json"><code class="javascript code-block --wide json__container"></code></pre>

    <v-btn download="export.json" target="_blank" :href=blob color="accent" class="font-semi-bold --capital json__button">Export Code</v-btn>
  </div>

</template>

<script>
import { EventBus } from '@/class/EventBus';
export default {
  data() {
    const data = {};
    const json = JSON.stringify(data);
    return {
      json,
      data,
      blob: null,
    };
  },
  methods: {
    onUpdate() {
      EventBus.$emit('caption_get');
    },
    update(data) {
      this.data = this.cleanData(data);
      this.json = JSON.stringify(this.data, null, 2);
      this.createBlob();
    },
    cleanData(data) {
      const key = Object.keys(data);
      const output = {};
      for (let i = 0, l = key.length; i < l; i++) {
        if (!Array.isArray(data[key[i]])) {
          continue;
        }

        const filtered = data[key[i]].filter(e =>  {
          return e.content.trim() && e.start < e.end;
        });

        if (filtered.length) {
          output[key[i]] = filtered;
        }
      }
      return output;
    },
    createBlob() {
      this.blob = URL.createObjectURL(
        new Blob(
          [
            JSON.stringify(this.data)
          ],
          { type: 'application/json' }
        )
      );
    }
  },
  mounted() {
    this.createBlob();
    EventBus.$on('caption_update', this.onUpdate);
    EventBus.$on('caption_data', this.update);
  },
  destroyed() {
    EventBus.$off('caption_update', this.onUpdate);
    EventBus.$on('caption_data', this.update);
  }
};
</script>

<style lang="scss">
.json {
  display: flex;
  flex-direction: column;

  .code-block {
    width: 100%;
  }

  pre,
  code {
    overflow: auto;
  }

  &__container {
    width: 100%;
    height: 20rem;
    padding: 1rem;
  }

  &__button {
    width: 15.8rem;
    height: 3.6rem;
    align-self: flex-end;
    margin: 0.8rem 0 2rem !important;
  }
}
</style>
