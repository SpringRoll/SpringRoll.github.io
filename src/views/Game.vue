<template>
  <div class="game__container">
    <iframe id="demo-game" class="game" :src="base + 'game/index.html'" frameborder="0" />
    <div class="game__events">
      <h2>Game Events</h2>
      <div v-for="(event, key) in events" :key=key :class="{'--active': event.on }" class="game__event">{{event.label}}</div>
    </div>
  </div>
</template>

<script>
import Iframe from '@/mixins/Iframe';
import { Bellhop } from 'bellhop-iframe';

export default {
  mixins: [Iframe],
  data() {
    return {
      bellhop: new Bellhop('demo-game'),
      events: {
        'localizerResolve': { label: 'Localiztion', on: false},
        'speechSynthStart': { label: 'Speech Synch',  on: false },
        'pauseScreenActive': { label: 'Pause',  on: false },
        'soundMute': { label: 'Sound Mute',  on: false },
        'captionStart': { label: 'Captions Start',  on: false },
      }
    };
  },
  mounted() {
    const key = Object.keys(this.events);


    for (let i = 0, l = key.length; i < l; i++) {
      this.bellhop.on(key[i], () => {
        this.events[key[i]].on = true;

        setTimeout(() => {
          this.events[key[i]].on = false;
        }, (250));
      });
    }

    this.bellhop.connect(document.getElementById('demo-game'));
  }
};

</script>


<style lang="scss">
@import '~@/scss/colors';
@import '~@/scss/mixins';
.game {
  height: 52rem;
  width: 65rem;


  &__events {
    color: $accent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__event {
    @include key(25rem);
  }

  &__container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
}
</style>

