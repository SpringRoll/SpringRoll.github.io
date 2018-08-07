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
    update(data) {
      this.data = data.captions;
      this.json = JSON.stringify(data.captions, null, 2);
      this.createBlob();
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
    EventBus.$on('json_updated', this.update);
  },
  destroyed() {
    EventBus.$off('json_updated', this.update);
  }
};
</script>

<style lang="scss">
.json {
  display: flex;
  flex-direction: column;

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
