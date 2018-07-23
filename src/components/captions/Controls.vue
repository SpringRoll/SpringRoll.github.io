<script>
export default {
  name: 'Controls',
  props: ['selected'],
  watch: {
    selected() {
      this.unloadFile();
      this.loadFile();
    }
  },
  data: () => {
    const blob = URL.createObjectURL(
      new Blob(
        [
          JSON.stringify({
            foo: 'bar',
            bar: 'foo'
          })
        ],
        { type: 'application/json' }
      )
    );

    return {
      blob,
      LOW_VOLUME: 0.33,
      wave: null,
      controlsDisabled: true,
      fileActive: false,
      isMuted: false,
      textarea: '',
      icons: {
        play: {
          'icon-pause': false,
          'icon-play': true
        },
        volume: {
          'icon-volume-high': true,
          'icon-volume-mute': false
        }
      }
    };
  },
  computed: {
    fileIsSelected() {
      return this.selected instanceof File;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.controls {
  min-width: 20rem;
  width: 40rem;
  background-color: lightgray;
}
</style>

<template>
  <div class="controls">
    <v-text-field label="Start Time" />
    <v-text-field label="End Time" />
    <v-textarea label="Captions" value="Wut" />
  </div>

</template>
