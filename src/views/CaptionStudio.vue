<template>
  <div class="caption__studio">
    <FileExplorer @file="loadFile" />
    <div class="caption__container">
      <WaveSurfer :file="file" />
      <div>TODO: TEXT PREVIEW</div>
      <div>TODO: TEXT EDTIOR
        <div>TODO: Start time and end time</div>
      </div>

      <div>
        TODO: Code Preview

        <div>TODO: EXPORT</div>
      </div>
    </div>
  </div>
</template>

<script>
import FileExplorer from '@/components/FileExplorer';
import WaveSurfer from '@/components/WaveSurfer';

export default {
  data() {
    return {
      file: null
    };
  },
  components: {
    FileExplorer,
    WaveSurfer
  },
  methods: {
    loadFile($event) {
      if ($event instanceof File) {
        this.file = $event;
      }
    }
  }
};
</script>

<style lang="scss">
.caption {
  &__studio {
    display: flex;
  }

  &__container {
    padding: 3.75rem 2.4rem 0;
  }
}
</style>


