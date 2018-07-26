<template>
  <div>
    <iframe id="iframe"></iframe>
    <br/>
    <v-btn id="pause">Pause</v-btn>
    <v-btn id="sound">Toggle Mute</v-btn>
    <v-btn id="captions">Toggle Captions</v-btn>
  </div>
</template>

<script>
// import Container from 'springroll-container/dist/container.js';
// import Bellhop from 'bellhop-iframe';
import Iframe from '@/mixins/Iframe';

export default {
  mixins: [Iframe],
  data() {
    return {};
    // const container =  new Container('#iframe', {
    //   pauseButton: '#pause',
    //   soundButton: '#sound',
    //   captionsButton: '#captions'
    // });

    // return {
    //   container
    // };
  },
  mounted() {
    // this.container.openPath(this.base + 'child.html');
  }

};
</script>

