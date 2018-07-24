<template>
  <div class="example">
    <v-btn flat exact-active-class="--active-route" class="example__link font-semi-bold font-21" v-for="route of routes" :key="route.name" :to="route">
      {{ route.name }}
    </v-btn>
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
@import "~@/scss/colors";
.example {
  width: 100%;
  height: 100%;
  margin-top: 3.9rem;

  .v-btn--active:before,
  .v-btn:hover:before,
  .v-btn:focus:before {
    color: transparent;
  }

  &__nav {
    display: flex;
  }
  &__content {
    margin: 7rem;
  }

  &__link {
    color: $accent !important;
    margin-right: 0.75rem;

    &.--active-route {
      background-color: $accent;
      color: $white !important;
    }
  }
}
</style>
