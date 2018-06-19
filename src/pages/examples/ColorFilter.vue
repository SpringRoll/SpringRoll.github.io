<template>
  <div>
    <v-select v-model="selected" item-text="name" :items="types" @input="changeFilter($event)" />
    <img ref="image" class="example__image" src="@/assets/example.png" alt="Example Image">

  </div>
</template>

<script>
import { ColorFilter } from '../../Springroll/Springroll';
export default {
  data() {
    const filter = new ColorFilter();
    const types = [{name: 'None', value: null}];
    types.push(...filter.types);

    console.log(types);
    return {
      selected: null,
      filter,
      types
    }
  },
  methods: {
    changeFilter(e) {
      if (null === e) {
       this.filter.removeFilter();
       return;
      }
      this.filter.changeFilter(e);
    }
  },
  mounted() {
    this.filter.element = this.$refs.image;
  }
}
</script>


<style lang="scss" scoped>
.example {
  &__image {
    width: 100%;
    max-width: 50rem;
  }
}
</style>

