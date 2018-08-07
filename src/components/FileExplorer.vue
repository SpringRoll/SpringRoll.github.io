<template>
  <div class="explorer">
    <v-text-field class="explorer__search" @input="filter" prepend-inner-icon="search" placeholder="Search file names" solo />
    <h3 class="font-28 font-semi-bold explorer__header">Files</h3>
    <div class="explorer__dir">
      <file-directory v-if="hasFiles" v-for="(value, key) in directory.dir" :key="key" :directory="value" :name="key" :active="active" />
    </div>
    <div color="accent" class="v-btn accent explorer__input font-semi-bold font-16">
      <span>Import Files</span>
      <input class="explorer__file-input" @change="loadFiles" type="file" webkitdirectory="" multiple="">
    </div>
  </div>
</template>

<script>
import Directory from '@/class/Directory';
import FileProcessor from '@/class/FileProcessor';
import FileDirectory from '@/components/FileDirectory';
import { EventBus } from '@/class/EventBus';
export default {
  components: {
    FileDirectory
  },
  data() {
    return {
      factory: new FileProcessor(),
      directory: new Directory(),
      hasFiles: false,
      rawFiles: null,
      active: null,
    };
  },
  methods: {
    filter($event) {
      this.factory.setNameFilter($event);
      this.directory = this.factory.generateDirectories(this.rawFiles);
    },
    loadFiles($event) {
      if (!$event.target.files.length) {
        return;
      }
      this.hasFiles = true;
      this.rawFiles = $event.target.files;
      this.directory = this.factory.generateDirectories(this.rawFiles);
    },

    setActive($event) {
      if (null !== $event.file) {
        this.active = $event.file;
      }
    }
  },
  mounted() {
    EventBus.$on('file_selected', this.setActive);
  },
  destroyed() {
    EventBus.$off('file_selected', this.setActive);
  }
};
</script>

<style lang="scss">
@import "~@/scss/colors";
.explorer {
  width: 28.2rem;
  min-width: 28.2rem;
  background-color: $white-background;
  padding: 2.4rem 0 0;
  position: relative;
  height: calc(100vh - 6.6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  resize: horizontal;

  &__input {
    width: 24.2rem;
    height: 3.6rem;
    text-transform: capitalize;
    position: relative;
    margin-top: 1.5rem !important;
    flex: end;
  }

  &__header {
    align-self: flex-start;
    padding-left: 4.2rem;
    margin-bottom: 0.8rem;
    color: $secondary;
  }

  &__search {
    width: 23.4rem;
    margin-bottom: 1.9rem !important;
    max-height: 5.5rem;
    min-height: 5.5rem;
  }

  &__dir {
    overflow: auto;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  &__file-input {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
  }
}
</style>


