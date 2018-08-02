<template>
  <div class="wave__container">
    <div id="wave__container" class="wave__wave"></div>
    <div class="wave__controls">
      <div class="wave__buttons">
        <v-btn @click="rewind" class="wave__button" icon small>
          <v-icon>fast_rewind</v-icon>
        </v-btn>
        <v-btn @click="previous" class="wave__button" icon small>
          <v-icon>skip_previous</v-icon>
        </v-btn>
        <v-btn @click="play" class="wave__button" icon small>
          <v-icon> {{ isPlaying ? 'pause' : 'play_arrow' }}</v-icon>
        </v-btn>
        <v-btn @click="next" class="wave__button" icon small>
          <v-icon>skip_next</v-icon>
        </v-btn>
        <v-btn @click="forward" class="wave__button" icon small>
          <v-icon>fast_forward</v-icon>
        </v-btn>
      </div>
      <div class="wave__timer">
        <span class="font-21">{{timeStamp}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import WaveSurfer from 'wavesurfer.js';
import { EventBus } from '@/class/EventBus';

export default {
  data() {
    return {
      wave: null,
      isPlaying: false,
      currentTime: 0.0
    };
  },
  computed: {
    timeStamp() {
      const prepend = (i) => i < 10 ? '0' + i : i;
      const minutes = this.currentTime / 60 | 0;
      const seconds = this.currentTime % 60 | 0;
      const miliSeconds = ((this.currentTime % 1) * 100) | 0;
      return `${prepend(minutes)}:${prepend(seconds)}:${prepend(miliSeconds)}`;
    }
  },
  methods: {
    updateTimeStamp() {
      this.currentTime = this.wave.getCurrentTime();
      this.$emit('time', this.currentTime);
    },
    initWave() {
      this.wave = WaveSurfer.create({
        container: '#wave__container',
        cursorColor: '#000',
        cursorWidth: 1,
        fillParent: true,
        height: 201,
        mediaControls: true,
        mediaType: 'audio',
        minPxPerSec: 100,
        normalize: true,
        progressColor: 'rgba(0,0,0,0)',
        responsive: true,
        waveColor: '#0C7AC0',
      });

      this.wave.on('audioprocess',  this.updateTimeStamp);
      this.wave.on('seek', this.updateTimeStamp);
      this.wave.on('finish', () => this.isPlaying = false);
    },

    forward() {
      this.wave.skipForward();
    },
    rewind() {
      this.wave.skipBackward();
    },

    play() {
      this.wave.playPause();
      this.isPlaying = this.wave.isPlaying();
    },

    previous() {
      EventBus.$emit('previous_file');
    },
    next() {
      EventBus.$emit('next_file');
    },

    loadFile($event) {
      if ($event.file instanceof File) {
        this.isPlaying = false;
        this.currentTime = 0.0;
        this.wave.loadBlob($event.file);
      }
    }

  },
  mounted() {
    this.initWave();
    EventBus.$on('file_selected', this.loadFile);
  },
  destroyed() {
    EventBus.$off('file_selected', this.loadFile);
  }

};
</script>

<style lang="scss">
@import "~@/scss/colors";
@import "~@/scss/sizes";

.wave {
  &__container {
    width: 69.4rem;
  }

  &__wave {
    height: 20.1rem;
    background-color: $white-background-opacity;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    background-color: $white-background;
    height: 5.6rem;
    align-items: center;
    padding: 0 2.4rem;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }

  &__timer {
    height: 3.6rem;
    width: 15.3rem;
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $secondary;
  }
}
</style>


