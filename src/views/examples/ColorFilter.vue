<template>
  <Example title="Filter Example" :large="true">
    <div slot="example">
      <img class="filter__image" ref="image" src="@/assets/example.png" alt="Example Image">
      <label class="filter__label">Color Filter</label>
      <v-select class="filter__select" v-model="selected" item-text="name" :items="types" @input="changeFilter($event)" />
    </div>
    <pre slot="code" v-highlightjs="currentExample"><code class="javascript code-block"></code></pre>
  </Example>
</template>

<script>
import { ColorFilter } from 'springroll-2';
import Example from '@/components/Example';
export default {
  components: {
    Example
  },
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
        (null === value
          ? 'filter.removeFilter()'
          : `const filter = new ColorFilter(); \n\n filter.changeFilter('${value}')`) ;
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

  &__label {
    opacity: 0.54;
  }

  &__select {
    margin-top: 0 !important;
  }

  &__image {
    width: 100%;
    min-width: 36.6rem;
    margin-bottom: 1.1rem;
  }
}
</style>
