<template>
  <div>
    <div class="synth">
      <span class="font-28 font-semi-bold">Modifiers</span>
      <div class="synth__column">
        <label class="synth__label font-12 font">Volume</label>
        <v-text-field class="synth__input --text font-16" @input="updateCurrentExample()" v-model="message" />
        <!-- <v-btn @click="say()" color="success" :disabled="1 > message.length">Speak</v-btn> -->
        <label class="synth__label font-12 font">Volume</label>
        <v-slider class="synth__input" color="accent" thumb-label v-model="volume" :ticks="true" min="0" max="1" step="0.1" @input="onVolume()" />
        <label class="synth__label font-12 font">Rate</label>
        <v-slider class="synth__input" color="accent" thumb-label v-model="rate" :ticks="true" min="0.1" max="10" step="0.1" @input="onRate()" />
        <label class="synth__label font-12 font">Pitch</label>
        <v-slider class="synth__input" color="accent" thumb-label v-model="pitch" :ticks="true" min="0" max="2" step="0.1" @input="onPitch()" />
        <label class="synth__label font-12 font">Voice</label>
        <v-slider class="synth__input" color="accent" thumb-label v-model="voice" :ticks="true" min="0" :max="totalVoices" @input="onVoice()" step="1" :disabled="1 > totalVoices" />
      </div>

    </div>

    <div class="synth__column">
    </div>
  </div>

</template>



<script>
// <div class="example">
//           <pre v-highlightjs="currentExample"><code class="javascript"></code></pre>
//         </div>
import { SpeechSynth } from 'springroll-2';

export default {
  data() {
    const speaker = new SpeechSynth();
    return {
      speaker,
      volume: speaker.volume,
      rate: speaker.rate,
      pitch: speaker.pitch,
      voice: 0,
      speakerName: '',
      speakerLang: '',
      message: '',
      totalVoices: speaker.voiceOptions.length || 0,
      currentExample: ''
    };
  },

  watch: {
    speaker: {
      handler: function() {
        this.totalVoices = this.speaker.voiceOptions.length;
        this.onVoice();
      },
      deep: true
    }
  },
  methods: {
    say() {
      this.speaker.say(this.message);
    },
    onVolume() {
      this.speaker.volume = this.volume;
      this.updateCurrentExample();
    },
    onRate() {
      this.speaker.rate = this.rate;
      this.updateCurrentExample();
    },
    onPitch() {
      this.speaker.pitch = this.pitch;
      this.updateCurrentExample();
    },
    onVoice() {
      this.speaker.setVoice(this.voice);
      const { name, lang } = this.speaker.getVoice();
      this.speakerName = name;
      this.speakerLang = lang;
      this.updateCurrentExample();
    },
    updateCurrentExample() {
      this.currentExample = `import { SpeechSynth } from '...'; \n const speaker = new SpeechSynth({ \n  volume: ${
        this.volume
      }, \n  rate ${this.rate}, \n  pitch: ${this.pitch}, \n  voice: ${
        this.voice
      } \n}); \n speaker.say('${this.message}');`;
    }
  },
  mounted() {
    this.updateCurrentExample();
  }
};
</script>

<style lang="scss">
@import "~@/scss/fonts";
.synth {
  &__label {
    opacity: 0.54;
  }

  &__input {
    margin-top: 0 !important;

    &.--text {
      // color: rgba(0, 0, 0, 0.87) !important;
      .v-input__control > .v-input__slot > input[type="text"] {
        color: rgba(0, 0, 0, 0.87);
        @extend .font-16;
      }
    }
  }
}
.controls {
  // max-width: 30rem;
}

// .example {
//   padding-top: 1.5rem;
// }

.column {
}

.voice-info {
  display: flex;
  justify-content: space-between;
}
</style>
