<template>
  <div class="captions">
    <div class="captions__toolbar"/>
    <div class="captions__content"/>
    <div class="captions__navigation">
      <v-btn color="accent" class="font-semi-bold font-16 capitalize" :block=true>Previous</v-btn>
      <v-btn color="accent" class="font-semi-bold font-16 capitalize" :block=true>Next</v-btn>
    </div>
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
      this.captionPlayer = new CaptionPlayer([], new HtmlRenderer(document.getElementsByClassName('captions__content')[0]));
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
  $toolbar: 5.6rem;
  $navigation: 3.6rem;

  background-color: $white-background;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
  display: flex;
  flex-direction: column;
  height: 22.5rem;
  overflow: hidden;
  width: 100%;

  &__toolbar {
    background-color: $grey;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    min-height: $toolbar;
  }

  &__content {
    height: calc(100% - #{$navigation + $toolbar});
    padding: 1rem 1rem 0rem;
  }

  &__navigation {
    display: flex;
    min-height: $navigation;
    width: 100%;

    .v-btn {
      border-radius: 0;
      margin: 0 0.09rem;
    }
  }
}
</style>


