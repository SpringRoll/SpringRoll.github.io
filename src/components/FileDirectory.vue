<template>
  <div class="directory">
    <div v-if="'' !== name">
      <v-btn flat class="directory__button">
        <div class="directory__dir font-semi-bold font-16">
          <span>{{name}}</span>
        </div>
      </v-btn>
      <!-- <span class="directory__dir-icon"> &#8963; </span> -->
    </div>
    <h3 v-else> Files </h3>
    <div v-for="(value,key) in input" :key="key" v-if="isFile(value)">
      <div class="directory__file">
        <input :id="`${key}_${value.name}`" class="directory__select" type="radio" v-on:click="$emit('click', value)" name="selectedFile" :value="value.name" :checked="value === checked" />
        <label :for="`${key}_${value.name}`" class="font-16 directory__label">{{value.name}}</label>
      </div>
    </div>
    <file-directory class="directory__nested" v-else @click="$emit('click', $event)" :input="value" :name="key" />
  </div>
</template>

<script>
export default {
  name: 'file-directory',
  props: {
    input: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    checked: File,
  },
  methods: {
    isFile(file) {
      return file instanceof File;
    }
  }
};
</script>

<style lang="scss">
@import "~@/scss/fonts";
@import "~@/scss/colors";
.directory {
  $this: &;
  padding: 0 1rem;

  &__nested {
    border-left: 2px solid $selected;
  }

  &__button {
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }

  &__dir {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: $secondary;
  }

  &__dir-icon {
    position: absolute;
    right: 2rem;
  }

  &__file {
    align-items: center;
    color: $secondary;
    display: flex;
    height: 3.2rem;
  }

  &__select {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    height: 3.2rem;
    opacity: 0;

    &:checked + #{$this}__label::before {
      position: absolute;
      content: " ";
      z-index: 0;
      left: 0;
      right: 0;
      height: 3.2rem;
      background-color: rgba(153, 153, 153, 0.2);
    }
  }

  &__label {
    @extend .font-14;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
}
</style>


