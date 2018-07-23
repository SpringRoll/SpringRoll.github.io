<template>
  <div class="example">
    <router-link class="example__link" v-for="route of routes" :key="route.name" :to="route">
      {{ route.name }}
    </router-link>
    <router-view class="example__content" />
  </div>

</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: 'SpeechSynth'
        },
        {
          name: 'ColorFilter'
        },
        {
          name: 'Resize'
        },
        {
          name: 'Controls'
        }
      ]
    };
  }
};
</script>


<style lang="scss">
.example {
  width: 100%;
  height: 100%;

  &__nav {
    display: flex;
  }
  &__content {
    margin: 1.5rem;
  }

  &__link {
    color: black;
    font-weight: bold;
    margin-right: 0.75rem;
  }
}
</style>
