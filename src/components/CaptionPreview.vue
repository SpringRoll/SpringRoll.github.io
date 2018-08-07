<template>
  <div class="captions">
    <div class="captions__toolbar">

    </div>
    <div class="captions__content">
      {{this.captions}}
    </div>
  </div>
</template>

<script>
import { CaptionPlayer, CaptionFactory } from 'springroll';
import { EventBus } from '@/class/EventBus';
export default {
  data() {
    return {
      captionPlayer: new CaptionPlayer(null, {
        lineBegin: this.nextLine,
        lineEnd: this.clear,
      }),
      captions: '',
    };
  },
  methods: {
    nextLine(line) {
      this.captions = line.content;
    },
    clear() {
      this.captions = '';
    },
    setCaptions($event) {
      this.captionPlayer.captions = CaptionFactory.createCaptionMap($event.captions);
      this.captionPlayer.start($event.name);
    }
  },
  mounted() {
    EventBus.$on('json_updated', this.setCaptions);
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
  // margin-bottom: 5rem;
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


