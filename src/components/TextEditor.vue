<template>
  <div class="editor">
    <quill-editor v-model="content" class="editor"/>
    <div class="editor__controls">
      <TimeStampInput name="Start"/>
      <TimeStampInput name="End"/>
    </div>
  </div>
</template>

<script>
import TimeStampInput from './TimeStampInput';
// import { EventBus } from '@/class/EventBus';
export default {
  components: {
    TimeStampInput
  },
  data() {
    return {
      content: ''
    };
  },
  watch:{
    content() {
      console.log(this.content);
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/colors";
@import "~@/scss/fonts";
@import "~@/scss/sizes";
.editor {
  width: 100%;
  &__button {
    width: 25.2rem;
    height: 3.6rem;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    background-color: $grey;
    padding: 1rem;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>

