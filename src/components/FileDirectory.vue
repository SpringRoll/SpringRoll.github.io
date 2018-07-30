<template>
  <v-list>
    <v-list-group class="directory" :value="true" prepend-icon="folder">
      <v-list-tile slot="activator" class="directory__dir-name">
        <v-list-tile-content>
          <v-list-tile-title class="directory__name font-semi-bold font-16"> {{ name }} </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile-content v-for="(value,key) in input" :key="key" v-if="isFile(value)">

        <label class="directory__file">
          <v-icon class="directory__icon" :class="{'--active': isSelected(value)}">audiotrack</v-icon>
          <input :id="`${key}_${value.name}`" class="directory__select" @change="emit" type="radio" name="selectedFile" :value="value" :checked="isSelected(value)" />
          <label :for="`${key}_${value.name}`" class="font-16 directory__label">{{value.name}}</label>
        </label>
      </v-list-tile-content>
      <file-directory class="directory__nested" v-else @click="$emit('click', $event)" :input="value" :name="key" :sub="true" :selected="selected" />
    </v-list-group>
  </v-list>
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
    selected: File,
    sub: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isFile(file) {
      return file instanceof File;
    },
    isSelected(file) {
      return this.isFile(this.selected) && this.isFile(file) && file.webkitRelativePath === this.selected.webkitRelativePath;
    },
    emit($event) {
      this.$emit('click', $event.target._value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/scss/fonts";
@import "~@/scss/colors";
.directory {
  $this: &;

  &__name {
    color: $secondary;
  }

  &__icon {
    padding-right: 1.7rem;

    &.--active {
      color: $secondary;
    }
  }

  &__file {
    align-items: center;
    color: $secondary;
    display: flex;
    height: 3.2rem;

    padding-left: 1.5rem;
  }

  &__nested {
    padding-left: 1rem;
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
      left: -10rem;
      right: -10rem;
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

.v-list__tile {
  padding: 0 0.5rem !important;
}

.v-list,
.theme--light .v-list,
.application
  .theme--light.v-list
  .theme--light
  .v-list
  .v-list__group--active:before,
.application .theme--light.v-list .v-list__group--active:before,
.theme--light .v-list .v-list__group--active:after,
.application .theme--light.v-list .v-list__group--active:after {
  background: transparent !important;
  color: $black !important;
}

.theme--light .v-list .v-list__group--active:before,
.application .theme--light.v-list .v-list__group--active:before,
.theme--light .v-list .v-list__group--active:after,
.application .theme--light.v-list .v-list__group--active:after {
  background: transparent !important;
}
</style>


