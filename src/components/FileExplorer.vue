<template>
  <div class="explorer">
    <v-text-field class="explorer__search" @input="filter" prepend-inner-icon="search" placeholder="Search file names" solo />
    <file-directory class="explorer__dir" v-if="hasFiles" @click="fileChecked" :input="fileTree" :checked="checked" />
    <div color="accent" class="v-btn accent explorer__input font-semi-bold font-16">
      <span>Import Files</span>
      <input class="explorer__file-input" @change="loadFiles" type="file" webkitdirectory="" multiple="">
    </div>
  </div>
</template>

<script>
import { FileProcessor } from '@/class/FileProcessor';
import  FileDirectory  from '@/components/FileDirectory';
export default {
  components: {
    FileDirectory
  },
  data() {
    return {
      factory: new FileProcessor(),
      fileTree: {},
      fileList: null,
      hasFiles: false,
      checked: null

    };
  },
  methods: {
    filter($event) {
      this.factory.setNameFilter($event);
      this.fileTree = this.factory.process(this.fileList);
    },
    loadFiles($event) {
      if (!$event.target.files.length) {
        return;
      }


      this.hasFiles = true;
      this.fileList = $event.target.files;
      this.fileTree = this.factory.process($event.target.files);
    },
    fileChecked($file) {

      this.checked = $file;
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/colors";
.explorer {
  width: 28.2rem;
  background-color: $white-background;
  padding: 2.4rem 0 0;
  position: relative;
  height: calc(100vh - 6.6rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &__input {
    width: 24.2rem;
    height: 3.6rem;
    text-transform: capitalize;
    position: relative;
    margin-top: 1.5rem !important;
    flex: end;
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


