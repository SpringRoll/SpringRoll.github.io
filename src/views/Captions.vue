<template>
  <div class="captions">
    <header class="header">
      <h1>Captions Studio</h1>
      <v-btn class="load-btn btn primary">
        <v-icon>{{'input'}}</v-icon>
        <input class="fileInput" @change="onDirChange" type="file" webkitdirectory="" multiple="">
      </v-btn>
    </header>
    <div class="app">
      <List @select="select" v-bind:files="files" />
      <Controls/>
    </div>
  </div>
</template>

<script>
import Controls from '@/components/captions/Controls';
import List from '@/components/captions/List';
export default {
  name: 'captions',
  components: {
    Controls,
    List
  },
  data: () => {
    return {
      files: [],
      selected: null
    };
  },
  methods: {
    select(file) {
      this.selected = file;
    },
    onDirChange($event) {
      this.files = Array.from($event.target.files)
        .map(function(files) {
          while (Array.isArray(files[0])) {
            const newArray = [];
            for (let i = 0, l = files.length; i < l; i++) {
              newArray.concat(Array.from(files[i]));
            }

            files = newArray;
          }
          return files;
        })
        .filter(
          file =>
            'audio/mp3' === file.type ||
            'audio/ogg' === file.type ||
            'audio/wav' === file.type
        );
    }
  }
};
</script>
<style lang="scss" scoped>
$headerHeight: 5rem;
$headerFontColor: #000;

.fileInput {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0;
}

.relative {
  position: relative;
}
.captions {
  height: 100%;
  overflow-y: hidden;
}

.app {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: calc(100% - (#{$headerHeight} + 3rem));
  padding: 1rem 1rem 0;
}

.header {
  align-items: center;
  color: $headerFontColor;
  display: inline-flex;
  height: $headerHeight;
  justify-content: center;
  padding: 0 1rem;
  position: relative;
  width: 100%;
}

.load-btn {
  position: absolute;
  right: 0.5rem;
}

.refresh {
  height: 2.2rem;
  right: 1.2rem;
  text-decoration: none;
  color: $headerFontColor;
  border-color: $headerFontColor;
}
</style>
