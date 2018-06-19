<template>
  <div>

    <div class="synth">
      <div class="column short">
        <h2>Speech Synth</h2>
        <v-text-field v-model="message" label="What to Say" />
        <v-btn @click="say()" color="success" :disabled="1 > message.length">Speak</v-btn>
      </div>

      <div class="column">
        <h2>Modifiers</h2>
        <div class="controls">;
          <v-slider label="Volume" v-model="volume" :ticks="true" min="0" max="1" step="0.1" @input="onVolume()" />
          <v-slider label="Rate" v-model="rate" :ticks="true" min="0.1" max="10" step="0.1" @input="onRate()" />
          <v-slider label="Pitch" v-model="pitch" :ticks="true" min="0" max="2" step="0.1" @input="onPitch()" />
          <v-slider label="Voice" v-model="voice" :ticks="true" min="0" :max="totalVoices" @input="onVoice()" step="1" :disabled="1 > totalVoices" />

          <div v-if="0 < totalVoices" class="voice-info">
            <h4>Voice Name: {{speakerName}}</h4>
            <h4>Language: {{speakerLang}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { SpeechSynth } from '../../Springroll/Springroll';

export default {
  data() {
    const speaker = new SpeechSynth()
    return {
      speaker,
      volume: speaker.volume,
      rate: speaker.rate,
      pitch: speaker.pitch,
      voice: 0,
      speakerName: "",
      speakerLang: "",
      message: "",
      totalVoices: speaker.voiceOptions.length || 0,
    }
  },

  watch: {
    speaker:{
      handler: function () {
        this.totalVoices = this.speaker.voiceOptions.length;
        this.onVoice();
      },
      deep: true
    },
  },
  methods: {
    say() {
      this.speaker.say(this.message);
    },
    onVolume(){
      this.speaker.volume = this.volume;
    },
    onRate() {
      this.speaker.rate = this.rate;
    },
    onPitch() {
      this.speaker.pitch = this.pitch;
    },
    onVoice() {
      this.speaker.voice = this.voice;
      this.speakerName = this.speaker.voice.name;
      this.speakerLang = this.speaker.voice.lang;
    }
  }
}
</script>

<style lang="scss" scoped>
.short {
  max-height: 10rem;
}
.synth {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 65rem;
}
.controls {
  max-width: 30rem;
}

.column {
  display: flex;
  flex-direction: column;
  min-width: 30rem;
}

.voice-info {
  display: flex;
  justify-content: space-between;
}
</style>

