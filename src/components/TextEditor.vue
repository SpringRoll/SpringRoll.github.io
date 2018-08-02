<template>
  <quill-editor v-model="content" class="editor" :editorToolbar="toolbarOptions" />
</template>

<script>
export default {
  data() {
    return {
      content: '',
      toolbarOptions: [
        [{ 'font': [] }],
        [{ 'size':[] }],
        ['bold', 'italic', 'underline'],
        [{ 'color': [] }],
      ]
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
.editor {
  width: 69.4rem;
}
</style>

