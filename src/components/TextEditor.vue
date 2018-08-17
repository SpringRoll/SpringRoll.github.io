<template>
  <div class="editor">
    <quill-editor v-model=content class="editor__quill"/>
    <div class="editor__controls">
      <TimeStampInput @time=startTimeUpdated :default=active.start name="start"/>
      <TimeStampInput @time=endTimeUpdated :default=active.end name="end"/>
    </div>
    <v-btn :block=true color="accent" class="font-16 font-semi-bold capitalize">{{true ? 'Add Caption' : 'Remove Caption'}}</v-btn>
  </div>
</template>

<script>
import TimeStampInput from './TimeStampInput';
import { EventBus } from '@/class/EventBus';
import { Caption } from '@/class/Caption';
export default {
  components: {
    TimeStampInput
  },
  data() {
    return {
      captions: {},
      content: '',
      start: 0,
      end: 0,
      active: new Caption('')
    };
  },
  watch:{
    content() {
      this.active.updateContent({
        content: this.content
      });
      this.put();
    }
  },
  methods: {
    startTimeUpdated($event) {
      this.active.updateContent({
        start: $event
      });
      this.put();
    },
    endTimeUpdated($event) {
      this.active.updateContent({
        end: $event
      });
      this.put();
    },
    changeCaptionFile($event) {
      const name = $event.file.name.replace(/.(ogg|mp3|mpeg)$/, '').trim();

      if (!name.length || name === this.active.name) {
        return;
      }

      this.put();

      this.active = 'undefined' !== typeof this.captions[name]
        ? new Caption(name, this.captions[name][0])
        : new Caption(name);

      const {end, start, content} = this.active;

      this.content = content;
      this.end = end;
      this.start = start;
    },
    put() {
      if (this.active.name.length) {
        this.captions[this.active.name] = this.active.getData();

        //NOTE: Currently we are only using one index in the array, but if/when we update a caption to have multiple indexs this will have to change
        if (this.captions[this.active.name][0].content.length < 1) {
          this.captions[this.active.name][0].content = ' ';
        }

        EventBus.$emit('json_updated', { name:this.active.name, captions: this.captions});
      }
    }
  },

  mounted() {
    EventBus.$on('file_selected', this.changeCaptionFile);
  },
  destroyed() {
    EventBus.$off('file_selected', this.changeCaptionFile);
  }
};
</script>

<style lang="scss">
@import "~@/scss/colors";
@import "~@/scss/fonts";
@import "~@/scss/sizes";
.editor {
  $quill: 20rem;
  $controls: 10.8rem;

  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
  height: $quill + $controls + 5rem;
  overflow: hidden;
  width: 100%;

  &__quill {
    height: $quill;
  }

  &__controls {
    background-color: $grey;
    display: flex;
    height: $controls;
    justify-content: space-between;
    padding: 1rem;
  }
}
</style>

