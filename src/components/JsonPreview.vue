<template>
  <div class="json">
    <pre v-highlightjs="json"><code class="javascript code-block --wide json__container"></code></pre>

    <v-btn color="accent" class="font-semi-bold --capital json__button"> Export Code </v-btn>
  </div>

</template>

<script>
// import { EventBus } from '@/class/EventBus';
export default {
  data() {
    return {
      json: JSON.stringify({foo: 'bar'})
    };
  }
};
</script>

<style lang="scss">
.json {
  display: flex;
  flex-direction: column;

  &__container {
    width: 100%;
    height: 20rem;
    padding: 1rem;
  }

  &__button {
    width: 15.8rem;
    height: 3.6rem;
    align-self: flex-end;
    margin: 0.8rem 0 2rem !important;
  }
}
</style>
