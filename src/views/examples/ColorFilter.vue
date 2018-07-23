<template>
  <div class="filter">
    <div class="filter__column">
      <v-select v-model="selected" item-text="name" :items="types" @input="changeFilter($event)" />
      <img ref="image" src="@/assets/example.png" alt="Example Image">
    </div>
    <div class="filter__column">
      <pre v-highlightjs="currentExample"><code class="javascript"></code></pre>
    </div>
  </div>
</template>

<script>
import { ColorFilter } from 'springroll-2';
export default {
  data() {
    const filter = new ColorFilter();
    const types = [{ name: 'None', value: null }];
    types.push(...filter.types);

    return {
      selected: null,
      filter,
      types,
      currentExample: ''
    };
  },
  methods: {
    changeFilter(e) {
      this.updateCodeExample(e);
      if (null === e) {
        this.filter.removeFilter();
        return;
      }
      this.filter.changeFilter(e);
    },
    updateCodeExample(value) {
      this.currentExample =
        'import { ColorFilter } from "...";\n' +
        (null === value
          ? ' filter.removeFilter()'
          : ` const filter = new ColorFilter(); \n filter.changeFilter('${value}')`);
    }
  },
  mounted() {
    this.filter.element = this.$refs.image;
    this.updateCodeExample(null);
  }
};
</script>


<style lang="scss">
.filter {
  display: flex;

  &__example {
    &__image {
      width: 100%;
      max-width: 50rem;
    }
  }

  &__column {
    width: 50%;
  }
}
</style>
