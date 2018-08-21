<template>
  <div class="editor">
    <quill-editor v-model=quillContent @change="onEdit" class="editor__quill"/>
    <div class="editor__controls">
      <TimeStampInput @time=startTimeUpdated :default=start name="start"/>
      <TimeStampInput @time=endTimeUpdated :default=end name="end"/>
    </div>
    <v-btn @click="nextIndex" :disabled=!canAdd v-if="atLastIndex" :block=true color="accent" class="editor__button font-16 font-semi-bold capitalize">Add Caption</v-btn>
    <v-btn v-else :block=true color="accent" class="editor__button font-16 font-semi-bold capitalize">Remove Caption</v-btn>
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
      active: new Caption(''),
      currentIndex: 0,
      quillContent: '',
      canRemove: false,
      start: 0,
      end: 0
    };
  },
  computed: {
    atLastIndex() {
      return Array.isArray(this.captions[this.active.name]) && this.currentIndex === (this.captions[this.active.name].length - 1);
    },
    canAdd() {
      // If times are not properly set
      if (this.active.start >= this.active.end) {
        return false;
      }

      const currentCaption = this.captions[this.active.name];

      // If the only caption, allow
      if (2 > currentCaption.length) {
        return true;
      }

      // If not at the last index
      if (this.currentIndex !== currentCaption.length - 1) {
        return false;
      }

      const current = currentCaption[this.currentIndex];
      const previous = currentCaption[this.currentIndex - 1];

      if (previous.end > current.start) {
        return false;
      }

      return true;
    }
  },
  methods: {
    onEdit($event) {
      this.active.updateContent({
        content: $event.html
      });
      this.emit();
    },
    swap() {
      this.canRemove = !this.canRemove;
    },
    startTimeUpdated($event) {
      this.active.updateContent({
        start: $event
      });
      this.emit();
    },
    endTimeUpdated($event) {
      this.active.updateContent({
        end: $event
      });
      this.emit();
    },
    fileChange($event) {
      const name = $event.file.name.replace(/.(ogg|mp3|mpeg)$/, '').trim();

      if (!name.length || name === this.active.name) {
        return;
      }

      if (!Array.isArray(this.captions[name])) {
        this.captions[name] = [{content: '', end: 0, start: 0}];
      }

      this.active.name = name;

      this.currentIndex = 0;
      this.changeActive();

    },
    nextIndex() {
      this.currentIndex++;
      if ('undefined' === typeof this.captions[this.active.name][this.currentIndex]) {
        const t = this.captions[this.active.name][this.currentIndex - 1].end + 1;
        this.captions[this.active.name].push({content: '', end: t, start: t});
      }

      this.changeActive();
    },
    prevIndex() {
      this.currentIndex -= (0 < this.currentIndex) ? 1 : 0;
      this.changeActive();
      this.emit();
    },

    changeActive() {
      this.active.updateContent(this.captions[this.active.name][this.currentIndex]);
      this.quillContent = this.active.content;
      this.start = this.active.start;
      this.end = this.active.end;
      this.emit();
    },

    emit() {
      const data = this.active.getData();
      if (!data.content.length) {
        data.content = ' ';
      }
      this.captions[this.active.name][this.currentIndex] = data;
      EventBus.$emit('json_updated', { name:this.active.name, captions: this.captions, index: this.currentIndex});
    },
  },

  mounted() {
    EventBus.$on('file_selected', this.fileChange);
    EventBus.$on('index_next', this.nextIndex);
    EventBus.$on('index_prev', this.prevIndex);
  },
  destroyed() {
    EventBus.$off('file_selected', this.fileChange);
    EventBus.$off('index_next', this.nextIndex);
    EventBus.$off('index_prev', this.prevIndex);
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
  height: $quill + $controls + 3.6rem;
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

  &__button {
    &.v-btn {
      margin: 0;
    }
  }
}
</style>