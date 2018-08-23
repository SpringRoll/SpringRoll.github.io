<template>
  <div class="editor">
    <quill-editor v-model=content @change="onEdit" class="editor__quill"/>
    <div class="editor__controls">
      <TimeStampInput @time=onStartTimeUpdated :default=start name="start"/>
      <TimeStampInput @time=onEndTimeUpdated :default=end name="end"/>
    </div>
    <v-btn v-if=canAdd @click="addCaption" :disabled=!canAdd :block=true color="accent" class="editor__button font-16 font-semi-bold capitalize">Add Caption</v-btn>
    <v-btn v-else :block=true color="accent" class="editor__button font-16 font-semi-bold capitalize">Remove Caption</v-btn>
  </div>
</template>

<script>
import TimeStampInput from './TimeStampInput';
import { EventBus } from '@/class/EventBus';
export default {
  components: {
    TimeStampInput
  },
  data() {
    return {
      index: 0,
      canRemove: false,
      content: '',
      start: 0,
      end: 0,
      max: 0
    };
  },
  computed: {
    canAdd() {
      return this.index >= this.max - 1;
    }
  },
  methods: {
    onEdit($event) {
      EventBus.$emit('caption_update', {content: $event.html });
    },
    onStartTimeUpdated($event) {
      EventBus.$emit('caption_update', { start: $event });
    },
    onEndTimeUpdated($event) {
      EventBus.$emit('caption_update', { end: $event });
    },
    onUpdate($event) {
      const {content, start, end} = $event.data;
      this.content = content;
      this.start = start;
      this.end = end;
      this.max = $event.max;
      this.index = $event.index;
    },
    addCaption() {
      EventBus.$emit('caption_add');
    }
  },

  mounted() {
    EventBus.$on('caption_changed', this.onUpdate);
  },
  destroyed() {
    EventBus.$off('caption_changed', this.onUpdate);
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