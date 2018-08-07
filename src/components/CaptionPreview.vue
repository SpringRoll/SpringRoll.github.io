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
export default {
  data() {
    return {
      captionPlayer: null,
      captions: '',
      captionData: {
        'welcome':[
          {
            'content': 'This is the first line',
            'start':0,
            'end': 1200
          },
          {
            'content': 'This is the second line',
            'start':1300,
            'end': 2400
          }
        ],
        'other':[
          {
            'content': 'this caption only has on line',
            'start':0,
            'end': 3000
          }
        ]
      }
    };
  },
  methods: {
    nextLine(line) {
      this.captions = line.content;
    },
    clear() {
      this.captions = '';
    }
  },
  mounted() {
    const captionMap = CaptionFactory.createCaptionMap(this.captionData);
    this.captionPlayer = new CaptionPlayer(CaptionFactory.createCaptionMap(this.captionData), {
      lineBegin: this.nextLine,
      lineEnd: this.clear,
    });

    this.captionPlayer.start('welcome', 0);
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
  }
}
</style>


