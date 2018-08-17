<template>
  <div class="captions">
    <div class="captions__toolbar">

    </div>
    <div id="this-is-test" class="captions__content"></div>
  </div>
</template>

<script>
import { CaptionPlayer, CaptionFactory, HtmlRenderer } from 'springroll';
import { EventBus } from '@/class/EventBus';
export default {
  data() {
    return {
      captionPlayer: null
    };
  },
  methods: {
    setCaptions($event) {
      this.captionPlayer.captions = CaptionFactory.createCaptionMap($event.captions);
      this.captionPlayer.start($event.name);
    },
    setup() {
      this.captionPlayer = new CaptionPlayer([], new HtmlRenderer(document.getElementById('this-is-test')));
    }
  },
  mounted() {
    EventBus.$on('json_updated', this.setCaptions);
    this.setup();
  },
  destroyed() {
    EventBus.$off('json_updated', this.setCaptions);
  }
};
</script>

<style lang="scss">
@import "~@/scss/colors";
@import "~@/scss/sizes";
.captions {
  height: 20rem;
  width: 100%;

  &__toolbar {
    height: 5.6rem;
    background-color: $grey;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  &__content {
    background-color: $white-background;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    height: 14.5rem;
    padding: 1rem;
  }
}
</style>


